import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'
import Image from 'next/image'
import { MainLayout } from '../../components/MainLayout'

const Heading = ({children}) => {
  return <h1 style={{color: 'red'}}>{children}</h1>
}

const Span = ({children}) => {
  return <span style={{color: 'green'}}>{children}</span>
}

const components = {
  Heading,
  span: Span,
  Link,
  Image
}

export default function TestPage({ source }) {
  return (
    <MainLayout>

    <div className="wrapper">
      <MDXRemote {...source} components={components} />
    </div>
    </MainLayout>
  )
}

export async function getServerSideProps({query}) {

  const res = await fetch(`http://localhost:4200/posts/${query.id}`)
  const data = await res.json()

  if (!data.body) {
    return {
      notFound: true,
    }
  }

  // MDX text - can be from a local file, database, anywhere
  const mdxSource = await serialize(data.body)
  return { props: { source: mdxSource } }
}