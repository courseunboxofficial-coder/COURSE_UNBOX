"use client"

import React, { useState } from 'react'
import Hero from './HomeEditor/Hero';
import Banner from './HomeEditor/Banner';
import TrendingImage from './HomeEditor/TrendingImage';
import AboutHome from './HomeEditor/AboutHome';
import DigitalMarketing from './HomeEditor/DigitalMarketing';

const HomeEditor = ({ collapsed }: { collapsed: boolean }) => {



  return (

    <>

      <Hero collapsed={collapsed} />
      <Banner collapsed={collapsed} />
      <TrendingImage collapsed={collapsed} />
      <AboutHome collapsed={collapsed} />
      <DigitalMarketing collapsed={collapsed} />

    </>
  );
}

export default HomeEditor