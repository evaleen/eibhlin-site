// const path = require('path')

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions

  createTypes(
    `
    type ContentfulIntro implements Node {
      name: String
      image: ContentfulAsset
      copy: contentfulIntroCopyRichTextNode
    }

    type ContentfulExtras implements Node @infer {
      name: String
    }

    type ContentfulVideoEca implements Node {
      ytId: String
      startTime: Int
      description: contentfulVideoEcaDescriptionTextNode
    }

    type ContentfulImageEca implements Node {
      image: ContentfulAsset
      description: contentfulImageEcaDescriptionTextNode
    }

    type ContentfulExperience implements Node {
      name: String
      description: contentfulExperienceDescriptionTextNode
      content: [ContentfulWorkExperience]
    }

    type ContentfulWorkExperience implements Node {
      name: String
      image: ContentfulAsset
      description: contentfulWorkExperienceDescriptionTextNode
    }

    type ContentfulContact implements Node {
      name: String
      description: contentfulContactDescriptionTextNode
      image: ContentfulAsset
      copy: contentfulContactCopyRichTextNode
    }

    type ContentfulSocialMedia implements Node {
      name: String
      linkedIn: String
      gitHub: String
      instagram: String
    }
  `
  )
}

// TODO
// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       alias: {
//         website: path.resolve(__dirname, 'src')
//       }
//     }
//   })
// }
