import React, { Component } from 'react';

class PropsCompo1 extends Component {
    render() {
        //부모 컴포넌트로 전달 된 속성값
        const title = this.props.title;
        const content = this.props.content;

        return (
            <div className="PropsCompo1">
                <em>PropsCompo1</em>
                <p>
                    title : {title}<br />
                    content : {content}<br />
                </p>
            </div>
        );
    }
}

export default PropsCompo1;