import { MainLayout } from "../MainLayout";
import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from "react";


const ContentsTable = ({items}) => {
    return (
        <ul>
            {items.map(item=><li key={item.id}>{item.heading}</li>)}
        </ul>
    )
}

export default function Article({content}) {
    
    const [headings, setHeadings] = useState([])
    const text = useRef()
    console.log(content);
    const components = {
        Image,
        a: Link
    }
    useEffect(()=>{
        // console.log(text.current.getElementsByTagName('h2'));
        [...text.current.getElementsByTagName('h2')]
        // console.log(headings);
        setHeadings([...[...text.current.getElementsByTagName('h2')].map((item, idx)=>({id: idx, heading: item.textContent}))])
        console.log(headings);
    },[])
    return (
        <MainLayout>
            <ContentsTable items={headings} />
            <div ref={text} className="wrapper">
                <MDXRemote {...content} components={components} />
            </div>
        </MainLayout>
    )
}