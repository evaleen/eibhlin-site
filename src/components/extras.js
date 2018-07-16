import React from 'react'
import styled from 'styled-components'
import { ComponentWrapper, ContentTitle, IframeWrapper } from '../styles/shared-styles'

const Description = styled.div({
  padding: '15px 0',
  fontSize: '16px',
  lineHeight: '20px',
  letterSpacing: '0.5px',
})

const IframeContentWrapper = styled.div({
  padding: '2vh 0',
  textAlign: 'center',
})

const Iframe = styled.iframe({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  border: '0',
  border: '5px solid #EEE2E2'
})

const Image = styled.img`
  height: auto;
  width: 60%;
  border: 5px solid #EEE2E2;
  @media (max-width: 700px) {
    width: 100%;
  }
`

const TextDescriptionWrapper = styled.div([], props => ({
  padding: '2vh 0',
  float: props.position,
  textAlign: props.position
}))

const TextDescription = ({ img, alt, text, position }) => (
  <TextDescriptionWrapper position={position}>
    <Image src={`/images/${img}.jpg`} alt={alt} />
    <Description>{text}</Description>
  </TextDescriptionWrapper>
)

const Extras = () => (
  <ComponentWrapper>
    <ContentTitle
    >{`Here's a brief look at some stuff I've been getting up to...`}</ContentTitle>
    <IframeContentWrapper>
      <IframeWrapper>
        >
        <Iframe
          src="https://www.youtube.com/embed/ic08YluonNU?rel=0&amp;start=104"
          frameBorder="0"
        />
      </IframeWrapper>
      <Description>
        {`Here's a lightning talk I gave a while back about building and deploying a web app in 5 minutes.`}
      </Description>
    </IframeContentWrapper>
    <TextDescription
      img="react-native"
      alt="React Native Workshop"
      text={`I had some down time at work a few months back so I took the opportunity to teach myself React Native and then shared my knowledge with my collegues!`}
      position="right"
    />
    <TextDescription
      img="intro-to-web-dev"
      alt="Intro to Web Dev"
      text={`I often do an "Hour of Code" with students that come in to the office. My goal is to convince them to go into tech, and show them that the coder stereotype isn't true!`}
      position="left"
    />
  </ComponentWrapper>
)

export default Extras
