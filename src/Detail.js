/* eslint-disable */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상};
`;

function Detail(props) {
  let [alert창, alert창변경] = useState(true);
  let [inputData, inputData변경] = useState("");

  useEffect(() => {
    axios.get();

    let 타이머 = setTimeout(() => {
      alert창변경(false);
    }, 2000);
    console.log("안녕");
    return () => {
      clearTimeout(타이머);
    };
  }, []);

  let { id } = useParams();
  let history = useHistory();

  let 찾는상품 = props.dessert.find(function (상품) {
    return 상품.id == id;
  });

  return (
    <div className="container">
      <박스>
        <제목 className="red">Detail</제목>
      </박스>

      {/* {inputData}
      <input
        onChange={(e) => {
          inputData변경(e.target.value);
        }}
      /> */}

      {alert창 === true ? (
        <div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img src={"/assests/dessert" + 찾는상품.id + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾는상품?.title}</h4>
          <p>{찾는상품?.content}</p>
          <p>{찾는상품?.price}</p>
          <Info 재고={props.재고} />
          <button
            className="btn btn-danger"
            onClick={() => {
              props.재고바꾸기();
            }}
          >
            주문하기
          </button>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => {
              history.push("/");
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

function Info(props) {
  return <p>재고 : {props.재고[0]}</p>;
}

export default Detail;
