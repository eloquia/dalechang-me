/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import 'tailwindcss/dist/base.min.css';
import "./src/styles/globals.css"

export const onServiceWorkerUpdateReady = () => window.location.reload(true);
