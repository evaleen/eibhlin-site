import React from 'react'
import BlockTitle from '../BlockTitle'
import { ComponentWrapper, IframeWrapper } from 'src/style/components'
import {
  TextDescriptionWrapper,
  StyledImage,
  Description,
  IframeContentWrapper,
  Iframe,
} from './style'

const ImageDescription = ({
  image,
  description: { description },
}: ImageECA) => (
  <TextDescriptionWrapper position="left">
    <StyledImage {...image} />
    <Description>{description}</Description>
  </TextDescriptionWrapper>
)

const VideoDescription = ({
  id,
  startTime,
  description: { description },
}: VideoECA) => (
  <IframeContentWrapper>
    <IframeWrapper>
      <Iframe
        src={`https://www.youtube.com/embed/${id}?rel=0&amp;start=${startTime}`}
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
    {content.map(({ id, ...props }: VideoECA | ImageECA) =>
      !!id ? (
        <VideoDescription id={id} {...(props as VideoECA)} />
      ) : (
        <ImageDescription {...(props as ImageECA)} />
      )
    )}
  </ComponentWrapper>
)

export default Extras
