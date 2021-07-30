import { MainLayout } from "../MainLayout";


export default function Category({content}) {
    return (
        <MainLayout>
            {content.body}
        </MainLayout>
    )
}