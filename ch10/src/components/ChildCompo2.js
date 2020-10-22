import React from "react";

const ChildCompo2 = (props) => {
  const name = props.name;
  return (
    <div className="ChildCompo2">
      <h3>ChildCompo2</h3>
      <p>App 컴포넌트로 부터 전달된 name:{name}</p>
    </div>
  );
};

export default ChildCompo2;
