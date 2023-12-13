import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '../typings'

type Props = {
    skills: SkillType[]
}

function Skills({ skills }: Props) {
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
            className="h-screen flex relative flex-col text-center md:text-left xl:flex-row xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
            <h3 className="absolute top-24 tracking-[10px] md:tracking-[20px] text-gray-500 uppercase text-2xl">Skills</h3>
            <div className="grid grid-cols-3 gap-3 md:gap-5">
                {skills?.slice(0, skills.length / 2).map((skill) => (
                    <Skill 
                        key={skill._id}
                        skill={skill}
                        directionLeft
                    />
                ))}
                {skills?.slice(skills.length / 2, skills.length).map((skill) => (
                    <Skill 
                        key={skill._id}
                        skill={skill}
                        directionRight
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default Skills
