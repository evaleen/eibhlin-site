import styled from 'styled-components'

const alignments = [
  {
    top: 0,
    left: 60,
  },
  {
    top: 15,
    left: 5,
  },
  {
    top: 35,
    left: 50,
  },
  {
    top: 55,
    left: 10,
  },
  {
    top: 70,
    left: 50,
  },
]

export const Container = styled.div(
  ({ index, theme: { spacing, constants } }: { index: number }) => {
    return `
    position: relative;
    padding: ${spacing.x1} 0;

    &:hover {
      & > *:first-child {
        filter: blur(12px);
      }
    }

    ${constants.desktopView} {
      position: absolute;
      top: ${alignments[index].top}%;
      left: ${alignments[index].left}%;
    }
  `
  }
)

export const Description = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 20px;
  transition: opacity 0.2s linear;
  opacity: 0;

  ${Container}:hover & {
    opacity: 1;
  }
`

export const ContentWrapper = styled.div(
  ({ rows, theme: { spacing, constants } }: { rows: number }) => `
    display: flex;
    flex-direction: column;
    align-items: center;

    ${constants.desktopView} {
      position: relative;
      height: 100vh;
      min-height: calc(240px * ${rows});
      display: block;
    }
  `
)
