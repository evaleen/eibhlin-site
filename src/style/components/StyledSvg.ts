import styled from 'styled-components'

export default styled.svg(
  ({ theme: { colors } }) => `
    width: 2rem;
    height: 2rem;
    max-width: 35px;
    max-height: 35px;
    color: ${colors.font};
  `
)
