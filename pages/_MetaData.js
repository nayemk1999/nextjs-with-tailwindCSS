import Head from 'next/head'
export default function _MetaData(props) {
        const title = props.title || 'Noboni E-commerce Website'
    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}
