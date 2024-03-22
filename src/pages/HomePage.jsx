import React from "react";
import styled from "styled-components";
import Header from "../componets/common/Header";
import Home from "../componets/home/Home";
const HomePage = () => {
	return (
		<HomePageWrapper>
			<Header title={"UMIN"}></Header>
			<Home></Home>
		</HomePageWrapper>
	);
};
export default HomePage;

const HomePageWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #000;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
