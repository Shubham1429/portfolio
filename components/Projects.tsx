import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings';
import { urlFor } from '../sanity';
import { SocialIcon } from 'react-social-icons';

type Props = {
    projects: Project[]
}

function Projects({ projects }: Props) {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
        >
            <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl">Projects</h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin space-y-4">
                {projects?.map((project, index) => (
                    <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 md:h-screen'>
                            <motion.img
                                initial={{
                                    y: -300,
                                    opacity: 0
                                }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                src={urlFor(project?.image).url()}
                                alt=""
                                className="object-contain object-center w-[280px] h-[280px] md:h-[350px] md:w-[350px]"
                            />                        
                        <div className="space-y-8 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-xl md:text-3xl font-semibold text-center flex items-center space-x-4 justify-center">
                                <p className='uppercase text-base md:text-xl decoration-[#F7AB0A]/50'>{project.title}</p>
                                <SocialIcon 
                                    network='github'
                                    bgColor='white'
                                    fgColor='black'
                                    target='_blank'
                                    url={project?.linkToBuild}
                                    style={{height:24, width:24, cursor: 'pointer'}}
                                />
                            </h4>
                            
                        </div>
                        <div className='flex items-center space-x-5 justify-center'>   
                            {project.technologies.map((tech) => (
                                <img 
                                    key={tech._id}
                                    src={urlFor(tech?.image).url()} 
                                    alt="" 
                                    className='w-8 h-8 rounded-full'
                                />
                            ))}

                        </div>
                        <p className="text-sm md:text-base text-center md:text-left">{project?.summary}</p>
                    </div>
                ))}

            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />
        </motion.div>
    )
}

export default Projects
