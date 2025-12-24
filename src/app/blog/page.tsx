"use client";

import { useState } from "react";
import Navbar from '@/components/Home/Navbar';
import Footer from '@/components/Home/Footer';
import Content from '@/components/blog/Content';
import LetsConnect from "@/components/blog/LetsConnect";


const page = () => {

    return (

        <>
            <Navbar />

            <LetsConnect/>

            <Content />
            
            <Footer />
        </>
    );

}

export default page