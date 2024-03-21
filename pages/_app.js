// обертка над всем приложением

import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
  