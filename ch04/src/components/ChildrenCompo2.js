import React, { Component } from 'react';

class ChildrenCompo2 extends Component {
    render() {
        //상위 컴포넌트에서 넘겨준 값을 받는 게 children임
        let content = this.props.children;
        return (
            <div className="ChildrenCompo2">
                <em>ChildrenCompo2</em>
                <p>
                    content : {content}
                </p>
            </div>
        );
    }
}

export default ChildrenCompo2;