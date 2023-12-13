import { Experience } from '../typings';

export const fetchExperiences = async () => {
    console.log({'': process.env.NEXT_PUBLIC_BASE_URL})
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);

    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    return experiences;
}