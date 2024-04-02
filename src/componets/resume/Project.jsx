import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Project = () => {
	return (
		<ProjectWrapper>
			<Subject>Project</Subject>
			<BigWrapper>
				<PlaceWrapper>
					<Name>Dogiary</Name>
					<Role>2023.12~2024.01 (4주)</Role>
					<Button
						onClick={() =>
							window.open("https://github.com/sonumin/Dogiary", "_blank")
						}>
						GITHUB
					</Button>
					<Link to="/dogiary">
						<Button>PPT</Button>
					</Link>
				</PlaceWrapper>
				<ContentWrapper>
					<Title>Description</Title>
					<Content>반려견과의 일상을 기록하는 다이어리</Content>
					<Title>Role</Title>
					<Content>프론트엔드, 백엔드</Content>
					<Title>What did I do</Title>
					<Content>- 반려견 상세정보 페이지 기능구현</Content>
					<Content>- ID찾기, 비밀번호찾기, 탈퇴 기능구현</Content>
					<Content>- DB스키마 작성</Content>
					<Content>- Map API, Rank API, Dog API 구현</Content>
					<Title>Tech Stack</Title>
					<Content>REACT, Redux, Styled-Components, Node.js, MongoDB </Content>
				</ContentWrapper>
				<ContentImageWrapper>
					<Image src={`${process.env.PUBLIC_URL}/images/dogiary.png`}></Image>
				</ContentImageWrapper>
			</BigWrapper>

			<BigWrapper>
				<PlaceWrapper>
					<Name>ReadOnly</Name>
					<Role>2023.10~2023.11 (3주)</Role>
					<Button
						onClick={() =>
							window.open("https://github.com/sonumin/ReadOnly", "_blank")
						}>
						GITHUB
					</Button>
					<Link to="/readonly">
						<Button>PPT</Button>
					</Link>
				</PlaceWrapper>
				<ContentWrapper>
					<Title>Description</Title>
					<Content>책을 판매하는 온라인 서점</Content>
					<Title>Role</Title>
					<Content>프론트엔드</Content>
					<Title>What did I do</Title>
					<Content>- 장바구니 페이지 구현</Content>
					<Content>- 제품 상세페이지 구현</Content>
					<Content>- 구매 완료페이지 구현</Content>
					<Title>Tech Stack</Title>
					<Content>HTML5 CSS3 JavaScript Node.js</Content>
				</ContentWrapper>
				<ContentImageWrapper>
					<Image src={`${process.env.PUBLIC_URL}/images/readonly.png`}></Image>
				</ContentImageWrapper>
			</BigWrapper>

			<BigWrapper>
				<PlaceWrapper>
					<Name>RecFood</Name>
					<Role>2023.01~2023.06 (6개월)</Role>
					<Button
						onClick={() =>
							window.open("https://github.com/sonumin/capstone-final", "_blank")
						}>
						GITHUB
					</Button>
					<Link to="/recfood">
						<Button>PPT</Button>
					</Link>
				</PlaceWrapper>
				<ContentWrapper>
					<Title>Description</Title>
					<Content>인공지능을 활용해 식단을 기록하는 다이어리</Content>
					<Title>Role</Title>
					<Content>프론트엔드</Content>
					<Title>What did I do</Title>
					<Content>-프론트엔드의 모든 작업</Content>
					<Title>Tech Stack</Title>
					<Content>React Native</Content>
				</ContentWrapper>
				<ContentImageWrapper>
					<Image src={`${process.env.PUBLIC_URL}/images/recfood.png`}></Image>
				</ContentImageWrapper>
			</BigWrapper>
		</ProjectWrapper>
	);
};
export default Project;

const ProjectWrapper = styled.div`
	margin-top: 20vh;
`;
const Subject = styled.h2`
	font-size: 3rem;
	font-weight: 700;
	margin: 40px 0 10px 0;
`;
const BigWrapper = styled.div`
	display: flex;
	margin: 50px 0 10px 20px;
	@media screen and (max-width: 1100px) {
		flex-direction: column;
		font-size: 50px;
	}
`;
const PlaceWrapper = styled.div`
	width: 350px;
	@media screen and (max-width: 1100px) {
		width: 100%;
	}
`;
const Name = styled.div`
	font-size: 2rem;
`;
const Role = styled.div`
	font-size: 1.1rem;
`;

const Button = styled.button`
	color: black;
	font-family: "GmarketSansLight";
	margin: 20px 20px 20px 0;
	height: 50px;
	width: 100px;
	text-align: center;
	border-radius: 100px;
	background: rgba(0, 0, 0, 0);
	background-size: 200% 100%;
	transition: all 0.3s ease-in-out;
	cursor: pointer;
	letter-spacing: 0.1em;
	border: solid 1px grey;

	&:hover {
		background: #feae11;
		border: none;
	}
`;
const ContentWrapper = styled.div`
	margin: 0 0 0 20px;
	width: 400px;
	@media screen and (max-width: 1100px) {
		margin-left: 0;
		width: 300px;
	}
`;
const ContentImageWrapper = styled.div`
	margin-left: auto;
	@media screen and (max-width: 1100px) {
		margin-left: 0;
		margin-top: 20px;
	}
	background: "red";
`;

const Title = styled.p`
	font-size: 1.1rem;
	font-weight: 700;
`;
const Content = styled.p`
	margin: 0 0 10px 10px;
	font-size: 1.1rem;
`;
const Image = styled.img`
	width: 500px;
	object-fit: cover;
	margin-left: auto;
	@media screen and (max-width: 1100px) {
		object-fit: cover;
		width: 400px;
	}
	@media screen and (max-width: 500px) {
		object-fit: cover;
		width: 350px;
	}
`;
