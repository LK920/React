import React, { useState } from "react";
import "./App.css";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

//http://newsapi.org/v2/top-headlines?country=kr&apiKey=ccd4929198c74bb4a8b35a507513129d
function App() {
  const [category, setCategory] = useState("all");
  const onSelected = (category) => {
    setCategory(category);
  };
  return (
    <div>
      <Categories category={category} onSelect={onSelected} />
      <NewsList category={category} />
    </div>
  );
}

export default App;
