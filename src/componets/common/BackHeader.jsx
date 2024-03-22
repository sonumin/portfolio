import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BackHeader = () => {
	const navigate = useNavigate();

	return (
		<HeaderWrapper>
			<Back
				src={`${process.env.PUBLIC_URL}/images/arrow.png`}
				onClick={() => navigate(-1)}></Back>
		</HeaderWrapper>
	);
};

export default BackHeader;

const HeaderWrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100px;
	z-index: 50;
`;
const Back = styled.img`
	position: absolute;
	left: 10px;
	top: 20px;
`;
