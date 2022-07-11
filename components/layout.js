import styles from './layout.module.css';
import Head from 'next/head';
import Link from 'next/link';
import utilStyles from '../styles/utils.modules.css';
import Image from 'next/image';


const name='Devesh Tripathi';
export const siteTitle = 'Tutorial Next.js website';


export default function Layout({children,home}) {
    return(
        <div className={styles.container}>
        <Head>
            <link rel='icon' href='favicon.ico'/>
            <meta
                name='description'
                content='Learning how to build a site using Nextjs'
            />
            <meta
                property='og:image'
                content={`https://og-image.vercel.app/${encodeURI(siteTitle,
                )}.png?theme=light&md=0&fontSize=75px&images=http%3A%2F2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
        </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src='/images/profile.jpg'
                            className={utilsStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href='/'>
                            <a>
                            <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={108}
                            width={108}
                            alt={name}
                            />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href='/'>
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href='/'>
                        <a>Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
}