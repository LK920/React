import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
import "./NewsList.css";

//샘플 데이터
const sampleArticle = {
  title: "제목입니다.",
  description: "내용입니다.",
  url: "https://google.com",
  urlToImage: "https://via.placeholder.com/160",
};

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  //최초 mount 될때 한번 실행, category 상태값이 변경 될때 마다 실행
  useEffect(() => {
    getArticles();
  }, [category]);

  const getArticles = async () => {
    setLoading(true);
    const query = category === "all" ? "" : "&category=" + category;
    const response = await axios.get(
      "http://newsapi.org/v2/top-headlines?country=kr&apiKey=ccd4929198c74bb4a8b35a507513129d" +
        query
    );
    setArticles(response.data.articles);
    setLoading(false);
  };
  if (loading) {
    return <div className="NewsList">뉴스를 불러오는 중....</div>;
  }

  return (
    <div className="NewsList">
      {articles &&
        articles.map((article, index) => {
          return <NewsItem key={index} article={article} />;
        })}
    </div>
  );
};

export default NewsList;
