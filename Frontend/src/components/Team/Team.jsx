import React from 'react'
import umer from '../../assets/me.jpeg'
import shami from '../../assets/shami.jpg'
import shoaib from '../../assets/shoaib.jpeg'
import zoha from '../../assets/zoha.jpg'
import noman from '../../assets/noman.jpg'
import laiba from '../../assets/laiba.jpg'
import MemberCard from './MemberCard/MemberCard';
const Team = () => {
    const [isFlipped, setIsFlipped] = React.useState(false)
    const members = [
        {
            id: '1',
            name: 'Muhammad Umer',
            role: 'Python x Web Developer',
            university: 'University Of Agriculture, Pakistan',
            img: umer,
            description: 'As a Python and React developer, I have a strong foundation in both Python programming and React JavaScript library. My experience with Python allows me to create powerful back-end solutions, while my expertise with React enables me to build dynamic and interactive user interfaces for web applications.   ',
            linkedin: 'https://www.linkedin.com/in/mumer119131/',
            github: 'https://github.com/mumer119131',
            discord: 'https://discordapp.com/users/538769440779665428/'
        },
        {
            id: '2',
            name: 'Ahtesham Sarwar',
            role: 'Python Developer',
            university: 'University Of Agriculture, Pakistan',
            img: shami,
            description: 'As a Python developer, I have a deep understanding of the Python programming language and its vast range of libraries and frameworks. I have experience creating robust and scalable back-end solutions, web applications, and data analysis tools using Python.',
            linkedin: 'https://www.linkedin.com/in/ahtesham-sarwar-97744a259/',
            github: 'https://github.com/M786453',
            discord: 'https://discordapp.com/users/692722760111095828/'
        },
        {
            id: '3',
            name: 'Shoaib Akbar',
            role: 'Web Scraper',
            university: 'University Of Agriculture, Pakistan',
            img: shoaib,
            description: 'As a web scraper, I have a strong foundation in data extraction, data analysis, and web automation. My expertise in web scraping allows me to extract data from various sources, including websites, social media, and other online platforms, and transform that data into valuable insights.',
            linkedin: 'https://www.linkedin.com/in/mask02/',
            github: 'https://github.com/Mask02',
            discord: 'https://discordapp.com/users/729588030083563600/'
        },
        {
            id: '4',
            name: 'Zoha Usman',
            role: 'Designer',
            university: 'University Of Agriculture, Pakistan',
            img: zoha,
            description: 'As a designer, I have a passion for creating aesthetically pleasing and functional designs that meet the needs of clients and users. I have experience working on a range of design projects, including web design, user interface (UI) design, user experience (UX) design, and graphic design.',
            linkedin: 'https://www.linkedin.com/in/zoha-usman-228774214/',
            github: 'https://github.com/zoha-usman',
            discord: 'https://discordapp.com/users/1041389028144074882/'
        },
        {
            id: '5',
            name: 'Muhammad Noman',
            role: 'Developer',
            university: 'University Of Agriculture, Pakistan',
            img: noman,
            description: "As a front-end developer with expertise in JavaScript, React, and React Native, I have the ability to create dynamic and interactive web and mobile applications. I'm skilled in writing efficient, reusable, and well-structured code to create visually appealing and functional user interfaces.",
            linkedin: 'https://www.linkedin.com/in/muhammad-noman-532431190',
            github: 'https://github.com/nomikhan777',
            discord: 'https://discordapp.com/users/1037042659421859920/'
        },
        {
            id: '6',
            name: 'Laiba Khan',
            role: 'Designer',
            university: 'University Of Agriculture, Pakistan',
            img: laiba,
            description: 'As a designer, I have a passion for creating aesthetically pleasing and functional designs that meet the needs of clients and users. I have experience working on a range of design projects, including web design, user interface (UI) design, user experience (UX) design, and graphic design.',
            linkedin: 'https://www.linkedin.com/in/laiba-khan-92aa71247/',
            github: '',
            discord: 'https://discordapp.com/users/1051085219106652180/'
        },
    ]
    return (
        <section className='flex flex-col h-[calc(100vh-7rem)] items-center'>
            <h1 className='text-3xl mt-4'>Our Team</h1>
            <p className='mb-4 font-thin'>"Together, we're not just a team, we're a powerhouse of creativity, collaboration, and success."</p>
            <div className='mt-8 pb-8 flex flex-wrap gap-6 items-center justify-center'>
                {members.map(member => <MemberCard member={member} key={member.id} />
                )}
            </div>
        </section>
    )
}

export default Team