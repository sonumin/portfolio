import React from "react";
import styled from "styled-components";
const TitlePortfolio = (props) => {
  return (
    <>
      <Title>{props.title}</Title>
    </>
  );
};

export default TitlePortfolio;

const Title = styled.h2`
  position: relative;
  padding-top: 10vh;
  text-align: center;
  font-family: "SBAggroB";
  font-size: 3rem;
  color: #2c2c2c;
  padding-bottom: 20px;
  :after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    display: block;
    width: 100px;
    height: 8px;
    background-color: #b3aad1;
  }
`;
