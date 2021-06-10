import Link from 'next/link'
import Head from 'next/head'
export function MainLayout({children, title = 'NextJS App', description = 'NextJS site example', keywords = 'next, js'}) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <title>{title} | NextJS App</title>
                <meta name="title" content={`${title} | NextJS App`} />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <footer>

            </footer>
            <style jsx>
                {`
                    nav {
                        position: fixed;
                        height: 60px;
                        top: 0;
                        left: 0;
                        right: 0;
                        background: #cccccc;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    nav a {
                        color: black;
                        text-decoration: none;
                        transition: all .3s;
                    }
                    nav a:hover {
                        color: darkblue;
                        text-decoration: underline;
                    }
                    nav a:not(:last-child) {
                        margin-right: 10px;
                    }
                    main {
                        padding: 70px 22px;
                    }
                `}
            </style>
        </>
    )
}