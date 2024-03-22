import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
const Header = (props) => {
	return (
		<HeaderWrapper>
			<Wrapper>
				<Title>{props.title}</Title>
				<Menu />
			</Wrapper>
		</HeaderWrapper>
	);
};
export default Header;
const HeaderWrapper = styled.div`
	position: fixed;
	width: 100vw;
	height: 100px;
	z-index: 50;
	background: black;
`;
const Wrapper = styled.div`
	padding: 0 10vw;
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Title = styled.h3`
	color: #868e96;
	font-size: 1.2rem;
	font-weight: 00;
	margin: 0;
`;
