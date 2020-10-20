import React from 'react';

const PropsCompo2 = ({name, age, addr}) => {
    //속성 값을 비구조화 할당방식으로 전달

    return (
        <div className="PropsCompo2">
            <string>속성을 갖는 컴포넌트</string>
            <p>
                이름 : {name}님<br />
                나이 : {age}살<br />
                주소 : {addr}시<br />
            </p>
        </div>
    );
};

export default PropsCompo2;