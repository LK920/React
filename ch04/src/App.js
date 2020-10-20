import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicCompo1 from './components/BasicCompo1';
import BasicCompo2 from './components/BasicCompo2';
import PropsCompo1 from './components/PropsCompo1';
import PropsCompo2 from './components/PropsCompo2';
import ChildrenCompo1 from './components/ChildrenCompo1';
import ChildrenCompo2 from './components/ChildrenCompo2';
import StateCompo1 from './components/StateCompo1';

/*
  날짜 : 2020/10/20
  이름 : 강래구
  내용 : 클래스형 컴포넌트
*/

function App() {
  return (
    <div>
      <h3>ch04. 리액트 클래스형 컴포넌트</h3>

      <h4>1. 기본 컴포넌트</h4>
      <BasicCompo1/>
      <BasicCompo2/>

      <h4>2. 속성을 갖는 컴포넌트</h4>
      <PropsCompo1 title="속성 컴포넌트 1" content="속성을 갖는 컴포넌트1 입니다."/>
      <PropsCompo2 name="강래구" age="29"  addr="인생시"/>
      
      <h4>3. 태그 내용을 갖는 컴포넌트</h4>
      <ChildrenCompo1>내용을 갖는 ChildrenCompo1 컴포넌트</ChildrenCompo1>
      <ChildrenCompo2>내용을 갖는 ChildrenCompo2 컴포넌트</ChildrenCompo2>

      <h4>4. 상태값을 갖는 컴포넌트</h4>
      <StateCompo1/>

    </div>
  );
}

export default App;
