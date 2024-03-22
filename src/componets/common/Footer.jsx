import React from "react";
import styled, { css } from "styled-components";

const Footer = () => {
	return (
		<FooterWrapper>
			<ContentWrapper>
				<Content>© 2024 UMIN. All rights reserved.</Content>
			</ContentWrapper>
		</FooterWrapper>
	);
};

export default Footer;

const FooterWrapper = styled.footer`
	width: 100%;
	height: auto;
`;
const ContentWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80px;
	position: relative;
`;
const Content = styled.p`
	font-size: 9px;
	line-height: 12px;
`;
