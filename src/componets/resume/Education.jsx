import React from "react";
import styled from "styled-components";

const Education = () => {
	return (
		<EducationWrapper>
			<Subject>Education</Subject>
			<BigWrapper>
				<PlaceWrapper>
					<Name>엘리스 SW 엔지니어 트랙 7기</Name>
					<Role>2023.08~2023.12 (4개월)</Role>
					<Contents>
						웹 프론트엔드로서 필요한 JavaScript, React, node.js를 배웠습니다.
						<br />
						팀 프로젝트를 통해 혼자 공부할 때와는 다르게 커리큘럼을 따라가면서
						기본기를 단단하게 채웠습니다. <br />
						또한, 팀원들과의 토론과 협업을 통해 서로의 지식을 공유하고 이해도를
						높일 수 있었고, git을 통한 협업의 중요성을 알게 되었습니다.
					</Contents>
				</PlaceWrapper>
			</BigWrapper>
			<BigWrapper>
				<PlaceWrapper>
					<Name>인제대학교</Name>
					<Role>컴퓨터공학과</Role>
					<Role>2018.03 ~ 2024.02</Role>
					<Contents>
						컴퓨터공학과에서 4년간 공부하며 컴퓨터구조, 자료구조, 컴퓨터
						네트워크 등 과목들을 공부하였습니다.
					</Contents>
				</PlaceWrapper>
			</BigWrapper>
		</EducationWrapper>
	);
};
export default Education;

const EducationWrapper = styled.div`
	margin-top: 20vh;
`;
const Subject = styled.h2`
	font-size: 3rem;
	font-weight: 700;
	margin: 40px 0 10px 0;
`;
const BigWrapper = styled.div`
	display: flex;
	margin: 20px 0 10px 20px;
`;
const PlaceWrapper = styled.div``;
const Name = styled.div`
	font-size: 2rem;
	margin: 10px 0 10px 0;
`;
const Role = styled.div`
	font-size: 1.1rem;
	margin: 10px 0 10px 0;
`;
const Contents = styled.p`
	font-size: 1.2rem;
	margin: 10px 0 10px 10px;
`;
