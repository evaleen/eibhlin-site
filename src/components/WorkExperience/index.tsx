import React from 'react'
import Image from 'gatsby-image'
import { ComponentWrapper } from 'src/style/components'
import { Container, Description, ContentWrapper } from './style'
import BlockDescription from '../BlockTitle'

const ImageDescriptionFlip = ({
  image,
  index,
  description: { description },
}) => (
  <Container index={index}>
    <Image {...image} />
    <Description>{description}</Description>
  </Container>
)

const WorkExperience: React.SFC<WorkExperienceBlock> = ({
  description,
  content,
}: WorkExperienceBlock) => (
  <ComponentWrapper>
    <BlockDescription {...description} />
    <ContentWrapper rows={content.length}>
      {content.map((props, index) => (
        <ImageDescriptionFlip {...props} key={index} index={index} />
      ))}
    </ContentWrapper>
  </ComponentWrapper>
)

export default WorkExperience
