interface Dimensions {
  width: number
  height: number
}

interface Details {
  size: number
  image: Dimensions
}

interface ImageFile {
  url: string
  details: Details
  fileName: string
  content?: string
  contentType: string
}

interface Image {
  base64?: string
  tracedSVG?: string
  aspectRatio: number
  src: string
  srcSet: string
  srcWebp: string
  srcSetWebp: string
}

interface Fixed extends Image, Dimensions {}

interface Fluid extends Image {
  sizes: string
}

interface Asset {
  contentful_id?: string
  description?: string
  title: string
  file?: ImageFile
  fixed?: Fixed
  fluid?: Fluid
}

interface Asset_noBase64 {
  fluid: Fluid
  title?: string
}
