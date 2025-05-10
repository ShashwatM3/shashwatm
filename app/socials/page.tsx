'use client'

import React from 'react';
import './styles.css';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import x from "@/components/icons/x.png";
import linkedin from "@/components/icons/linkedin.jpg";
import gmail from "@/components/icons/gmail.png"
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter()
  return (
    <div className='socials-main'>
      <div>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>My Socials</h1>
        <div className='social' onClick={() => {
          window.open("https://www.linkedin.com/in/shashwat-mahalanobis/")
        }}>
          <Image className='imagesocial' alt="" src={linkedin}/>
          <div>
            <h1 className='scroll-m-20 text-xl font-semibold tracking-tight'>Linkedin &#8212; Connect with me! </h1>
            <h3>@Shashwat Mahalanobis</h3>
          </div>
        </div><br/>
        <div className='social' onClick={() => {
          window.open("https://x.com/ShashwatM30")
        }}>
          <Image className='imagesocial' alt="" src={x}/>
          <div>
            <h1 className='scroll-m-20 text-xl font-semibold tracking-tight'>X &#8212; See what i'm upto! </h1>
            <h3>@ShashwatM30</h3>
          </div>
        </div><br/><br/>
        <h2 className='scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 mb-7'>Reach out to me!</h2>
        <div className='social' onClick={() => {
          window.location.href = "mailto:smahalanobis@ucdavis.edu"
        }}>
          <Image className='imagesocial' alt="" src={gmail}/>
          <div>
            <h1 className='scroll-m-20 text-xl font-semibold tracking-tight'>Send me a mail </h1>
            <h3>smahalanobis@ucdavis.edu</h3>
          </div>
        </div><br/><br/>
        <Button onClick={() => {router.push("/")}} className='dark'>Go Back</Button>
      </div>
    </div>
  )
}

export default Page