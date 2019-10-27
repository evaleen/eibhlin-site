import React from 'react'
import flatMap from 'array.prototype.flatmap'
import { INLINES } from '@contentful/rich-text-types'
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import StyledRichText from './styles'

const options: Options = {
  renderText: (text: string) =>
    flatMap(text.split('\n'), (substring, i) => [i > 0 && <br />, substring]),
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: ({
      data: {
        target: { fields },
      },
    }) => <a href={fields.url['en-US']}>{fields.title['en-US']}</a>,
  },
}

const RichText: React.StatelessComponent<RichText> = ({ json }) => (
  <StyledRichText>{documentToReactComponents(json, options)}</StyledRichText>
)

export default RichText
