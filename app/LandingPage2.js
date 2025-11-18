import React from 'react'

function LandingPage2() {
  return (
    <div className='min-h-screen w-screen flex items-center justify-center p-4 sm:p-6 md:p-8'>
      <div className='h-auto max-h-[80vh] w-full max-w-[70vw] sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[70vw] font-mono overflow-y-auto overflow-x-hidden'>
        <h1 className='scroll-m-20 text-2xl sm:text-3xl font-light tracking-tight text-balance mb-5'>Shashwat Mahalanobis</h1>
        <h3 className='text-sm sm:text-base'>I love learning & building. As you can see below, I have my share of variety in projects.<br/><br/> One thing about me: <b>I am an excellent problem solver. I will give you ideas/solutions in minutes.</b><br/><br/>Another thing about me: <b>I may not have all the knowledge a recruiter looks out for, but I learn faster than 70% of the candidates</b></h3>
        <br/>
        <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>An AI Chef helping 35 uni students (launched 2 weeks back)</a>
        <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Research Papers 2 Podcasts (in {`<`}5 mins)</a>
        <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Coursie: Coursera but you can create courses + have live lectures</a>
        <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>GrillMaxer: An AI Interview Platform</a>
        <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>BrainOS — A Searchable Brain</a>
        <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Linkeder — Search for your perfect connection over 1000 (fake) student profiles</a>
        <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>YouTube Books — Never miss a video offline with YouTube Books</a>
        <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Deep Research Automation — AI agents that scrape, analyze, and write research reports for you</a>
        <br/>
        <h3 className='text-lg sm:text-xl'>Upcoming</h3><br/>
        <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Canva for AI Agents</a>
        <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>AgentCanvas — No-code Voice Agent UI Builder</a>
        <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Reachly — 24/7 Marketing Agent</a>
        <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Startup Validator Engine</a>
        <br/>
        <h3 className='text-lg sm:text-xl'>What I'm Learning</h3><br/>
        <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Agentic AI Mastery</a>
        <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Reinforcement Learning</a>
        <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>RL-based Robotics</a>
        <a className='text-purple-300 hover:underline cursor-pointer text-sm sm:text-base block mb-1'>Studying the LLM Lifecycle</a>
      </div>
    </div>
  )
}

export default LandingPage2