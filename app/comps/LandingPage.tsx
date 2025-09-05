import { AuroraText } from '@/components/magicui/aurora-text'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Card from './Card'
import { Badge } from '@/components/ui/badge'
import { BadgeCheckIcon, Brain } from 'lucide-react'
import SocialMediaLinks from './SocialMediaLinks'
import projects from "@/app/data/projects";

function LandingPage() {
  const [restricted, setRestricted] = useState(true);
  return (
    <div className={`flex ${restricted ? 'items-center pt-10' : 'items-start pt-13'} justify-center h-full`}>
      <div className='w-[50vw]'>
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          I am Shashwat and I <AuroraText>learn</AuroraText> and <span className='text-amber-500'>build</span> AI at every moment.
        </h1>
        <br/>
        <SocialMediaLinks/> 
        <br/>
        <div className='flex items-center justify-center flex-col gap-3'>
          {projects.map((item, index) => (
            restricted
              ? (index <= 1 && (
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                  webURL={item.webURL}
                  logo={item.logo}
                  skills={item.skills}
                  medias={item.medias}
                  active={item.current || false}
                />
              ))
              : (index >= 0 && (
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                  webURL={item.webURL}
                  logo={item.logo}
                  skills={item.skills}
                  medias={item.medias}
                  active={item.current || false}
                />
              ))
          ))}
          <div className='flex items-center justify-between w-[60%] mt-3'>
            {restricted ? (
              <Button onClick={() => setRestricted(false)}>Show more</Button>
            ):(
              <Button onClick={() => setRestricted(true)}>Show less</Button>
            )}
            <h3>Or</h3>
            <Button variant={'secondary'}>Experience</Button>
          </div>
          <br/>
        </div>
      </div>
    </div>
  )
}

export default LandingPage