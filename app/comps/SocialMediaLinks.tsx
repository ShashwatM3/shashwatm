'use client'
import { Badge } from '@/components/ui/badge'
import { BadgeCheckIcon, Github, Linkedin, Twitter, X } from 'lucide-react'
import React from 'react'

function SocialMediaLinks() {
  return (
    <div className='flex items-center justify-center gap-3'>
      <Badge
        variant="secondary"
        className="cursor-pointer text-md"
        onClick={() => window.open("https://x.com/ShashwatM30")}
      >
        <X className='text-neutral-100 font-bold' />
        shash
      </Badge>

      <Badge
        variant="secondary"
        className="cursor-pointer text-md"
        onClick={() => window.open("https://www.linkedin.com/in/shashwat-mahalanobis/")}
      >
        <Linkedin className='text-blue-500' />
        shashwat-....
      </Badge>
      <Badge
        variant="secondary"
        className="bg-neutral-800 text-white cursor-pointer text-md"
        onClick={() => window.open("https://github.com/ShashwatM3")}
      >
        <Github className='text-red-500' />
        ShashwatM3
      </Badge>
    </div>
  )
}

export default SocialMediaLinks