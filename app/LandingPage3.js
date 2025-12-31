'use client'
import { Button } from '@/components/ui/button'
import { Globe, LucideLocationEdit, Pin } from 'lucide-react'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import me from '../public/me.jpeg';
import Image from 'next/image'

function LandingPage3() {
  return (
    <div className='min-h-screen w-screen overflow-scroll flex items-start justify-center'>
      <div className='w-[60vw] mt-20'>
        <div className='flex items-start justify-between'>
          <div>
            <h1 className='text-3xl font-semibold domine mb-1'>Shashwat Mahalanobis</h1>
            <h3 className='text-neutral-500 flex items-center font-mono'><LucideLocationEdit className='h-4'/>&nbsp;Davis, CA</h3>
          </div>
          <Image alt='' className='h-20 hover:h-40 transition-all cursor-pointer w-auto rounded-full' src={me} width={80} height={80}/>
        </div>
        <br/>
        <h1 className='mb-3 font-bold text-2xl'>I'm a 19 y/o entrepreneur, developer, and research enthusiast. </h1>
        <h3>- I build and grow software solutions <span className='text-neutral-400'>(1.4k impressions, 2 software clients)</span></h3>
        <h3>- Founder of <span onClick={() => window.open("https://bit.ly/aichef")} className='text-yellow-400 font-bold hover:text-orange-400 transition-all cursor-pointer'>JustChefIt:</span> A personalized experience to cooking</h3>
        <h3 className='mb-3'>- Researching on Agentic Intelligence</h3>
        <div className='flex items-center gap-2'>
          <SocialIcon onClick={() => window.open("https://github.com/ShashwatM3")} borderRadius="30%" network="github" style={{ width: 40, height: 40 }} />
          <SocialIcon onClick={() => window.open("https://www.linkedin.com/in/shashwat-mahalanobis/")} borderRadius="30%" network="linkedin" style={{ width: 40, height: 40 }} />
          <SocialIcon borderRadius="30%" network="spotify" style={{ width: 40, height: 40 }} />
        </div>
        <br/><br/>
        <h1 className='domine text-2xl font-bold mb-2'>Products</h1>
        <a onClick={() => window.open("https://justchefit.vercel.app/")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>An AI Chef helping 35 uni students (launched 2 weeks back)</a>
        <a onClick={() => window.open("https://paper2pod.vercel.app/")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Research Papers 2 Podcasts (in {`<`}5 mins)</a>
        <a onClick={() => window.open("https://aicoursera.vercel.app/")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Coursie: Coursera but you can create courses + have live lectures</a>
        <a onClick={() => window.open("https://github.com/ShashwatM3/interviewer-ai")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>GrillMaxer: An AI Interview Platform</a>
        <a onClick={() => window.open("https://brain-os.vercel.app/")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>BrainOS — A Searchable Brain</a>
        <a onClick={() => window.open("https://github.com/ShashwatM3/linkeder")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Linkeder — Search for your perfect connection over 1000 (fake) student profiles</a>
        <a onClick={() => window.open("https://github.com/ShashwatM3/youtube-to-pdf/")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>YouTube Books — Never miss a video offline with YouTube Books</a>
        <a onClick={() => window.open("https://github.com/ShashwatM3/aira-deep-research")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Deep Research Automation — AI agents that scrape, analyze, and write research reports for you</a>
        <br/>
        <h1 className='domine text-2xl font-bold mb-2'>Work Experience</h1>
        <a onClick={() => window.open("https://grata.life/")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>SWE @ Grata — Contract</a>
        <a onClick={() => window.open("https://www.davisautonomy.com/")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>AI Engineer @ Davis Autonomy Club</a>
        <a onClick={() => window.open("https://www.linkedin.com/posts/shash-m_today-marks-the-end-of-my-software-dev-internship-activity-7367279353593761792-mtES?utm_source=share&utm_medium=member_desktop&rcm=ACoAACcHZtIBk91LLXHPfVkhqvYGVBAvM8Nu7SE")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>SWE / AI Intern @ UTP Group</a>
        <a onClick={() => window.open("https://www.linkedin.com/posts/shash-m_today-marks-the-end-of-my-software-dev-internship-activity-7367279353593761792-mtES?utm_source=share&utm_medium=member_desktop&rcm=ACoAACcHZtIBk91LLXHPfVkhqvYGVBAvM8Nu7SE")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>SWE + Technical Head (900+ users) @ GMA SAP Program</a>
        <a onClick={() => window.open("")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>SWE Intern @ InsuranceMarket.ae</a>
        <br/><br/>
      </div>
    </div>
  )
}

export default LandingPage3