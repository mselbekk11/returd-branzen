'use client';

import { Book } from '@/components/Book';
import Hero from '@/components/Hero';
import { InfiniteMovingCardsDemo } from '@/components/Infinite-moving-cards-demo';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { Steps } from '@/components/Steps';
import { Testimonials } from '@/components/Testimonials';
import { Faq } from '@/components/faq';

import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import ContactForm from '../components/ContactForm';


export default function Home() {

  return (
    <>
      <main className=''>
        <Hero />
        {/* <InfiniteMovingCardsDemo />
        <Services />
        <Projects />
        <Steps />
        <Testimonials />
        <Faq />
        <Book /> */}
      </main>
    </>
  );
}
