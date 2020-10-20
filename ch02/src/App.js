import React from 'react';
import logo from './logo.svg';
import './App.css';

/*

  날짜 : 2020/10/19
  이름 : 강래구
  내용 : JSX 실습하기

    JSX
    - Javascript XML
    - 리액트 컴포넌트에서 브라우저에 렌더링 하기 위해 사용하는 XML 문법

*/

function App() {

  //상수 선언
  const title = "안녕 리액트!";
  const message = "리액트 jsx 문법 실습하기";
  const name = "홍길동";

  //변수
  let num1 = 1;
  let num2 = 2;

  let var1 = true;
  let var2= false;

  let str1 = "Hello~";
  let String = "안녕하세요~";

  //배열
  const people = ["김유신","김춘추","강감찬","장보고","이순신"];
  let cities = ["서울","대전","대구","부산","광주"];

  //map() 함수를 이용한 공통된 내용적용 (매개변수=>{}
  const peopleList = people.map((person, index)=><li key={index}>{person}</li>);
  let citiesList = cities.map((city, index)=>{
    return <li key={index}>{city}</li>
  });

  //인라인 스타일 선언
  const style = {
    fontSize : "24px",
    color : "orange"
  }

  return (
    <div>
      <h3>Ch02. JSX 실습하기</h3>
      <h4>자바스크립트(ES6) 변수 출력</h4>
      <p>
        title : {title}
      </p>
      <p>
        message : {message}
      </p>
      <h4>조건부 연산자</h4>
      <p>
        {num1 > num2 ? (
          <span>num1이 num2보다 크다.</span>
          ):(
          <span>num1이 num2보다 작다.</span>
          ) }
      </p>
      <p>
          {name ==="홍길동" && <span>안녕하세요. {name}입니다.</span>}
      </p>
      <h4>배열반복</h4>
          <ul>{peopleList}</ul>
          <ul>{citiesList}</ul>
      <h4>jsx 인라인 스타일</h4>
      <p>
        <span style={style}>jsx 인라인 스타일 적용</span>
      </p>

      <h4>jsx 클래스 속성</h4>
      <div className="box1">box1</div>
      <div className="box2">box2</div>

      <h4>jsx 주석은 ctrl+/ 입니다.</h4>
      {/* <p>jsx 주석입니다.</p> */}



    </div>
  );
}

export default App;
