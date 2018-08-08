import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderWrapper = styled.div({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  position: 'fixed',
  width: '100vw',
  zIndex: 2
})

const Link = styled.a({
  padding: '1rem 0.5rem',
})

const Image = styled.img({
  width: '2rem',
  height: '2rem',
  maxWidth: '35px',
  maxHeight: '35px',
  color: 'white',
})

const Header = ({ socialMedia }) => (
  <HeaderWrapper>
    {socialMedia.map(({ link, img }, index) => {
      return (
        <Link key={index} href={link} target="_blank">
          <Image src={`/images/${img}.svg`} alt={link} />
        </Link>
      )
    })}
  </HeaderWrapper>
)

Header.propTypes = {
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      img: PropTypes.string,
    })
  ),
}

export default Header
