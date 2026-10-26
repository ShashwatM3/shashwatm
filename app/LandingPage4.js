'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import me from '../public/me.jpeg'

function LandingPage4() {
  const [showMoreBio, setShowMoreBio] = useState(false)
  const [showMoreHats, setShowMoreHats] = useState(false)
  const [showMoreProducts, setShowMoreProducts] = useState(false)

  const products = [
    {
      value: "justchefit",
      name: "JustChefIt",
      content: "An AI Chef helping 35 uni students (launched 2 weeks back)",
      url: "https://justchefit.vercel.app/",
      emoji: "👨‍🍳",
    },
    {
      value: "paper2pod",
      name: "Paper2Pod",
      content: "Research Papers 2 Podcasts (in <5 mins)",
      url: "https://paper2pod.vercel.app/",
      emoji: "🎙️",
    },
    {
      value: "coursie",
      name: "Coursie",
      content: "Coursera but you can create courses + have live lectures",
      url: "https://aicoursera.vercel.app/",
      emoji: "📚",
    },
    {
      value: "grillmaxer",
      name: "GrillMaxer",
      content: "An AI Interview Platform",
      url: "https://github.com/ShashwatM3/interviewer-ai",
      emoji: "🎤",
    },
    {
      value: "brainos",
      name: "BrainOS",
      content: "A Searchable Brain",
      url: "https://brain-os.vercel.app/",
      emoji: "🧠",
    },
    {
      value: "linkeder",
      name: "Linkeder",
      content: "Search for your perfect connection over 1000 (fake) student profiles",
      url: "https://github.com/ShashwatM3/linkeder",
      emoji: "🔗",
    },
    {
      value: "youtube-books",
      name: "YouTube Books",
      content: "Never miss a video offline with YouTube Books",
      url: "https://github.com/ShashwatM3/youtube-to-pdf/",
      emoji: "📖",
    },
    {
      value: "aira",
      name: "Deep Research Automation",
      content: "AI agents that scrape, analyze, and write research reports for you",
      url: "https://github.com/ShashwatM3/aira-deep-research",
      emoji: "🔬",
    },
  ]

  const items = [
    {
      value: "altitut",
      role: "Software Engineer",
      company: "Altitut",
      dates: "April 2026",
      current: true,
      content: "Pipelines for AI cloud agents + Gemma 4 use cases.",
    },
    {
      value: "daytona",
      role: "Daytona Pacer",
      company: "Daytona",
      dates: "February 2026",
      current: true,
      content:
        "Helping developers have more efficient workflows with Daytona's infra. Using Daytona for AI research.",
    },
    {
      value: "lara",
      role: "Undergraduate Researcher",
      company: "Laboratory for AI, Robotics and Automation",
      dates: "January 2026",
      current: true,
      content: "Curing uveitis.",
    },
    // {
    //   value: "ucd-cpe",
    //   role: "Licensing & Course Support Assistant",
    //   company: "UC Davis Continuing and Professional Education",
    //   dates: "October 2025",
    //   current: true,
    //   content:
    //     "Administer Coursera courses, manage licenses, track enrollments and progress.",
    // },
    {
      value: "liba",
      role: "Software Engineer",
      company: "Liba Space",
      dates: "February 2026 – June 2026",
      current: false,
      content: "Bringing students / new grads to the jobs they actually want.",
    },
    {
      value: "grata",
      role: "Software Developer",
      company: "Grata",
      dates: "October 2025 – December 2025",
      current: false,
      content: "Production-grade lease management portal.",
    },
    {
      value: "utp",
      role: "Software Developer",
      company: "UTP Group",
      dates: "July 2025 – August 2025",
      current: false,
      content:
        "Business performance dashboard for data flow, metric calculations, and frontier AI applications.",
    },
    {
      value: "codelab",
      role: "Software Developer",
      company: "CodeLab",
      dates: "October 2024 – June 2025",
      current: false,
      content:
        "Coordinated across a cross-domain team and co-developed a full stack lost and found platform for UC Davis.",
    },
    {
      value: "gems-sap",
      role: "Website Developer & Technical Head",
      company: "Safety Ambassador Program @ GEMS Modern Academy",
      dates: "September 2022 – January 2024",
      current: false,
      content:
        "Built a Coursera for digital safety at high school, maintaining over 900+ active users over months.",
    },
    {
      value: "insurancemarket",
      role: "Software Developer",
      company: "InsuranceMarket.ae",
      dates: "July 2023 – September 2023",
      current: false,
      content:
        "Worked with CTO to produce an AI-powered OCR tool for extracting key details from internal docs.",
    },
  ]

  const visibleHats = showMoreHats ? items : items.slice(0, 3)
  const visibleProducts = showMoreProducts ? products : products.slice(0, 3)

  return (
    <div className='bg-white text-black min-h-screen flex items-start justify-center pt-20'>
      <div className='w-[80vw] md:w-[50vw] mb-30'>
        <div className='flex items-start justify-between gap-4 mb-4 w-full'>
          <h1 className='instrument text-5xl'><b>Hi, I'm Shashwat</b></h1>
          <Image
            alt=''
            src={me}
            width={80}
            height={80}
            className='h-16 sm:h-20 w-auto rounded-full flex-shrink-0 md:hover:h-40 transition-all cursor-pointer'
            style={{ maxWidth: '80px' }}
          />
        </div>
        <br/>
        <div className="relative">
          <div className={showMoreBio ? '' : 'max-h-[11.5rem] overflow-hidden'}>
            <h3 className='instrument-sans text-md mb-4'>I'm an undergraduate student at UC Davis pursuing the art of Data Science. I'm usually involved in a bit of everything: lot of AI/ML Research, SWE projects, and a bit of entrepreneurship.</h3>
            <h3 className='instrument-sans text-md mb-4'>
              I usually like to study and build projects around <span className='font-bold instrument text-2xl'><b>self-supervised learning</b></span> in my free time, primarily because (1) knowledge can never be labelled / classified and that's the beauty of what makes humans extraordinary, (2) I wish to contribute to a future where machines are generalists not specialists (which is what we have currently). <b>I'm currently working on augmenting JEPA architectures for low dimensional latent representations</b>
            </h3>
            <h3 className='instrument-sans text-md mb-4'>
              I come from a &nbsp;<span className='instrument text-2xl'><b>Software Engineering</b></span>&nbsp;&nbsp;background where I've built projects, done internships, raised a couple dollars, even taught Python when I was 15, but fell in love with designing problem-solving painkiller applications end-to-end. <b>It's usually a two-step process for me:</b> (1) Build the scrappy version which has a beautiful frontier but scrappy backend — USER ATTRACTION, (2) Bulletproof using standard SWE practices — USER RETENTION
            </h3>
            <h3 className='instrument-sans text-md mb-4'>
              My dad's an entrepreneur, and so I usually go every single day seeing him pretty-talk clients, delegate tasks on the move, and sharing me insights on what to build next, and so the <b>entrepreneurial fire</b> is always with me. I have previously scaled my own products to <b>a couple thousand views per week, a few thousand users per month, etc</b> but still far away from my <i>"PayPal moment"</i>
            </h3>
            <h3>If we end up talking, just know:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>I hate small talk, redundant questions, conversations I get no value from</li>
              <li>I'd love to interrogate you on your startup/company/product</li>
              <li>I'd love to talk about my own projects/experience</li>
              <li>I'd love to talk about world models, self-supervised learning, action models</li>
              <li>I'd love to brainstorm solutions to problem statements</li>
            </ul>
          </div>
          {!showMoreBio && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent" />
          )}
        </div>
        <button
          type="button"
          onClick={() => setShowMoreBio((v) => !v)}
          className="mt-2 text-sm text-neutral-500 underline underline-offset-2 hover:text-black transition-colors"
        >
          {showMoreBio ? 'Show less' : 'Show more'}
        </button>
        <div className='flex items-center gap-2 mt-6 mb-4'>
          <div className='w-8 h-8 sm:w-10 sm:h-10'>
            <SocialIcon onClick={() => window.open("https://github.com/ShashwatM3")} borderRadius="30%" network="github" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className='w-8 h-8 sm:w-10 sm:h-10'>
            <SocialIcon onClick={() => window.open("https://www.linkedin.com/in/shash-m/")} borderRadius="30%" network="linkedin" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className='w-8 h-8 sm:w-10 sm:h-10'>
            <SocialIcon borderRadius="30%" network="spotify" style={{ width: '100%', height: '100%' }} />
          </div>
          <Link
            href="/blogs/"
            className="ml-2 text-sm text-neutral-500 underline underline-offset-2 hover:text-black transition-colors"
          >
            Blogs
          </Link>
        </div>
        <br/>
        <h1 className='text-3xl instrument mb-4'><b>My Different Hats</b></h1>
        <div className={`relative ${!showMoreHats ? 'max-h-[9.5rem] overflow-hidden' : ''}`}>
          <Accordion type="multiple" className="w-full flex items-start justify-center flex-col gap-4">
            {visibleHats.map((item) => (
              <AccordionItem key={item.value} value={item.value} className='shadow-sm border-t border-neutral-100 rounded-md px-4 py-1 w-full'>
                <AccordionTrigger className="hover:no-underline">
                  <span className="flex flex-col gap-1 pr-2 text-left sm:flex-row sm:items-center sm:gap-3">
                    <span className="flex flex-wrap items-center gap-2">
                      <span>
                        {item.role} @ {item.company}
                      </span>
                      {item.current && (
                        <span className="rounded-md bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700">
                          Current
                        </span>
                      )}
                    </span>
                    <span className="text-xs font-normal text-neutral-500 sm:ml-auto">
                      {item.dates}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {!showMoreHats && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/90 to-transparent" />
          )}
        </div>
        <button
          type="button"
          onClick={() => setShowMoreHats((v) => !v)}
          className="mt-3 text-sm text-neutral-500 underline underline-offset-2 hover:text-black transition-colors"
        >
          {showMoreHats ? 'Show less' : 'Show more'}
        </button>
        <br/>
        <br/>
        <h1 className='text-3xl instrument mb-4'><b>Products</b></h1>
        <div className={`relative ${!showMoreProducts ? 'max-h-[9.5rem] overflow-hidden' : ''}`}>
          <Accordion type="multiple" className="w-full flex items-start justify-center flex-col gap-4">
            {visibleProducts.map((product) => (
              <AccordionItem key={product.value} value={product.value} className='shadow-sm border-t border-neutral-100 rounded-md px-4 py-1 w-full'>
                <AccordionTrigger className="hover:no-underline font-normal">
                  <span className="text-left">
                    <span className="mr-1.5">{product.emoji}</span>
                    <b>{product.name}</b>
                    <span className="font-normal">: {product.content}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <button
                    type="button"
                    onClick={() => window.open(product.url)}
                    className="text-sm text-neutral-500 underline underline-offset-2 hover:text-black transition-colors"
                  >
                    Open →
                  </button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {!showMoreProducts && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/90 to-transparent" />
          )}
        </div>
        <button
          type="button"
          onClick={() => setShowMoreProducts((v) => !v)}
          className="mt-3 text-sm text-neutral-500 underline underline-offset-2 hover:text-black transition-colors"
        >
          {showMoreProducts ? 'Show less' : 'Show more'}
        </button>
      </div>
    </div>
  )
}

export default LandingPage4
