import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["The boys"]);

  //console.log(import.meta.env.VITE_API_KEY);
  const onAddCategory = (category) => {
    if (categories.includes(category)) return;

    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
    </>
  );
};
