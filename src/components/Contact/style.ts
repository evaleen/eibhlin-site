import styled from 'styled-components'
import Image from 'gatsby-image'
import { ComponentWrapper } from 'src/style/components'

export default styled(ComponentWrapper)(
  ({ theme: { constants } }) => `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    ${constants.mobileView} {
      flex-direction: column;
    }
`
)

export const StyledImage = styled(Image)(
  ({ theme: { spacing } }) => `
    border-radius: 50%;
    width: 60%;
    height: 60%;
    padding: ${spacing.x2};
    margin: 0 auto;
  `
)

export const Text = styled.div(
  ({ theme: { spacing } }) => `
  padding: ${spacing.x2};
  letter-spacing: 1px;
  font-size: 20px;
  line-height: 1.25;

  a {
    color: inherit;
  }
`
)
