import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "The boys"]);

  //console.log(import.meta.env.VITE_API_KEY);
  const onAddCategory = (category) => {
    if (categories.includes(category)) return;

    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />
      <ol>
        {categories.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </>
  );
};
