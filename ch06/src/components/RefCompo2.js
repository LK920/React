import React, { Component } from 'react';

class RefCompo2 extends Component {

    uidRef = React.createRef();

    onClickHandlerByParent = () => {

        this.uidRef.current.focus();
    };

    render() {
        return (
            <div className="RefCompo2">
                <h4>RefCompo2</h4>
                <br/>
                <input type="text" name="uid" ref={this.uidRef} />
            </div>
        );
    }
}

export default RefCompo2;