import { PageInfo } from '../typings';

export const fetchPageInfo = async () => {
    console.log({'info': process.env.NEXT_PUBLIC_BASE_URL})

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
}