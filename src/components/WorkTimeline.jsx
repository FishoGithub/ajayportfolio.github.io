import React from 'react'
import { Timeline } from '@mui/lab'
import { TimelineItem } from '@mui/lab'
import { TimelineSeparator } from '@mui/lab'
import { TimelineConnector } from '@mui/lab'
import { TimelineContent } from '@mui/lab'
import { TimelineDot } from '@mui/lab'
import { TimelineOppositeContent } from '@mui/lab'

const WorkTimeline = () => {
  return (
    <Timeline position='alternate'>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <p className='rounded-3xl w-full object-contain leading-snug tracking-tight font-extrabold lg:text-xl md:text-xl 2xl:text-3xl py-5 bg-gradient-to-r from-yellow-400 from-500% via-orange-400 via-50% to-orange-600 to-90% text-transparent bg-clip-text'>Amazon</p>
          <p className='text-zinc-400 pb-5'>software development manager / <a className='text-zinc-300'>2016-present</a></p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem position='left'>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <p className='w-full object-contain leading-snug tracking-tight font-extrabold lg:text-xl md:text-xl 2xl:text-3xl py-5 bg-gradient-to-r from-blue-100 from-500% via-zinc-400 via-50% to-gray-200 to-90% text-transparent bg-clip-text'> Nordstrom</p>
          <p className='text-zinc-400 pb-5'>software engineer / <a className='text-zinc-300'>2014-2016</a></p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <p className='w-full object-contain leading-snug tracking-tight font-extrabold lg:text-xl md:text-xl 2xl:text-3xl py-5 bg-gradient-to-r from-purple-500 from-500% via-orange-500 via-80% to-pink-400 to-90% text-transparent bg-clip-text'>MindTree</p>
          <p className='text-zinc-400 pb-5'>sdet lead @ microsoft / <a className='text-zinc-300'>2006-2014</a></p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>

  )
}

export default WorkTimeline
