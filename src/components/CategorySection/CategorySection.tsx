import React, {useState, useEffect} from 'react';
import MealsList from './../MealsList/MealsList';
import { Category } from 'types'
import fb from '../../firebase';

type ReferenceState = {
  reference: fb.firestore.DocumentReference,
  title: string,
}

interface CategoryProps {
  category: Category,
  references: ReferenceState[]
}

const CategorySection: React.FC<CategoryProps> = ({category, references}) => {


  return(
    <section>
      <h2>{category.title}</h2>
      <MealsList
      category={category}
      references={references}/>
    </section>
  );
}

export default CategorySection;