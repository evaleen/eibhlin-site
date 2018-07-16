import React from 'react'
import styled from 'styled-components'
import { IframeWrapper } from '../styles/shared-styles';

const IntroWrapper = styled.div({
  textAlign: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

const Iframe = styled.iframe({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '47%',
  transform: 'translate(-50%, -50%)',
  height: '100%',
  border: '0',
})

const TextWrapper = styled.div({
  fontSize: '2rem',
  lineHeight: '3.5rem',
  maxWidth: '800px',
  margin: '0 auto',
  letterSpacing: '0.03em',
  paddingTop: '2rem',
})

const Intro = () => (
  <IntroWrapper>
    <IframeWrapper>
      <Iframe src="https://giphy.com/embed/26BkNnO2qmCWTQuac" frameBorder="0" />
    </IframeWrapper>
    <TextWrapper>
      {
        'Hi! I’m Eibhlín, I’m a web dev, feminist, cyclist and chickpea fanatic.'
      }
    </TextWrapper>
  </IntroWrapper>
)

export default Intro
