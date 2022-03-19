/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "./src/styles/globals.scss"
import "@fontsource/dejavu-mono" // Defaults to weight 400 with all styles included.

export const onServiceWorkerUpdateReady = () => window.location.reload(true);
