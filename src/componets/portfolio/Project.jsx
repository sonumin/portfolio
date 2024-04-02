import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import TitlePortfolio from "../common/TitlePortfolio";

const Project = () => {
	return (
		<ProjectWrapper>
			<TitlePortfolio title={"PROJECT"}></TitlePortfolio>
			<ContentWrapper>
				<Wrapper>
					<ImageWrapper>
						<Image src={`${process.env.PUBLIC_URL}/images/dogiary.png`}></Image>
					</ImageWrapper>
					<Contents>
						<ProjectName>Dogiary</ProjectName>
						<ProjectItemContent>
							반려견과의 일상을 기록하는 다이어리
						</ProjectItemContent>
						<ProjectContent>
							<ProjectList>
								<ProjectItem>
									<strong>기간</strong>
									<ProjectItemContent>2023.12~2024.01 (4주)</ProjectItemContent>
								</ProjectItem>
								<ProjectItem>
									<strong>사용 기술</strong>
									<ProjectItemContent skill>REACT</ProjectItemContent>
									<ProjectItemContent skill>
										Styled-Components
									</ProjectItemContent>
									<ProjectItemContent skill>Node.js</ProjectItemContent>
									<ProjectItemContent skill>MongoDB</ProjectItemContent>
								</ProjectItem>

								<ProjectItem content>
									<strong>주요 기능</strong>
									<ProjectItemContent>
										- 로그인 , 회원가입 , 닉네임 및 프로필사진 수정
										<br />
										- 강아지 상세페이지
										<br />
										- 강아지와의 추억을 캘린더에 저장
										<br />
										- 사용자의 애견동반 장소추천
										<br />
										- 랭킹게임
										<br />
									</ProjectItemContent>
								</ProjectItem>
								<ProjectItem>
									{" "}
									<br />
									반려 강아지에게 필요한 여러가지 정보 및 소중한 매일의 일상들을
									<br />
									기록하고 공유할 수 있도록 만들어졌습니다.
								</ProjectItem>
							</ProjectList>
						</ProjectContent>
						<ButtonWrapper>
							<Link to="/dogiary">
								<Button>VIEW PPT</Button>
							</Link>
							<Button
								onClick={() =>
									window.open("https://github.com/sonumin/Dogiary", "_blank")
								}>
								GITHUB
							</Button>
						</ButtonWrapper>
					</Contents>
				</Wrapper>
			</ContentWrapper>

			<ContentWrapper>
				<Wrapper>
					<ImageWrapper>
						<Image
							src={`${process.env.PUBLIC_URL}/images/readonly.png`}></Image>
					</ImageWrapper>
					<Contents>
						<ProjectName>ReadOnly</ProjectName>
						<ProjectItemContent>도서 구매 플랫폼</ProjectItemContent>
						<ProjectContent>
							<ProjectList>
								<ProjectItem>
									<strong>기간</strong>
									<ProjectItemContent>2023.10~2023.11 (3주)</ProjectItemContent>
								</ProjectItem>
								<ProjectItem>
									<strong>사용 기술</strong>
									<ProjectItemContent skill>HTML5</ProjectItemContent>
									<ProjectItemContent skill>CSS3</ProjectItemContent>
									<ProjectItemContent skill>JavaScript</ProjectItemContent>
									<ProjectItemContent skill>Node.js</ProjectItemContent>
								</ProjectItem>

								<ProjectItem content>
									<strong>주요 기능</strong>
									<ProjectItemContent>
										- 로그인 , 회원가입
										<br />
										- 도서 목록 및 상세 페이지 제공
										<br />
										- 베스트셀러, 신간안내 페이지제공
										<br />
										- 장바구니 기능
										<br />
										- 주문 및 결제 시스템
										<br />
										- 관리자 기능
										<br />
									</ProjectItemContent>
								</ProjectItem>

								<ProjectItem>
									<br />
									"readOnly는 독서를 즐기는 사용자들을 위한 도서 구매
									플랫폼입니다"
									<br />
									지적 성장을 돕기 위해 다양한 주제의 도서를 제공합니다!
									<br />
								</ProjectItem>
							</ProjectList>
						</ProjectContent>
						<ButtonWrapper>
							<Link to="/readonly">
								<Button>VIEW PPT</Button>
							</Link>
							<Button
								onClick={() =>
									window.open("https://github.com/sonumin/ReadOnly", "_blank")
								}>
								GITHUB
							</Button>
						</ButtonWrapper>
					</Contents>
				</Wrapper>
			</ContentWrapper>
			<ContentWrapper>
				<Wrapper>
					<ImageWrapper>
						<Image src={`${process.env.PUBLIC_URL}/images/recfood.png`}></Image>
					</ImageWrapper>
					<Contents>
						<ProjectName>RecFood</ProjectName>
						<ProjectItemContent>식단기록을 기록하는 어플</ProjectItemContent>
						<ProjectContent>
							<ProjectList>
								<ProjectItem>
									<strong>기간</strong>
									<ProjectItemContent>
										2023.01~2023.06 (6개월)
									</ProjectItemContent>
								</ProjectItem>
								<ProjectItem>
									<strong>사용 기술</strong>
									<ProjectItemContent skill>React-Native</ProjectItemContent>
									<ProjectItemContent skill>MySQL</ProjectItemContent>
									<ProjectItemContent skill>Flask</ProjectItemContent>
									<ProjectItemContent skill>Yolo</ProjectItemContent>
								</ProjectItem>
								<ProjectItem content>
									<strong>주요 기능</strong>
									<ProjectItemContent>
										- 로그인 , 회원가입
										<br />
										- 일일 목표섭취량 기록
										<br />
										- 카메라를 이용한 음식 검출
										<br />
										- 프로필 및 주간데이터
										<br />
									</ProjectItemContent>
								</ProjectItem>
								<ProjectItem>
									<ProjectItem>
										<br />
										"RecFood는 사진을 통해 식단기록을 위한 어플입니다"
										<br />
										건강한 식습관을 돕기 위해 하루의 식단을 기록할 수 있도록
										만들어졌습니다.
										<br />
									</ProjectItem>
								</ProjectItem>
							</ProjectList>
						</ProjectContent>
						<ButtonWrapper>
							<Link to="/recfood">
								<Button>VIEW PPT</Button>
							</Link>
							<Button
								onClick={() =>
									window.open(
										"https://github.com/sonumin/capstone-final",
										"_blank"
									)
								}>
								GITHUB
							</Button>
						</ButtonWrapper>
					</Contents>
				</Wrapper>
			</ContentWrapper>
		</ProjectWrapper>
	);
};

