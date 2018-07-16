import React from 'react'
import { ComponentWrapper, ContentTitle } from '../styles/shared-styles'
import styled from 'styled-components'

const ContentWrapper = ComponentWrapper.extend`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const Image = styled.img({
  borderRadius: '50%',
  width: '60%',
  height: '60%',
  padding: '10px',
  margin: '0 auto',
})

const Text = styled.div({
  padding: '10px',
  letterSpacing: '1px',
  fontSize: '20px',
  lineHeight: '25px',
})

const Link = styled.a({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
})

const Contact = () => (
    <ContentWrapper>
      <Text>
        <ContentTitle>{'Want to get in touch?'}</ContentTitle>
        {
          'Please feel free to take a snoop at my various social media accounts, or, if you want to get straight to the point, '
        }
        <Link
          href="https://www.linkedin.com/in/eibhlin-mcgeady-90735a95/"
          target="_blank"
        >
          {'you can send me a message on LinkedIn!'}
        </Link>
      </Text>
      <Image src="/images/me.jpg" alt="me" />
    </ContentWrapper>
)

export default Contact
