import React from 'react'
import { ContentTitle } from 'src/style/components'
import ContentWrapper, { Text, Link, Image } from './style'

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
