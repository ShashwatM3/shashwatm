'use client'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function LandingPage2() {
  return (
    <div className='min-h-screen w-screen flex items-center justify-center p-4 sm:p-6 md:p-8'>
      <div className='h-auto max-h-[80vh] w-full max-w-[70vw] sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[70vw] font-mono overflow-y-auto overflow-x-hidden'>
        <h1 className='scroll-m-20 text-2xl sm:text-3xl font-light tracking-tight text-balance mb-5'>Shashwat Mahalanobis</h1>
        <h3 className='text-sm sm:text-base'>I love learning & building. As you can see below, I have my share of variety in projects.<br/><br/> One thing about me: <b>I am an excellent problem solver. I will give you ideas/solutions in minutes.</b><br/><br/>Another thing about me: <b>I may not have all the knowledge a recruiter looks out for, but I learn faster than 70% of the candidates</b></h3>
        <br/>
        <hr className='border-white'/>
        <br/>
        <div className='flex items-start justify-center w-full gap-3'>
          <div className='flex-1'>
            <h3 className='text-lg sm:text-xl'>Worked on previously</h3><br/>
            <a onClick={() => window.open("https://justchefit.vercel.app/")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>An AI Chef helping 35 uni students (launched 2 weeks back)</a>
            <a onClick={() => window.open("https://paper2pod.vercel.app/")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Research Papers 2 Podcasts (in {`<`}5 mins)</a>
            <a onClick={() => window.open("https://aicoursera.vercel.app/")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Coursie: Coursera but you can create courses + have live lectures</a>
            <a onClick={() => window.open("https://github.com/ShashwatM3/interviewer-ai")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>GrillMaxer: An AI Interview Platform</a>
            <a onClick={() => window.open("https://brain-os.vercel.app/")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>BrainOS — A Searchable Brain</a>
            <a onClick={() => window.open("https://github.com/ShashwatM3/linkeder")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Linkeder — Search for your perfect connection over 1000 (fake) student profiles</a>
            <a onClick={() => window.open("https://github.com/ShashwatM3/youtube-to-pdf/")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>YouTube Books — Never miss a video offline with YouTube Books</a>
            <a onClick={() => window.open("https://github.com/ShashwatM3/aira-deep-research")} className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Deep Research Automation — AI agents that scrape, analyze, and write research reports for you</a>
            <br/>
            <h3 className='text-lg sm:text-xl'>Upcoming</h3><br/>
            <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Canva for AI Agents</a>
            <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>AgentCanvas — No-code Voice Agent UI Builder</a>
            <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Reachly — 24/7 Marketing Agent</a>
            <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Startup Validator Engine</a>
            <br/>
            <h3 className='text-lg sm:text-xl'>What I'm Learning</h3><br/>
            <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Re-modelling Agentic Memory</a>
            <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>RL-based Robotics</a>
          </div>
          <div className='flex-1'>
            <h3 className='text-lg sm:text-xl'>Research</h3><br/>
            <h4></h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage2