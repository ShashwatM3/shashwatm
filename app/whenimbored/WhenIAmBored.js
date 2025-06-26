'use client'
import React from 'react'
import "./styles.css";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

function WhenIAmBored() {
  const router = useRouter();
  return (
    <div className='whenimbored-main'>
      <div>
        <h1>What do I do when I'm bored?</h1>
        <h3>So usually, when I'm bored, or the Wi-Fi switches off randomly, I have a wierd habit of trying to "re-make" or "clone" certain websites. Just the landing page. Until the Wi-Fi comes back on or I find something else to do :)</h3>
        <div className='flex items-center justify-center gap-2'>
          <Button className='dark' onClick={() => {router.push("/whenimbored/x")}}>Cloning X (twitter)</Button>
          <Button className='dark' onClick={() => {router.push("/whenimbored/x")}}>Cloning YouTube</Button>
        </div>
      </div>
    </div>
  )
}

export default WhenIAmBored