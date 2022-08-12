import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 2) return;

    //setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Buscar GIFs"
        value={inputValue}
      />
    </form>
  );
};
