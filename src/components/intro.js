import React from 'react'
import styled from 'styled-components'

const IntroWrapper = styled.div({
  textAlign: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

const Iframe = styled.iframe({
  margin: '0 auto',
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
    <Iframe
      src="https://giphy.com/embed/26BkNnO2qmCWTQuac"
      width="407"
      height="480"
      frameBorder="0"
    />
    <TextWrapper>
      {
        'Hi! I’m Eibhlín, I’m a web dev, feminist, cyclist and chickpea fanatic.'
      }
    </TextWrapper>
  </IntroWrapper>
)

export default Intro
