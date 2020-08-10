const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/celinewang/Documents/github/MaskBestBuy/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/celinewang/Documents/github/MaskBestBuy/src/pages/index.js"))),
  "component---src-pages-styles-js": hot(preferDefault(require("/Users/celinewang/Documents/github/MaskBestBuy/src/pages/styles.js")))
}

