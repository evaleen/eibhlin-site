import React from 'react'
import BlockTitle from '../BlockTitle'
import { ComponentWrapper, IframeWrapper } from 'src/style/components'
import {
  ImageDescriptionWrapper,
  StyledImage,
  Description,
  IframeContentWrapper,
  Iframe,
} from './style'

const ImageDescription = ({
  index,
  image,
  description: { description },
}: ImageECA & { index: number }) => (
  <ImageDescriptionWrapper index={index}>
    <StyledImage {...image} />
    <Description>{description}</Description>
  </ImageDescriptionWrapper>
)

const VideoDescription = ({
  ytId,
  startTime,
  description: { description },
}: VideoECA) => (
  <IframeContentWrapper>
    <IframeWrapper>
      <Iframe
        src={`https://www.youtube.com/embed/${ytId}?rel=0&amp;start=${startTime}`}
        frameBorder="0"
      />
    </IframeWrapper>
    <Description>{description}</Description>
  </IframeContentWrapper>
)

const Extras: React.SFC<ExtrasBlock> = ({
  description,
  content,
}: ExtrasBlock) => (
  <ComponentWrapper>
    <BlockTitle {...description} />
    {content.map((props: VideoECA | ImageECA, index) =>
      !!props.ytId ? (
        <VideoDescription {...(props as VideoECA)} key={index} />
      ) : (
        <ImageDescription {...(props as ImageECA)} key={index} index={index} />
      )
    )}
  </ComponentWrapper>
)

export default Extras
