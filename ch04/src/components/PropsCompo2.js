import React, { Component } from 'react';

class PropsCompo2 extends Component {
    render() {
        //비구조화 할당방식
        let {name, age, addr} = this.props;

        return (
            <div className="PropsCompo2">
                <h3>PropsCompo2</h3>
                <p>
                    name : {name}<br />
                    age  : {age}<br />
                    addr : {addr}<br />
                </p>
            </div>
        );
    }
}
export default PropsCompo2;