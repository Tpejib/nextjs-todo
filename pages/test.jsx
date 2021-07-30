import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

const Heading = ({children}) => {
  return <span style={{color: 'red'}}>{children}</span>
}

const components = {
  Heading
}

export default function TestPage({ source }) {
  return (
    <div className="wrapper">
      <MDXRemote {...source} components={components} />
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch(`http://localhost:4200/posts/5`)
    const post = await res.json()
  // MDX text - can be from a local file, database, anywhere
  const mdxSource = await serialize(post.body)
  return { props: { source: mdxSource } }
}