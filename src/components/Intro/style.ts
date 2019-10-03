import styled from 'styled-components'

export default styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Iframe = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 47%;
  transform: translate(-50%, -50%);
  height: 100%;
  border: 0;
`

export const TextWrapper = styled.div`
  font-size: 2rem;
  line-height: 3rem;
  max-width: 700px;
  margin: 0 auto;
  letter-spacing: 0.03em;
  padding-top: 2rem;
  color: #f9ebeb;
`
