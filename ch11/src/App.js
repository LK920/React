import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
/*
  날짜 : 2020/10/22
  이름 : 강래구
  내용 : ch11. 리액트 HTTP 통신

  axios
    - 리엑트에서 가장 많이 사용하는 타입스크립트 HTTP 클라이언트 라이브러리
    - API 서버 : 데이터를 보내주는 서버(웹 서버랑은 다른 개념이다.)
    - npm install axios 설치
*/

function App() {
  //상태값 선언
  const [todo, setTodo] = useState(null);
  const [todos, setTodos] = useState([]);

  //비동기로 작동함
  const onClicked = async () => {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/todos/3"
    );
    setTodo(response.data);
  };
  const onClicked2 = async () => {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/todos"
    );
    setTodos(response.data);
  };

  return (
    <div className="App">
      <h3>ch11. 리액트 HTTP 통신</h3>

      <h4>데이터 요청하기1</h4>
      <button onClick={onClicked}>데이터 요청</button>
      <p>
        {/*todo && : 'todo가 아니면'*/}
        userid : {todo && todo.userId}
        <br />
        id : {todo && todo.id}
        <br />
        title : {todo && todo.title}
        <br />
        completed : {todo && todo.completed.toString()}
        <br />
      </p>

      <h4>데이터 요청하기</h4>

      <button onClick={onClicked2}>데이터 요청</button>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo.id} : {todo.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
