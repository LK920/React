import React from "react";
import NameContext from "../context/NameContext";

const CTXChildCompo2 = () => {
  return (
    <NameContext.Consumer>
      {(value) => (
        <div className="CTXChildCompo2">
          <h4>CTXChildCompo2</h4>
          <p>
            App 컴포넌트로 부터 전달된 name:{value.name}
            <br />
          </p>
        </div>
      )}
    </NameContext.Consumer>
  );
};

export default CTXChildCompo2;
