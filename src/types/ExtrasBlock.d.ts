interface ExtrasBlock {
  description: Description
  content: Array<VideoECA | ImageECA>
}

interface VideoECA {
  ytId: string
  startTime: number
  description: Description
}

interface ImageECA {
  image: Asset
  description: Description
}
