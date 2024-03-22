import React from "react";
import styled from "styled-components";
import Contact from "../componets/resume/Contact";
import Project from "../componets/resume/Project";
import Education from "../componets/resume/Education";
import Skills from "../componets/resume/Skills";
import Header from "../componets/common/Header";
import Footer from "../componets/common/Footer";

const ResumePage = () => {
	return (
		<ResumePageWrapper>
			<Header title="RESUME"></Header>
			<Body>
				<Info>
					안녕하세요, <br />
					저는 손우민입니다.
				</Info>

				<Contact></Contact>
				<Project></Project>
				<Education></Education>
				<Skills></Skills>
			</Body>
			<Footer></Footer>
		</ResumePageWrapper>
	);
};
export default ResumePage;
const Body = styled.div`
	padding: 16vh 10vw 5vh 10vw;

	:before {
		content: "";
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 350px;

		z-index: 2;
		pointer-events: none;
	}
`;
const ResumePageWrapper = styled.div`
	background: #fff;
`;
const Info = styled.div`
	font-family: "GongGothicBold";
	font-size: 5vw;
	padding-bottom: 3vh;
	margin: 20vh 0px 3vh;
	font-weight: 700;
	@media screen and (max-width: 1300px) {
		padding-bottom: 0;
		font-size: 9vw;
		margin: 5vh 0px 3vh;
	}
`;
