import React, { useState, useEffect } from 'react';
import fb from '../../firebase';
import { Category, Meal } from 'types';

type ReferenceState = {
  reference: fb.firestore.DocumentReference,
  title: string,
}

interface MealsListProps {
  category: Category,
  references: ReferenceState[],
}

const MealsList: React.FC<MealsListProps> = ({category, references}) => {
  const [meals, setMeals] = useState<Meal[]>([]);


  useEffect(()=>{
      const db = fb.firestore();
      console.log(references);
      let ref;
      references.forEach((item)=>{
        if(item.title === category.title)
          ref = item.reference;
      })
      return db.collection('meals').onSnapshot((snap)=>{
          const data: Meal[] = [];
          snap.forEach((doc)=>{
          doc.data().categories[0].ref.get().then(snap=>{
            console.log(snap.data())
          })
              data.push({
                id: doc.data().id,
                title: doc.data().title,
                categories: doc.data().categories,
                measure: doc.data().measure,
                price: doc.data().price,
                emoji: doc.data().emoji,
                uploadcareId: doc.data().uploadcareId,
                kind: doc.data().kind
              });
          });

          

          setMeals(data);
          console.log(data);
      });
}, []);

  return(
    <>
    </>
  );
}

export default MealsList;