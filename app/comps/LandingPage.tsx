import { AuroraText } from '@/components/magicui/aurora-text'
import React from 'react'
import { Button } from '@/components/ui/button'
import Card from './Card'
import stormee from "@/components/media/stormee.png"
import youtube from "@/components/media/youtube.png"
import { Badge } from '@/components/ui/badge'
import { BadgeCheckIcon } from 'lucide-react'
import SocialMediaLinks from './SocialMediaLinks'

function LandingPage() {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='w-[50vw]'>
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          I am Shashwat and I <AuroraText>learn</AuroraText> and <span className='text-amber-500'>build</span> AI at every moment.
        </h1>
        <br/>
        <SocialMediaLinks/> 
        <br/>
        <div className='flex items-center justify-center flex-col gap-3'>
          <Card
            title="Stormee AI"
            description='Get validation & competitor insights in minutes'
            webURL='https://www.stormee.app/'
            logo={stormee}
            skills={["AI Workflows", "Prompt Engineering", "UI/UX Design Thinking", "State Management", "DB + Auth"]}
            medias={[
              {
                "name": "Launch Video",
                "url": "https://youtu.be/Xvx7qHtPKQM?si=mrImzsRbopEISCqE",
                "media": null
              },
              {
                "name": "ProductHunt",
                "url": "https://www.producthunt.com/posts/stormee-ai?utm_source=other&utm_medium=social",
                "media": null
              }
            ]}
          />
          <Card
            title="YouTube Books"
            description='Never miss a video offline with YouTube Books'
            webURL='https://yt2doc.streamlit.app/'
            logo={youtube}
            skills={["Multi-agent pipelines", "API-powered content processing", "Modular Agentic Architecture", "Memory Optimization", "Performance Optimization", "Educational Value"]}
            medias={[
              {
                "name": "GitHub Repo",
                "url": "https://github.com/ShashwatM3/youtube-to-pdf",
                "media": null
              },
            ]}
          />
          <div className='flex items-center justify-between w-[60%] mt-3'>
            <Button>More projects</Button>
            <h3>Or</h3>
            <Button variant={'secondary'}>Experience</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage