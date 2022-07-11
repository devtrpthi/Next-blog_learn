import Head from 'next/head'
import Link from 'next/link'
import Layout,{siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.modules.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I am Devesh a teenager in shambles Learning things randomly and experimenting with them.Currently looking for Internship</p>
        <p>
          This is a sample website I know you know w'll be building something similar like this in Tutorial
          <a href='https://nextjs.org/learn'>Finest Tutorial</a>
        </p>
      </section>
    </Layout>
    );
}