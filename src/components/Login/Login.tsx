import React, {useState, useContext} from 'react';
import {Redirect} from 'react-router-dom';
import {RouteComponentProps, withRouter} from 'react-router';
import {AuthContext} from '../Auth/Auth';
import fb from '../../firebase';

const Login: React.FC<RouteComponentProps> = ({history}) =>{
  const [phoneNumber, setPhoneNumber] = useState<Partial<string | undefined | null>>(null);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<fb.auth.ConfirmationResult | null>(null);
  const [code, setCode] = useState<Partial<string | undefined | null>>(null);

  const currentUser: Partial<fb.User> | undefined | null = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  const handleGetClick = () =>{
    const appVerifier = new fb.auth.RecaptchaVerifier('recaptcha-container', {size: 'invisible'})
      fb.auth().setPersistence(fb.auth.Auth.Persistence.LOCAL)
        .then(()=>{
          return fb.auth().signInWithPhoneNumber(phoneNumber!, appVerifier);})
          .then(function (confirmRes) {
            setConfirmationResult(confirmRes);
            setIsCodeSent(true);
          })
          .catch(function (error) {
            setIsCodeSent(false);
            console.log(error);
          });
  }

  const handleSentClick = () => {
      confirmationResult!.confirm(code!)
        .then(()=>{
          console.log('success!');
          history.push("/");
        })
        .catch((error)=>{
          console.log(error);
        })
  }

  return(
    <>
      <h1>
        {!!isCodeSent ? 'Код из СМС' : 
        'Номер телефона, а затем код из СМС' }
      </h1>
        {!!isCodeSent ? 
        <input 
          type = "text" 
          placeholder = "123456"
          onChange = {event => {
            setCode(event.target.value)
          }}/> : 
        <input 
          type = "tel" 
          placeholder = "+7 800 555 35 35"
          onChange = {event => {
            setPhoneNumber(event.target.value)
          }}/>}
      <button onClick={!!isCodeSent ? handleSentClick : handleGetClick}>Получить код</button>
    </>
  );
}

export default withRouter(Login);