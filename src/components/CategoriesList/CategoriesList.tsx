import React, {useState, useEffect} from 'react';
import CategorySection from '../CategorySection/CategorySection';
import fb from '../../firebase';
import { Category } from 'types';

type ReferenceState = {
  reference: fb.firestore.DocumentReference,
  title: string,
}

const CategoriesList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [references, setReferences] = useState<ReferenceState[]>([]);

  useEffect(()=>{
      const db = fb.firestore();
      return db.collection('categories').onSnapshot((snap)=>{
        const data: Category[] = [];
        snap.forEach((doc)=>{
          data.push({title: doc.data().title, order: doc.data().order})
          references.push({reference: doc.ref, title: doc.data().title})
        })
        setCategories(data);
      });
  }, []);

  return(
    <ul>
      {categories.map(category=>(
        <li>
          <CategorySection 
          //@ts-ignore
          category={category}
          references={references}/>
        </li>
      ))}
    </ul>
  );
}

export default CategoriesList;