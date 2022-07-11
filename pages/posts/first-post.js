import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
    return(
        <div>
        <Head>
            <title>First Post</title>
        </Head>
            <h1>First Post
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
            </h1>
        </div>
    );
}