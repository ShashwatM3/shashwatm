"use client"

import React from 'react';
import "./Home.css"
import Image from 'next/image';
import me from "@/components/icons/me.png"
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

function HomePage() {
  const router = useRouter();
  return (
    <div className='home-main'>
      <div className='flex items-center justify-between'>
        <div>
          <h1>hi i'm shashwat.</h1>
          <h3>Currently an undergraduate student @ UC Davis studying Data Science. I love building and I love going out of the way to try things at the wrong times. Pitched my first website to a business magnate at 15. Built my first productivity tool at 16. Just been building ever since, but I decided to take advantage of this ADHD form of building, which is why I initiated Project BCS </h3>
          <div className='flex gap-2'>
          <Button onClick={() => {router.push("/bcs")}} className='dark'>Project BCS</Button>
          <Button onClick={() => {router.push("/socials")}}>Get in touch</Button>
          <Button onClick={() => {router.push("/experience")}}>Work Experience</Button>
          {/* <Button>Go-to Jams</Button> */}
          {/* <Button>stuff i like to watch</Button> */}
          {/* <Button className='dark' variant={'secondary'}>Resume</Button> */}
          </div>
        </div>
        <div>
        <Image className='me' src={me} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomePage