import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import Link from 'next/link'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperience'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
    pageInfo: PageInfo,
    experiences: Experience[],
    skills: Skill[],
    projects: Project[],
    socials: Social[]
}

const Home = ({pageInfo, experiences, skills, socials, projects}: Props) => {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 w-screen">
            <Head>
                <title>Shubham Portfolio</title>
                <link rel="icon" type="image/x-icon" href="https://i.ibb.co/k8VwKYz/avatar.webp"></link>
            </Head>
            <Header socials={socials}/>
            {/* Hero */}
            <section id="hero" className="snap-start">
                <Hero pageInfo={pageInfo}/>
            </section>
            {/* About */}
            <section id="about" className="snap-center">
                <About pageInfo={pageInfo}/>
            </section>
            {/* Experiences */}
            <section id="experience" className="snap-center">
                <WorkExperience experiences={experiences}/>
            </section>
            {/* Skills */}
            <section id="skills" className="snap-start">
                <Skills skills={skills}/>
            </section>
            {/* Projects */}
            <section id="projects" className="snap-start">
                <Projects projects={projects}/>
            </section>
            {/* Contact Me */}
            <section id="contact" className="snap-start">
                <ContactMe />
            </section>
            <Link href="#hero">
                <footer className='sticky bottom-5 w-full cursor-pointer'>
                    <div className='flex items-center justify-center'>
                        <img 
                            src="https://www.stickergenius.com/wp-content/uploads/2020/07/SG-COVID-ARROWS-OR.jpg" alt="" 
                            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
                        />
                    </div>
                </footer>
            </Link>
        </div>
    )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();

    return {
        props: {
            pageInfo,
            experiences,skills,
            projects, socials
        },
        revalidate: 10,
    }
    
}
