import {useRouter} from 'next/router'
import { useEffect, useState } from 'react';
import Link from 'next/link'
import { MainLayout } from '../../components/MainLayout';

export default function Post({post: serverPost}) {
    const router = useRouter()

    const [post, setPost] = useState(serverPost)

    useEffect(() => {
        async function load() {
            const res = await fetch(`http://localhost:4200/posts/${router.query.id}`)
            const post = await res.json()
            setPost(post)
        }
        if (!serverPost) {
            load()
        }
    }, [])

    if (!post) {
        return <MainLayout>
            <p>Loading...</p>
        </MainLayout>
    }


    return (
        <MainLayout>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href={'/posts'}><button>Return to Posts</button></Link>
        </MainLayout>
    )
}

Post.getInitialProps = async ({query, req}) => {

    if (!req) {
        return {
            post: null
        }
    }

    const res = await fetch(`http://localhost:4200/posts/${query.id}`)
    const post = await res.json()
    return {
        post
    }
}