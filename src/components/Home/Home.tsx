import React from 'react';
import Header from '../Header/Header';
import CategoriesList from '../CategoriesList/CategoriesList';

const Home: React.FC = () => {
  return(
    <>
      <Header/>
      <main>
        <CategoriesList/>
      </main>
    </>
  );
}

export default Home;