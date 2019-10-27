import styled from 'styled-components'
import Image from 'gatsby-image'

export const Container = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  z-index: 1;
  perspective: 1000;
`

export const Flip = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.7s ease;
  ${Container}:hover & {
    transform: rotateY(180deg);
  }
`

export const FlipWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`

export const TextWrapper = styled(FlipWrapper)`
  position;relative;
  display: block;
  transform: rotateY(180deg);
  boxSizing: border-box;
  padding: 10px;
`

export const BackgroundImage = styled(Image)`
  transform: rotateY(180deg);
  opacity: 0.5;
`

export const FlipText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  text-align: center;
`
