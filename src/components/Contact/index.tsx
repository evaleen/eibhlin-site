import React from 'react'
import ContentWrapper, { Text, StyledImage } from './style'
import BlockDescription from '../BlockTitle'
import RichText from '../RichText'

const Contact: React.SFC<ContactBlock> = ({
  image,
  description,
  copy,
}: ContactBlock) => (
  <ContentWrapper>
    <Text>
      <BlockDescription {...description} />
      <RichText {...copy} />
    </Text>
    <StyledImage {...image} />
  </ContentWrapper>
)

export default Contact
