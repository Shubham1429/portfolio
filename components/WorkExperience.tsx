import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

type Props = {
    experiences: Experience[]
}

function WorkExperience({ experiences }: Props) {
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
            className='h-screen flex md:relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 md:justify-evenly mx-auto items-center gap-9 md:gap-0'>
            <h3 className="md:absolute md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl mt-24 md:mt-0">
                Experience
            </h3>
            <div className="w-full flex space-x-5 overflow-x-scroll overflow-y-hidden md:p-10 snap-x snap-mandatory scrollbar-thin pb-10">
                {experiences?.map((experience) => (
                    <ExperienceCard 
                        key={experience._id}
                        experience={experience}
                    />
                ))}
                
            </div>
        </motion.div>
    )
}

export default WorkExperience
