import React from "react";
import styled from "styled-components";

const Skills = () => {
	return (
		<SkillsWrapper>
			<Subject>Skills</Subject>
			<BigWrapper>
				<PlaceWrapper>
					<Language>HTML/CSS</Language>
					<Contents>
						시멘틱 마크업과 웹 표준을 준수하며 레이아웃과 애니메이션 구현이
						능숙합니다. 사용자 친화적인 UI/UX를 구현하는데 목표로 개발을
						진행합니다.
					</Contents>
				</PlaceWrapper>
				<PlaceWrapper>
					<Language>Javascript</Language>
					<Contents>
						ES6+ 문법을 공부하고 코드에 적용하려고 합니다. Vanila JS만을
						사용해서 WEB APP을 개발해 본 경험이 있습니다. <br />
						JavaScript코드가 어떤 과정을 통해서 동작하는지 이해하고 있습니다.
						Express 프레임워크를 사용해 서버를 개발할 수 있습니다.
					</Contents>
				</PlaceWrapper>
				<PlaceWrapper>
					<Language>React</Language>
					<Contents>
						{" "}
						함수형 컴포넌트 방식에 익숙합니다. 중복 코드를 커스텀 훅이나
						컴포넌트로 분리할 수 있습니다.
					</Contents>
				</PlaceWrapper>
				<PlaceWrapper>
					<Language>Recoil</Language>
					<Contents>리액트 내의 전역 상태관리가 가능합니다.</Contents>
				</PlaceWrapper>
				<PlaceWrapper>
					<Language>Node.js</Language>
					<Contents>
						Express와 Mongo DB를 사용하여 API 통신용 서버를 만들어 본 경험이
						있습니다. FrontEnd와 BackEnd의 통신과정과, Server에서의 처리 과정을
						이해하고있습니다.
					</Contents>
				</PlaceWrapper>
				<PlaceWrapper>
					<Language>Git</Language>
					<Contents>
						Git을 통해 팀원들과 <strong>협업</strong>하고,{" "}
						<strong>버전관리</strong>를 할 수 있습니다. 협업에 꼭 필요한
						도구임을 이해하고, 더 좋은 사용법에 대해 항상 고민하고 있습니다.
					</Contents>
				</PlaceWrapper>
				<PlaceWrapper>
					<Language>Database</Language>
					<Contents>
						MongoDB를 이용하여 프로젝트에 사용한 경험이 있습니다.
					</Contents>
				</PlaceWrapper>
			</BigWrapper>
		</SkillsWrapper>
	);
};
export default Skills;

const SkillsWrapper = styled.div`
	margin-top: 20vh;
`;
const Subject = styled.h2`
	font-size: 3rem;
	font-weight: 700;
	margin: 40px 0 10px 0;
`;
const BigWrapper = styled.div`
	margin: 20px 0 10px 20px;
`;
const PlaceWrapper = styled.div`
	margin-bottom: 20px;
`;
const Language = styled.div`
	font-size: 1.5rem;
	font-weight: 600;
	margin: 10px 0 10px 0;
`;
const Contents = styled.p`
	font-size: 1.2rem;
	margin: 10px 0 10px 10px;
`;
