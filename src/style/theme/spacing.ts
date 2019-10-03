const unit = 8

const spacingGenerator: any = (obj: any, val: number) =>
  val > 0
    ? spacingGenerator({ ...obj, [`x${val}`]: `${val * unit}px` }, val - 1)
    : obj

const Spacing = spacingGenerator({}, 20)

export type SpacingType = { [key in keyof typeof Spacing]: string }

export default Spacing as SpacingType
