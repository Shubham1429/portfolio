import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    experience: Experience
}

function ExperienceCard({ experience }: Props) {

    const [startDate, setFormattedStartDate] = useState('');
    const [endDate, setFormattedEndDate] = useState('');


    useEffect(() => (
        setFormattedStartDate(new Date(experience.dateStarted).toLocaleDateString()),
        setFormattedEndDate(new Date(experience.dateEnded).toLocaleDateString())
    ),[]);

    return (
        <article className="flex flex-col rounded-lg items-center space-y-5 md:space-y-7 flex-shrink-0 md:w-[500px] xl:w-[700px] md:mt-20 xl:mt-25 snap-center
        bg-[#292929] p-10 opacity-40 cursor-pointer hover:opacity-100 transition-opacity duration-200
        w-[300px] h-[450px]
        ">
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                    once: true
                }}
                className="h-20 w-20 md:h-28 md:w-28 rounded-full object-center object-cover"
                src={urlFor(experience?.companyImage).url()} alt="" />
            <div className="px-0">
                <h4 className="text-xl md:text-3xl font-extrabold">{experience?.jobTitle}</h4>
                <p className="font-bold text-sm md:text-xl mt-1">{experience?.company}</p>
                <div className="flex flex-wrap space-x-2 my-4 overflow-x-scroll items-center gap-[4px]">
                    {experience?.technologies?.map((tech) => (
                        <img
                            key={tech._id} 
                            src={urlFor(tech.image).url()} 
                            alt="" 
                            className='h-8 w-8 md:h-10 md:w-10 rounded-full'
                        />
                    ))}
                </div>
                <p className="uppercase py-4 md:py-3 text-gray-300 text-base md:text-base font-bold">
                    {startDate} - {experience.isCurrentlyWorkingHere ? 'Present': endDate}                    
                </p>
                <ul className="list-disc md:space-y-2 space-y-3 text-lg ml-2 md:ml-0 
                overflow-y-hidden hover:overflow-y-scroll h-[100px] md:h-[120px] list-inside hover:scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80">
                    {experience.points.map((point,index) => (
                        <li 
                            className="text-xs md:text-sm"
                            key={index}
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            </div>

        </article>
    )
}

export default ExperienceCard;