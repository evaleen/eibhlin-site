import React from 'react'
import RichText from '../RichText'
import ContentWrapper, { StyledImage, TextWrapper } from './style'

const Intro: React.SFC<IntroBlock> = ({ image, copy }: IntroBlock) => (
  <ContentWrapper>
    <StyledImage {...image} />
    <TextWrapper>
      <RichText {...copy} />
    </TextWrapper>
  </ContentWrapper>
)

export default Intro
