import React from "react";
import qs from "qs";

const QueryCompo = ({ location }) => {
  //파라미터 받아올려면 qs 라이브러리 설치해야한다.
  //터미널 창에서 종료후 사요할 프로젝트에서 npm add qs 입력
  //import qs from "qs"; 할 것

  const query = qs.parse(location.search, { ignoreQueryPrefix: true });

  return (
    <div className="QueryCompo">
      <h3>QueryCompo</h3>
      <p>
        이름 : {query.name}
        <br />
        나이 : {query.age}
        <br />
        주소 : {query.addr}
        <br />
      </p>
    </div>
  );
};

export default QueryCompo;
