'use client'

import { useRef } from 'react'
import Image from 'next/image'
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion'

const MotionImage = motion(Image)

export function GrayscaleTransitionImage(props) {
  let ref = useRef(null)
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 65%', 'end 35%'],
  })
  let grayscale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1])
  let filter = useMotionTemplate`grayscale(${grayscale})`

  return (
    <div ref={ref} className="relative group">
      <MotionImage alt="" style={{ filter }} {...props} />
      <div
        className="absolute top-0 left-0 w-full transition duration-300 opacity-0 pointer-events-none group-hover:opacity-100"
        aria-hidden="true"
      >
        <Image alt="background image" {...props} />
      </div>
    </div>
  )
}
