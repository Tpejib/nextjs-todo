import Router from 'next/router'
import Head from 'next/head'
import { MainLayout } from '../../components/MainLayout'
export default function About({title}) {
    return (
        <MainLayout>
            <h1>{title}</h1>
            <button onClick={() => {Router.push('/posts')}}>Go to posts</button>
            <button onClick={() => {Router.push('/')}}>Go back to home</button>
        </MainLayout>
    )
}

About.getInitialProps = async () => {
    const res = await fetch('http://localhost:4200/about')
    const data = await res.json()

    return {title: data.title}
}