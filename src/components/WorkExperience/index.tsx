import React from 'react'
import { ComponentWrapper, ContentTitle } from 'src/style/components'
import {
  Container,
  Flip,
  FlipWrapper,
  FlipText,
  BackgroundImage,
  TextWrapper,
} from './style'

const ImageDescriptionFlip = ({ img, alt, text, width, height, position }) => (
  <Container width={width} height={height} style={position}>
    <Flip>
      <FlipWrapper>
        <img src={`/images/work/${img}`} alt={alt} />
      </FlipWrapper>
      <TextWrapper img={img}>
        <BackgroundImage src={`/images/work/${img}`} alt={alt} />
        <FlipText>{text}</FlipText>
      </TextWrapper>
    </Flip>
  </Container>
)

const WorkExperience = () => (
  <ComponentWrapper>
    <ContentTitle>
      {'These are some of the amazing places I have worked in'}
    </ContentTitle>
    <div>
      <ImageDescriptionFlip
        img="dock.jpg"
        alt="Accenture - The Dock"
        width="320px"
        height="280px"
        position={{ margin: '0 auto' }}
        text="The Dock is Accenture's global center for innovation. Here I have been doing rapid prototyping with emerging front-end technologies in collaboration with design and AI."
      />
      <ImageDescriptionFlip
        img="hubspot.png"
        alt="Hubspot"
        width="300px"
        height="300px"
        position={{ float: 'left' }}
        text="HubSpot makes a Inbound Marketing software to help small or medium businesses. Here I was part of the forms builder team, and I contributed to building the redesigned forms builder."
      />
      <ImageDescriptionFlip
        img={'cellusys.png'}
        alt="Cellusys"
        width="200px"
        height="200px"
        position={{ float: 'right' }}
        text="Cellusys is a network technology company. Along with the other interns, I built an internal tool for Cellusys to track their R&D hours."
      />
    </div>
  </ComponentWrapper>
)

export default WorkExperience
