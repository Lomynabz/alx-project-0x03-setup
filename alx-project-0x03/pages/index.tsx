import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto py-20">
      <Head>
        <title>Splash App</title>
        <meta name="description" content="Your one-stop platform for all your needs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl font-bold text-center">Welcome to Splash App</h1>
      <p className="text-center mt-4">This is the homepage content.</p>
    </div>
  );
};

export default Home;