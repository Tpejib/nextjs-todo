import { serialize } from 'next-mdx-remote/serialize'
import Article from "../components/article";
import Category from '../components/category';
import JsxParser from 'react-jsx-parser';
import { MainLayout } from "../components/MainLayout"
import Link from 'next/link';
import Image from 'next/image';

const CustomHeading = ({children}) => {
    return (<h1 style={{color: 'red'}}>{children}</h1>)
}


export default function Dynamic({isArticle,isCategory, pageContent}) {
    const components = {
        Image,
        Link,
        CustomHeading
    }
    return (
        <>
        {isArticle && <Article content={pageContent} />}
        {isCategory && <Category content={pageContent} />}
        {isArticle && (
            <>
                <JsxParser
                    components={components}
                    jsx={`
                        <h1>TEST JSX PARSER</h1>
                        <p>TEST JSX PARSER PARAGRAPH</p>
                        <CustomHeading>1232</CustomHeading>
                    `}
                />
            </>
        )}
        </>
    )
}



export async function getServerSideProps({query}) {

    const pageTypeResponse = await fetch(`http://localhost:4200/pageType/${query.dynamic}`)
    const pageTypeData = await pageTypeResponse.json()

    // console.log(pageTypeResponse.status);
  
    if (pageTypeResponse.status === 404) {
      return {
        notFound: true,
      }
    }

    const isArticle = pageTypeData.type === 'article'
    const isCategory = pageTypeData.type === 'category'

    let pageContent
    
    if (isArticle) {
        const articleResponse = await fetch(`http://localhost:4200/articles/${pageTypeData.id}`)
        const articleData = await articleResponse.json()
        pageContent = await serialize(articleData.body)
    }

    if(isCategory) {
        const categoryResponse = await fetch(`http://localhost:4200/categories/${pageTypeData.id}`)
        const categoryData = await categoryResponse.json()
        pageContent = categoryData

    }

    // console.log(pageData.body);
    // const pageContent = await serialize(pageData.body)
  
    return {
        props: {
            isArticle,
            isCategory,
            pageContent
        }
    }
}