import { motion } from 'framer-motion'
import React from 'react'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className="h-screen flex flex-col md:relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="md:absolute md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl mt-10 md:mt-0">About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{
                    once: true
                }}
                src={urlFor(pageInfo?.profilePic).url()}
                className="-mb-10 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[300px]"
            />

            <div className='space-y-5 md:space-y-10 px-0 md:px-10'>
                <h4 className='text-2xl md:text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "} background</h4>
                <p className='md:text-base text-xs'>{pageInfo?.backgroundInformation}</p>
            </div>
        </motion.div>
    )
}

export default About
