import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import axios, {AxiosResponse} from 'axios';
import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    async function get() {
      try {
        const result: AxiosResponse<any, any> = await axios.get("https://testapi.openbanking.or.kr/oauth/2.0/authorize", 
          {
            params: {
              response_type: "code",
              client_id: "eb821e42-3410-4dec-98f2-f2a8cc40af5d",
              redirect_uri: "http://localhost:3000/",
              scope: "login",
              state: "b80BLsfigm9OokPTjy03elbJqRHOfGSY",
              auth_type: "0",
            },
            headers: {
              withCredentials: true 
            }
          }
        );
        console.log(result.data)
      }
      catch (e) {
        console.log("error :",e)
      }
    }
    // get();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form method="get" action="https://testapi.openbanking.or.kr/oauth/2.0/authorize" target="_blank">
        <input type="hidden" name="response_type" value="code"/>
        <input type="hidden" name="client_id" value="eb821e42-3410-4dec-98f2-f2a8cc40af5d"/>
        <input type="hidden" name="redirect_uri" value="http://localhost:3000/"/>
        <input type="hidden" name="scope" value="login inquiry transfer"/>
        <input type="hidden" name="state" value="b80BLsfigm9OokPTjy03elbJqRHOfGSY"/>
        <input type="hidden" name="auth_type" value="0"/>
        <input type="submit" value="requestAuth"/>
      </form>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export const getServerSideProps = async () => {
  const data = await (await axios.get(`https://testapi.openbanking.or.kr/v2.0/oauth/2.0/authorize`)).data;
  return {
    props: {
      datas: data,
    },
  };
};

export default Home
