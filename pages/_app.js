import NextNprogress from 'nextjs-progressbar'


import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
                />
            <Component {...pageProps} />
        </>
    ) 
  }
  