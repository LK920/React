import React, { Component } from 'react';
import './App.css';
import RefCompo1 from './components/RefCompo1';
import RefCompo2 from './components/RefCompo2';
/*
  날짜 : 2020/10/21
  이름 : 강래구
  내용 : 컴포넌트 ref 속성 실습하기

  ref
    - 리액트 jsx 문법에서 사용하는 식별 ID값
    - HTML의 id 속성과 같은 개념이지만 jsx id 속성을 권장하지 않음
    - 안 쓰는 이유는 해당 컴포넌트를 중복해서 사용할 시 id 속성이 중복되기 때문이다.
    - ref는 jsx 에만 있는 속성이다.

*/

class App extends Component{
  ref1 = React.createRef();
  ref2 = React.createRef();

  onClick1 = () =>{
      this.ref1.current.onClickHandlerByParent();
  };
  onClick2 = () =>{
      this.ref2.current.onClickHandlerByParent();
  };

  render() {
    return (
      <div>
        <h3>1. 리액트 컴포넌트 ref 속성 실습하기</h3>

        <RefCompo1 />
        <RefCompo1 />

        <RefCompo2 ref={this.ref1}/>
        <RefCompo2 ref={this.ref2}/>

        <button onClick={this.onClick1}>선택</button>
        <button onClick={this.onClick2}>선택</button>

      </div>
    );
  }
}

export default App;