export default Project;

const ProjectWrapper = styled.div`
	margin-top: 25vh;
`;
const ContentWrapper = styled.div`
	margin-top: 50px;
	background-color: rgba(255, 255, 255, 0.25);
	backdrop-filter: blur(6px);
	border: 1px solid rgba(255, 255, 255, 0.18);
	box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
	border-radius: 12px;
	color: black;
`;
const Contents = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin: 0 6vh;
	font-size: 1.2rem;
	@media screen and (max-width: 1300px) {
		margin: 2vh 6vh;
	}
`;
const Wrapper = styled.div`
	display: flex;
	padding: 30px 30px 30px 30px;
	@media screen and (max-width: 1300px) {
		flex-direction: column;
		align-items: center;
	}
`;
const Image = styled.img`
	display: flex;
	justify-content: center;
	align-item: center;
	width: 50vh;
	object-fit: cover;
	@media screen and (max-width: 1300px) {
		width: 50vh;
	}
	@media screen and (max-width: 740px) {
		width: 35vh;
	}
`;
const ImageWrapper = styled.div`
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
`;
const ProjectName = styled.div`
	font-size: 1.5rem;
	font-weight: 700;
`;
const ProjectContent = styled.div``;
const Button = styled.button`
	color: black;
	font-family: "GmarketSansLight";
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

	&:hover {
		background: #feae11;
		border: none;
	}
`;

const ProjectList = styled.li`
	list-style: none;
	height: auto;
	margin: 20px 0 20px 0;
	width: auto;
`;
const ProjectItem = styled.li`
	display: flex;
	align-items: baseline;
	flex-wrap: wrap;
	& > p {
		margin-left: 10px;
	}
`;
const ProjectItemContent = styled.p`
	margin: 2px;
	${(props) =>
		props.skill &&
		css`
			padding: 2px 8px 2px 8px;
			color: #ff8000;
			font-weight: 600;
			background-color: #e6e6e6;
			border-radius: 10px;
			&:hover {
				opacity: 0.8;
			}
		`}
`;
const ButtonWrapper = styled.div`
	@media screen and (max-width: 1300px) {
		text-align: center;
	}
	@media screen and (max-width: 400px) {
		display: flex;
	}
`;
