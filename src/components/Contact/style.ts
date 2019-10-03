import styled from 'styled-components'
import { ComponentWrapper } from 'src/style/components'

export default styled(ComponentWrapper)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const Image = styled.img`
  border-radius: 50%;
  width: 60%;
  height: 60%;
  padding: 10px;
  margin: 0 auto;
`

export const Text = styled.div`
  padding: 10px;
  letter-spacing: 1px;
  font-size: 20px;
  line-height: 25px;
`

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
