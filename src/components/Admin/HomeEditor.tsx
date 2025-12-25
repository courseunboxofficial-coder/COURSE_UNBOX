"use client"

import React, { useState } from 'react'
import Card from './Card';
import TextArea from './TextArea';
import {supabase} from "@/lib/supabse/supabaseConfig"
import Hero from './HomeEditor/Hero';
import Banner from './HomeEditor/Banner';
import TrendingImage from './HomeEditor/TrendingImage';

const HomeEditor = ({collapsed} : {collapsed : boolean}) => {

    

    return (
        
        <>
          <Hero collapsed = {collapsed} />
          <Banner collapsed = {collapsed}/>
          <TrendingImage collapsed = {collapsed}/>
            <Card title="Top Courses Section">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input placeholder='' className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <input  placeholder='' className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <input  placeholder='' className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <button className="mt-6 px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium">
                    Update Courses
                </button>
            </Card>
        </>
    );
}

export default HomeEditor