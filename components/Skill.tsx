import React from 'react'
import { motion } from "framer-motion"
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    directionLeft?: boolean;
    directionRight?: boolean;
    skill: Skill
}

function Skill({ directionLeft, directionRight, skill }: Props) {
    return <div className="group relative flex cursor-pointer items-center text-center">
        <motion.div
            initial={{
                x: directionLeft ? -100 : directionRight ? 100 : 0,

                opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            viewport={{ once: true }}
            >
            <img 
                src={urlFor(skill.image).url()}
                alt=""
                className="rounded-full border border-gray-500 object-cover h-16 w-16 md:h-20 md:w-20 xl:w-20 xl:h-20 filter grayscale group-hover:grayscale-0 transition duration-300 ease-in-out" 
            />
            <p className='text-sm tracking-[1px]'>{skill.title}</p>

        </motion.div>
    </div>
}

export default Skill
