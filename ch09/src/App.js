import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import ParamComp from "./components/ParamComp";
import QueryCompo from "./components/QueryCompo";

/*
  날짜 : 2020/10/22
  이름 : 강래구
  내용 : ch09. 리액트 라우터(Router)

  리액트 라우터
    - SPA(Single Page Application) : 개발하기 위한 화면 이동을 지원하는 리액트 라이브러리
    - 사용할 프로젝트 안에 npm add react-router-dom 을 통해 설치
    - index.js(가장 먼저 실행되는 컴포넌트) 들어가서 <reacte.str~~>태그를 BrowserRouter로 바꿔주고
    - import { BrowserRouter } from "react-router-dom"; 을 수동으로 입력
    - Link와 Route를 여기서 import 해준다.
    - 리액트에선 웹에서 사용하던 파라미터를 쿼리라고 일컫는다.
    - 리액트 파라미터는 주소의 일부가 된다.
    - 리액트 Router를 동작 시키기 위해 index.js에서 App 컴포넌트 태그를 BrowserRouter로 감싼다.
*/

function App() {
  return (
    <div className="App">
      <h3>ch09. 리액트 Router</h3>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/query?name=김유신">QueryCompo -1</Link>
        </li>
        <li>
          <Link to="/query?name=김유신&age=25">QueryCompo -2</Link>
        </li>
        <li>
          <Link to="/query?name=김유신&age=25&addr=부산">QueryCompo -3</Link>
        </li>
        <li>
          <Link to="/param/김유신">ParamCompo -1</Link>
        </li>
        <li>
          <Link to="/param/김춘추/25">ParamCompo -2</Link>
        </li>
        <li>
          <Link to="/param/이순신/35/부산">ParamCompo -3</Link>
        </li>
      </ul>

      {/*Router Path 설정*/}
      {/*exact 속성은 중복을 제거 */}
      <Route path="/" component={Home} exact={true} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />

      <Route path="/query" component={QueryCompo} />
      <switch>
        <Route exact path="/param/:name" component={ParamComp} />
        <Route exact path="/param/:name/:age" component={ParamComp} />
        <Route exact path="/param/:name/:age/:addr" component={ParamComp} />
      </switch>
    </div>
  );
}

export default App;
