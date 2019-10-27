import styled from 'styled-components'
import Image from 'gatsby-image'

export default styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledImage = styled(Image)`
  width: 25vw;
  min-width: 300px;
  max-width: 500px;
`

export const TextWrapper = styled.div(
  ({ theme: { colors, fonts } }) => `
    font-size: 2rem;
    line-height: 1.5;
    max-width: 700px;
    margin: 0 auto;
    letter-spacing: 0.03em;
    padding-top: 2rem;
    color: ${colors.heading};
    font-family: ${fonts.families.title};
    font-weight: bold;
  `
)
