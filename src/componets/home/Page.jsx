import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Page = () => {
	return (
		<PageWrapper>
			<StyledLink to="/resume">
				<Text>Resume</Text>
			</StyledLink>
			<StyledLink to="portfolio">
				<Text>Portfolio</Text>
			</StyledLink>
		</PageWrapper>
	);
};

export default Page;
const PageWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 0;
`;
const StyledLink = styled(Link)`
	text-decoration: none;
	padding: 0 1vw;
	text-align: center;
	:vistied {
		text-decoration: none;
	}
`;
const Text = styled.button`
	font-family: "GmarketSansLight";
	color: #fff;
	margin: 0 10px 0 0;
	height: 50px;
	width: 150px;
	border-radius: 100px;
	background: rgba(0, 0, 0, 0);
	background-size: 200% 100%;
	transition: all 0.3s ease-in-out;
	cursor: pointer;
	letter-spacing: 0.1em;
	border: solid 1px grey;

	margin: 3vh 0vh 8vh 0vh;
	&:hover {
		background: #feae11;
		border: none;
	}
`;
