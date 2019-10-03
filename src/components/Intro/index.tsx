import React from 'react'
import { IframeWrapper } from 'src/style/components'
import ContentWrapper, { Iframe, TextWrapper } from './style'

const Intro = () => (
  <ContentWrapper>
    <IframeWrapper>
      <Iframe src="https://giphy.com/embed/26BkNnO2qmCWTQuac" frameBorder="0" />
    </IframeWrapper>
    <TextWrapper>
      {
        'Hi! I’m Eibhlín, I’m a web dev, women in tech advocate, cyclist and chickpea fanatic.'
      }
    </TextWrapper>
  </ContentWrapper>
)

export default Intro
