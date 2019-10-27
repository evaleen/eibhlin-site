import React from 'react'
import StyledDescription from './styles'

const BlockDescription: React.SFC<Description> = ({
  description,
}: Description) => <StyledDescription>{description}</StyledDescription>

export default BlockDescription
