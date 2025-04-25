import { useState } from "react";
import { ArticleListNewDiscount, ButtonList } from "../components";
import data from "../data/dataNewDiscount";

export const NewDiscountSection = () => {
  const allCategories = [...new Set(data.map((article) => article.category))];

  const [articles, setArticles] = useState(() => {
    return data.filter((article) => article.category === "Nueva Mercancia");
  });
  const [selectedCategory, setSelectedCategory] = useState("Nueva Mercancia");

  const filterCategory = (category) => {
    setSelectedCategory(category);
    const filteredData = data.filter(
      (article) => article.category === category
    );
    setArticles(filteredData);
  };

  return (
    <>
      <ButtonList categories={allCategories} filterCategory={filterCategory} selectedCategory = {selectedCategory} />;
      <ArticleListNewDiscount articles={articles} />;
    </>
  );
};
