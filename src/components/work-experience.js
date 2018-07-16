import React from 'react'
import styled from 'styled-components'
import { ComponentWrapper, ContentTitle } from '../styles/shared-styles'

const Container = styled.div([], props => ({
  position: 'relative',
  width: props.width,
  height: props.height,
  zIndex: '1',
  perspective: 1000,
}))

const Flip = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.7s ease;
  ${Container}:hover & {
    transform: rotateY(180deg);
  }
`

const FlipWrapper = styled.div({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
})

const TextWrapper = FlipWrapper.extend({
  position: 'relative',
  display: 'block',
  transform: 'rotateY(180deg)',
  boxSizing: 'border-box',
  padding: '10px',
})

const BackgroundImage = styled.img({
  transform: 'rotateY(180deg)',
  opacity: '0.5',
})

const FlipText = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '80%',
  transform: 'translate(-50%, -50%)',
  fontSize: '14px',
  textAlign: 'center'
})

const ImageDecsriptionFlip = ({ img, alt, text, width, height, position }) => (
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
      <ImageDecsriptionFlip
        img="dock.jpg"
        alt="Accenture - The Dock"
        width="320px"
        height="280px"
        position={{ margin: '0 auto' }}
        text="The Dock is Accentures global center for innovation. Here I have been doing rapid prototyping with emerging front-end technologies in collaboration with design and AI."
      />
      <ImageDecsriptionFlip
        img="hubspot.png"
        alt="Hubspot"
        width="300px"
        height="300px"
        position={{ float: 'left' }}
        text="HubSpot makes a Inbound Marketing software to help small or medium businesses. Here I was part of the forms builder team, and I contributed to building the redesigned forms builder."
      />
      <ImageDecsriptionFlip
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
