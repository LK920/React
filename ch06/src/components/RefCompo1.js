import React, { Component } from 'react';


class RefCompo1 extends Component {
    //ref 속성값 생성
    uidRef = React.createRef();

    onclickhandler1 = () => {
        document.getElementById("uid").focus();
    };

    onclickhandler2 = () => {
        this.uidRef.current.focus();
    };

    render() {
        return (
            <div className="RefCompo1">
                <strong>RefCompo1</strong>
                <br />
                {/*DOM  식별값을 id로 지정*/}
                <input type="text" name="uid" id="uid"/>
                <button onClick={this.onclickhandler1}>선택</button>
                &nbsp;&nbsp;
                {/*DOM  식별값을 ref로 지정*/}
                <input type="text" name="uid" ref={this.uidRef}/>
                <button onClick={this.onclickhandler2}>선택</button>
            </div>
        );
    }
}

export default RefCompo1;