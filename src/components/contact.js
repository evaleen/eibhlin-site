import React from 'react'
import { ComponentWrapper, ContentTitle } from '../styles/shared-styles'
import styled from 'styled-components'
import { inherits } from 'util'

const ContentWrapper = ComponentWrapper.extend({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
})

const Image = styled.img({
  borderRadius: '50%',
  width: '60%',
  height: 'auto',
  padding: '10px',
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
          'Please feel free to take a snoop at my various social media acconts, or if you want to get straight to the point, '
        }
        <Link
          href="https://www.linkedin.com/in/eibhlin-mcgeady-90735a95/"
          target="_blank"
        >
          {'you can send me a messge on LinkedIn!'}
        </Link>
      </Text>
      <Image src="/images/me.jpg" alt="me" />
    </ContentWrapper>
)

export default Contact
