'use client'

import React, { useState } from 'react';
import "./XPage.css";
import profileimage from "@/components/icons/profileimage.png"
import Image from 'next/image';
import xlogo from "@/components/icons/xlogo.png"
import sampleIconX from "@/components/icons/sampleIconX.png";
import exploreX from "@/components/icons/exploreX.png";
import notificationsX from "@/components/icons/notificationsX.png";
import messagesX from "@/components/icons/messagesX.png";
import grok from "@/components/icons/grok.png";
import menuBarInputX from "@/components/icons/menuBarInputX.png"
import bookmarksX from "@/components/icons/bookmarksX.png";
import jobsX from "@/components/icons/jobsX.png";
import communitiesX from "@/components/icons/communitiesX.png";
import verifiedX from "@/components/icons/verifiedX.png";
import profileX from "@/components/icons/profileX.png";
import moreX from "@/components/icons/moreX.png";

function XPage() {
  const [fypActive, setFypgActive] = useState(true);
  return (
    <div className='x-main'>
      <div className='xdiv-1'>
        <div>
          <Image src={xlogo} className='xlogo' alt=''/>
          <div className='flex items-center gap-4'>
            <Image className='h-7 w-auto' src={sampleIconX} alt=""/>
            <h3>Home</h3>
          </div>
          <div className='flex items-center gap-4'>
            <Image className='h-7 w-auto' src={exploreX} alt=""/>
            <h3>Explore</h3>
          </div>
          <div className='flex items-center gap-4'>
            <Image className='h-7 w-auto' src={notificationsX} alt=""/>
            <h3>Notifications</h3>
          </div>
          <div className='flex items-center gap-4'>
            <Image className='h-7 w-auto' src={messagesX} alt=""/>
            <h3>Messages</h3>
          </div>
          <div className='flex items-center gap-4'>
            <Image className='h-7 w-auto' src={grok} alt=""/>
            <h3>Grok</h3>
          </div>
          <div className='flex items-center gap-4'>
            <Image className='h-7 w-auto' src={xlogo} alt=""/>
            <h3>Premium</h3>
          </div>
          <div className='flex items-center gap-4'>
            <Image className='h-7 w-auto' src={bookmarksX} alt=""/>
            <h3>Bookmarks</h3>
          </div>
          <div className='flex items-center gap-4'>
            <Image className='h-7 w-auto' src={jobsX} alt=""/>
            <h3>Jobs</h3>
          </div>
          <div className='flex items-center gap-4'>
            <Image className='h-7 w-auto' src={communitiesX} alt=""/>
            <h3>Communities</h3>
          </div>
          <div className='flex items-center gap-4'>
            <Image className='h-7 w-auto' src={verifiedX} alt=""/>
            <h3>Verified Orgs</h3>
          </div>
          <div className='flex items-center gap-4'>
            <Image className='h-7 w-auto' src={profileX} alt=""/>
            <h3>Profile</h3>
          </div>
          <div className='flex items-center gap-4'>
            <Image className='h-7 w-auto' src={moreX} alt=""/>
            <h3>More</h3>
          </div>
          <button>Post</button>
          <div className='x-profile'>
            <div>
              <Image className='x-profile-img' src={profileimage} alt=''/>
              <div>
                <h1>Shashwat M</h1>
                <h3>@ShashwatM30</h3>
              </div>
            </div>
            <h3 className='mb-3'>...</h3>
          </div>
        </div>
      </div>
      <div className='xdiv-2'>
        <div className='flex'>
          {fypActive ? (
            <div className='w-full flex items-center justify-between py-6  pt-8 border-b border-neutral-700'>
              <h1 className='font-bold px-20'><span className='border-b-3 border-blue-400 pb-2 cursor-pointer'>For you</span></h1>
              <h1 onClick={() => {setFypgActive(false)}} className='font-bold opacity-[60%] px-20 cursor-pointer'><span className=''>Following</span></h1>
            </div>
          ):(
            <div className='w-full flex items-center justify-between py-6  pt-8 border-b border-neutral-700'>
              <h1 onClick={() => {setFypgActive(true)}} className='font-bold opacity-[60%] px-20 cursor-pointer'><span className=''>For you</span></h1>
              <h1 className='font-bold px-20'><span className='border-b-3 border-blue-400 pb-2 cursor-pointer'>Following</span></h1>
            </div>
          )}
        </div>

        <div className='inputbox'>
          <Image alt='' className='profileimg-input' src={profileimage}/>
          <div className='w-full'>
            <textarea placeholder="What's happening?"/>
            <div className='flex items-center justify-between w-full'>
              <Image className='x-menubar' src={menuBarInputX} alt=''/>
              <button className='bg-white text-black px-4 py-1 rounded-lg font-semibold'>Post</button>
            </div>
          </div>
        </div>

        <div className='posts'>
          {fypActive ? (
            <div className='mt-10 text-center'>
              <h1>Posts <b>for you</b> will appear here</h1>
            </div>
          ):(
            <div className='mt-10 text-center'>
              <h1>Posts <b>from your following</b> will appear here</h1>
            </div>
          )}
        </div>
      </div>
      <div className='xdiv-3'>
        <div className='flex gap-2 items-center'>
          <Image alt='' src={exploreX} className='h-6 w-auto'/>
          <input className='searchX' placeholder='Search'/>
        </div>
      </div>
    </div>
  )
}

export default XPage