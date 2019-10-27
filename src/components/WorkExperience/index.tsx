import React from 'react'
import Image from 'gatsby-image'
import { ComponentWrapper } from 'src/style/components'
import {
  Container,
  Flip,
  FlipWrapper,
  FlipText,
  BackgroundImage,
  TextWrapper,
} from './style'
import BlockDescription from '../BlockTitle'

const ImageDescriptionFlip = ({ image, description: { description } }) => (
  <Container>
    <Flip>
      <FlipWrapper>
        <Image {...image} />
      </FlipWrapper>
      <TextWrapper>
        <BackgroundImage {...image} />
        <FlipText>{description}</FlipText>
      </TextWrapper>
    </Flip>
  </Container>
)

const WorkExperience: React.SFC<WorkExperienceBlock> = ({
  description,
  content,
}: WorkExperienceBlock) => (
  <ComponentWrapper>
    <BlockDescription {...description} />
    <div>
      {content.map((props, index) => (
        <ImageDescriptionFlip key={index} {...props} />
      ))}
    </div>
  </ComponentWrapper>
)

export default WorkExperience
