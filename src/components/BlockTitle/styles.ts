import styled from 'styled-components'

export default styled.h2(
  ({ theme: { colors } }) => `
    letter-spacing: 0.5px;
    font-weight: 500;
    padding-top: 5vh;
    color: ${colors.header};
    font-family: 'Viga', serif;
  `
)
