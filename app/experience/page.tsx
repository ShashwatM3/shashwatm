'use client'
import React from 'react';
import './styles.css'
import Image from 'next/image';
import codelab from "@/components/icons/codelab.jpeg";
import gma from "@/components/icons/gma.jpg";
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import insurancemarket from '@/components/icons/insurancemarket.jpg';
import danubeProperties from "@/components/icons/danubeProperties.png"

function Page() {
  const router = useRouter();
  return (
    <div className='experience-main'>
      <div>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>My Experience</h1>
        {/* -------------------------- */}
        <div className='experience'>
          <Image className='imageexp' alt="" src={codelab}/>
          <div>
            <h1 className='scroll-m-20 text-xl font-semibold tracking-tight'>CodeLab Davis &#8212; <span>Software Developer</span> </h1>
            <h3>Sep. 2024&#8212; present </h3>
          </div>
        </div><br/>
        {/* -------------------------- */}
        <div className='experience' >
          <Image className='imageexp' alt="" src={gma}/>
          <div>
            <h1 className='scroll-m-20 text-xl font-semibold tracking-tight'>GEMS Modern Academy SAP Program &#8212; <span>Technical Head</span></h1>
            <h3>Sep. 2022&#8212; Jan 2024 </h3>
          </div>
        </div><br/>
        {/* -------------------------- */}
        <div className='experience' >
          <Image className='imageexp' alt="" src={insurancemarket}/>
          <div>
            <h1 className='scroll-m-20 text-xl font-semibold tracking-tight'>InsuranceMarket.ae &#8212; <span>Software Developer</span> </h1>
            <h3>July 2024&#8212; Sep 2024 (Intership) </h3>
          </div>
        </div><br/>
        {/* -------------------------- */}
        <div className='experience' >
          <Image className='imageexp' alt="" src={danubeProperties}/>
          <div>
            <h1 className='scroll-m-20 text-xl font-semibold tracking-tight'>Danube Properties &#8212; <span>Ex-Head of Danube Services Project</span> </h1>
            <h3>Jan 2023&#8212; Nov 2023 </h3>
          </div>
        </div><br/><br/>
        <Button onClick={() => {router.push("/")}} className='dark'>Go Back</Button>
      </div>
    </div>
  )
}

export default Page