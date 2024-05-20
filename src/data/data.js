import { FaAppStore, FaCheck, FaFacebook, FaLaptopCode, FaMailBulk, FaRegSun, FaSearch, FaThumbsUp, FaUsers, FaUsersCog } from "react-icons/fa";

export const navData = [
    {
        id: 1,
        title: 'home',
        link: '/',
    },
    {
        id: 2,
        title: 'about',
        link: '/about',
    },
    {
        id: 3,
        title: 'services',
        link: '/services',
    },
    {
        id: 4,
        title: 'projects',
        link: '/projects',
    },
    {
        id: 5,
        title: 'team',
        link: '/team',
    },
    {
        id: 6,
        title: 'contact',
        link: '/contact',
    },
]


export const features = [
    {
        id: 1,
        title: 'Digital Marketing',
        icon: <FaMailBulk />,
        description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
    },
    {
        id: 2,
        title: 'SEO & Backlinks',
        icon: <FaSearch />,
        description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
    },
    {
        id: 3,
        title: 'Design & Development',
        icon: <FaLaptopCode />,
        description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
    },
]
export const skills = [
    {
        id: 1,
        title: 'Digital Marketing',
        color: 'bg-primary',
        end: 85,
        duration: 2
    },
    {
        id: 2,
        title: 'SEO & Backlinks',
        color: 'bg-secondary',
        end: 90,
        duration: 2
    },
    {
        id: 3,
        title: 'Design & Development',
        color: 'bg-dark',
        end: 95,
        duration: 2
    },
]
export const facts = [
    {
        id: 1,
        title: 'Digital Marketing',
        count: 1200,
        icon: <FaRegSun />,
    },
    {
        id: 2,
        title: 'SEO & Backlinks',
        count: 1200,
        icon: <FaUsersCog />,
    },
    {
        id: 3,
        title: 'Design & Development',
        count: 1200,
        icon: <FaUsers />,
    },
    {
        id: 4,
        title: 'Design & Development',
        count: 1200,
        icon: <FaCheck />,
    },
]
export const services = [
    {
        id: 1,
        title: 'SEO Optimization',
        details: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
        icon: <FaSearch />,
    },
    {
        id: 2,
        title: 'Web Design',
        details: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
        icon: <FaLaptopCode />,
    },
    {
        id: 3,
        title: 'Social Media Marketing',
        details: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
        icon: <FaFacebook />,
    },
    {
        id: 4,
        title: 'Email Marketing',
        details: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
        icon: <FaMailBulk />,
    },
    {
        id: 5,
        title: 'PPC Advertising',
        details: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
        icon: <FaThumbsUp />,
    },
    {
        id: 6,
        title: 'App Development',
        details: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
        icon: <FaAppStore />,
    },
]
