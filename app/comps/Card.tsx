'use client'
import { Button } from '@/components/ui/button'
import { Eye, MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Badge } from "@/components/ui/badge"

function Card(props: { title: string, description: string, webURL: string, logo: any, medias: any, skills: any }) {
  return (
    <div className='w-full p-5 border border-solid rounded-lg py-6 hover:shadow-xl hover:border-neutral-600 transition-all duration-500'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          {props.logo ? (
            <Image alt='' className='rounded-xl' height={60} width={60} src={props.logo}/>
          ):(
            <Image alt='' height={20} width={20} src={`${props.webURL}`}/>
          )}
          <div>
            <h1 className='scroll-m-20 text-xl font-semibold tracking-tight mb-1'>{props.title}</h1>
            <h3 className='text-neutral-500'>{props.description}</h3>
          </div>
        </div>
        <Button onClick={() => window.open(`${props.webURL}`)}><Eye/></Button>
      </div>
      <div className='flex items-start justify-center flex-col gap-5 mt-5'>
        <div className='flex-1 flex items-center gap-2'>
          {props.medias.map((media: any) => (
            <Button variant={'outline'} key={media.name} onClick={() => window.open(media.url)}>{media.name}</Button>
          ))}
        </div>
        <div className='flex-1 flex items-center gap-2 flex-wrap'>
            {props.skills.map((skill: string) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Card