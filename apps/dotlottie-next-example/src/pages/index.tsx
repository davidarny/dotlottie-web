import type { DotLottie, DotLottieWorker } from '@lottiefiles/dotlottie-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useState } from 'react';

import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

const src = 'https://lottie.host/e641272e-039b-4612-96de-138acfbede6e/bc0sW78EeR.lottie';

export default function Home(): JSX.Element {
  const [dotLottie, setDotLottie] = useState<DotLottie | DotLottieWorker | null>(null);
  const [showDotLottie, setShowDotLottie] = useState(false);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {showDotLottie && (
          <DotLottieReact
            dotLottieRefCallback={setDotLottie}
            style={{
              minWidth: '100px',
            }}
            src={src}
            loop
            autoplay
            renderConfig={{
              autoResize: true,
            }}
          />
        )}
        <div>
          <button
            onClick={(): void => {
              setShowDotLottie(!showDotLottie);
            }}
          >
            {showDotLottie ? 'Hide' : 'Show'}
          </button>
          <button
            onClick={(): void => {
              if (dotLottie) {
                dotLottie.play();
              }
            }}
          >
            Play
          </button>
          <button
            onClick={(): void => {
              if (dotLottie) {
                dotLottie.pause();
              }
            }}
          >
            Pause
          </button>
          <button
            onClick={(): void => {
              if (dotLottie) {
                dotLottie.stop();
              }
            }}
          >
            Stop
          </button>
        </div>
      </main>
    </>
  );
}
