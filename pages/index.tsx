import { useRef, useEffect } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import TextBlock from '@/components/TextBlock';
import Scene from '@/components/Scene';
import { initScrollAnimation } from '@/utils/scrollAnimation';

export default function Home() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sceneRef.current) {
      initScrollAnimation(sceneRef.current);
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>3D Scroll Website</title>
        <meta name="description" content="A website with 3D scroll animation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div ref={sceneRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <Scene />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <TextBlock side="right" content="First block of text on the right side" />
          <TextBlock side="left" content="Second block of text on the left side" />
          <TextBlock side="right" content="Third block of text on the right side" />
        </div>
      </main>
    </Layout>
  );
}