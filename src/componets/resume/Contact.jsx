import React from "react";
import styled from "styled-components";

const Contact = () => {
	return (
		<Wrapper>
			<ContentsWrapper>
				<Introduce>
					<span style={{fontWeight:"bold"}}>
					사용자의 한 번의 클릭에 숨겨진  수백 줄의 
					코드를 고민하는 개발자 손우민입니다.
					</span>
					<br />
					<br />
					"이거 왜 이렇게 복잡해?"라는 사용자의 불편함을
					"아, 이렇게 하면 되는구나!"로 바꾸는 순간에 가장 큰 성취감을 느끼고 있습니다.
					화면 뒤에서 돌아가는 복잡한 로직은 제가 책임지고, 
					사용자는 그저 원하는 결과만 얻을 수 있도록 만드는 것이 저의 개발 방식입니다.
					<br/>
					<br/>
					개발 과정에서 마주한 모든 고민을 바탕으로 성장해나가고 있어요. 
					어제의 고민이 오늘의 해답이 되고, 
					더 나은 결과물이 나온다고 믿습니다.
					기술은 결국 사람을 위한 도구라는 믿음으로, 
					더 나은 웹 경험을 만들어가고 있습니다.
				</Introduce>
				<ContactChannelWrapper>
					<ContactWrapper>
						<Subject>Contact</Subject>
						<Content href="mailto:tpgh63063@naver.com">
							<strong>E-mail</strong> tpgh63063@naver.com
							<br />
						</Content>
						<Content href="tel:01066066309">
							<strong>Phone</strong> 01066066309
						</Content>
					</ContactWrapper>
					<ChannelWrapper>
						<Subject>Channel</Subject>
						<Content
							onClick={() =>
								window.open("https://github.com/sonumin", "_blank")
							}>
							<strong>GitHub</strong> https://github.com/sonumin
						</Content>
					</ChannelWrapper>
				</ContactChannelWrapper>
			</ContentsWrapper>
			<ImageWrapper>
				<Image src={`${process.env.PUBLIC_URL}/images/umin.png`}></Image>
			</ImageWrapper>
		</Wrapper>
	);
};
export default Contact;

const Wrapper = styled.div`
	display: flex;
	padding: 10px 0;
	@media screen and (max-width: 1300px) {
		flex-direction: column-reverse;
		align-items: center;
	}
`;
const ImageWrapper = styled.div``;
const Image = styled.img`
	width: 330px;
	object-fit: cover;
	border-radius: 50%;
	margin-left: 80px;
	@media screen and (max-width: 1300px) {
		margin-left: 0;
	}
`;
const ContentsWrapper = styled.div`
	margin: auto;
	width: 90%;
	position: relative;
	object-fit: cover;
	@media screen and (max-width: 1300px) {
		margin: 3vh 0;
	}
`;
const Introduce = styled.p`
	font-size: 1.5rem;
	margin: 0;
	padding-bottom: 20px;
	@media screen and (max-width: 1300px) {
		font-size: 1.2rem;
	}
`;
const Subject = styled.h2`
	font-size: 1.4rem;
	font-weight: 700;
	margin: 0 0 10px 0;
`;
const Content = styled.a`
	text-decoration: none;
	color: #111;
	cursor: pointer;
	font-size: 1.1rem;
	@media screen and (max-width: 1300px) {
	}
`;
const ContactChannelWrapper = styled.div`
	display: flex;
	@media screen and (max-width: 1300px) {
		flex-direction: column;
	}
`;
const ContactWrapper = styled.div`
	width: 50%;
`;
const ChannelWrapper = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 1300px) {
		margin-top: 30px;
	}
`;
