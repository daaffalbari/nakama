import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from 'components/organism/Navbar';
import MainBanner from 'components/organism/MainBanner';
import Footer from 'components/organism/Footer';
import Story from 'components/organism/Story';
import Article from 'components/organism/Article';
import AboutUs from 'components/organism/aboutUs';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <Story />
      <Article />
      <AboutUs />
      <Footer />
    </>
  );
}
