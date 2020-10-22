import React from "react";

const ParamComp = ({ match }) => {
  const { name, age, addr } = match.params;
  return (
    <div className="ParamComp">
      <h3>ParamCompo</h3>
      <p>
        이름 : {name}
        <br />
        나이 : {age}
        <br />
        주소 : {addr}
        <br />
      </p>
    </div>
  );
};

export default ParamComp;
