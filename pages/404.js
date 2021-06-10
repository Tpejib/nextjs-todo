import Link from "next/link";
import { MainLayout } from "../components/MainLayout";
import classes from '../styles/error.module.scss'

export default function ErrorPage() {
    return (
        <MainLayout>
            <h1 className={classes.error}>
                Error 404
            </h1>
            <Link href={'/'}><button>Go to Home Page</button></Link>
        </MainLayout>
    )
}