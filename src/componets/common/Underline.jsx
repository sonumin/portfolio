import React from "react";
import styled from "styled-components";

const Underline = (props) => {
  return <Under>{props.content}</Under>;
};

export default Underline;

const Under = styled.span`
  :before {
    content: " ";
  }
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #ffd0ae 50%);
`;
