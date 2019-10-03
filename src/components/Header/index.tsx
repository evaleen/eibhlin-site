import React from 'react'
import HeaderWrapper, { Link } from './style'

interface Media {
  link: string
  Icon: React.SFC
}

interface Props {
  socialMedia: Media[]
}

const Header: React.SFC<Props> = ({ socialMedia }) => {
  return (
    <HeaderWrapper>
      {socialMedia.map(({ link, Icon }: Media, index) => {
        return (
          <Link key={index} href={link} target="_blank">
            <Icon />
          </Link>
        )
      })}
    </HeaderWrapper>
  )
}

export default Header
