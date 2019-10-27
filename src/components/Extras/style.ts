import styled from 'styled-components'
import Image from 'gatsby-image'

export const Description = styled.div`
  padding: 15px 0;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
`

export const IframeContentWrapper = styled.div`
  padding: 2vh 0;
  text-align: center;
`

export const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border: 5px solid #eee2e2;
`

export const StyledImage = styled(Image)`
  height: auto;
  width: 60%;
  border: 5px solid #eee2e2;
  @media (max-width: 700px) {
    width: 100%;
  }
`

export const TextDescriptionWrapper = styled.div(
  ({ position }: { position: string }) => `
    padding: 2vh 0;
    float: ${position};
    textAlign: ${position}
    position: relative;
  `
)
