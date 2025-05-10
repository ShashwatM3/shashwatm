'use client'
import React from 'react';
import "./ProjectBCS.css"
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from 'next/navigation';

function ProjectBCS() {
  const router = useRouter();
  return (
    <div className='project-bcs-main'>
      <div>
        <h1>Project BCS</h1>
        <h3>Channelling my love for building into a structured manner</h3>
        <h4>Project BCS is simple</h4>
        <ul className={"list-disc list-inside"}>
          <li>Build whatever comes to your mind</li>
          <li>Ship by it by the end of 2 weeks</li>
          <li>Repeat.</li>
        </ul>
        <h4>The original idea was to ship one project every week, but with the hopes of getting a good GPA, I pivoted to something <b>more realistic.</b> Since this is recent, I haven't shipped yet, but I am quite close to launching one. <span className='opacity-[60%]'>(See below for more details)</span>. More are yet to come. In fact, my Notion is filled with project ideas <b><i>yet to be built.</i></b></h4>
        <br/><br/>
        <div className='projects-pbcs'>

          <div className='project-bcs'>
            <div className='flex items-center justify-between'>
              <h1 className='scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0'>Stormee AI</h1>
              <h3 className='text-green-500 flex items-center gap-2'>
              <span className='dot'/>
              <span>In progress</span>
              </h3>
            </div>
            <div className='flex items-center justify-between'>
              <h3>Stormee AI helps you turn a rough idea into a clear, ready-to-build plan in minutes. From one-line idea to detailed execution blueprint, Stormee diagnoses your blind spots, challenges your assumptions, and delivers market insight, product design, and technical architecture — fast, brutally, and without fluff.</h3>
              <div className='flex items-center justify-center gap-2 flex-col'>
                <Button className='dark w-full'>Visit Site</Button>
                <Button className='border bg-transparent border-neutral-700'>View Progress</Button>
              </div>
            </div>
          </div>
          <Button onClick={() => {
            router.push("/")
          }} variant={'secondary'} className='dark'>Go back</Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectBCS