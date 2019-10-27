import styled from 'styled-components'
import Image from 'gatsby-image'

export const Description = styled.div(
  ({ theme: { spacing } }) => `
    padding: ${spacing.x2} 0;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.5px;
  `
)

export const IframeContentWrapper = styled.div`
  padding: 2vh 0;
`

export const Iframe = styled.iframe(
  ({ theme: { colors } }) => `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border: 3px solid ${colors.border};
`
)

export const StyledImage = styled(Image)(
  ({ theme: { colors, constants } }) => `
    height: auto;
    width: 60%;
    border: 3px solid ${colors.border};
   ${constants.mobileView} {
      width: 100%;
    }
`
)

export const ImageDescriptionWrapper = styled.div(
  ({ index, theme: { spacing, constants } }: { index: number }) => {
    const leftAlign = index % 2 === 0
    return `
    padding: 2vh 0;
    display: flex;
    flex-direction: row${leftAlign ? '' : '-reverse'};
    text-align: ${leftAlign ? 'left' : 'right'};
    align-items: flex-end;

    & > *:last-child {
      flex: 1;
      padding-${leftAlign ? 'left' : 'right'}: ${spacing.x3};
      padding-bottom: 0;
    }

    ${constants.mobileView} {
      flex-direction: column;
      align-items: center;
      & > *:last-child {
        padding: ${spacing.x2} 0;
        text-align: left;
      }
    }
  `
  }
)
