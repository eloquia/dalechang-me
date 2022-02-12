/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "./src/styles/globals.css"
import "@fontsource/open-sans" // Defaults to weight 400 with all styles included.

export const onServiceWorkerUpdateReady = () => window.location.reload(true);
