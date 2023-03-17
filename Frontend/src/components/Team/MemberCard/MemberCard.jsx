import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import { BsGithub } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
const MemberCard = ({ member }) => {
    const [isFlipped, setIsFlipped] = React.useState(false)

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" key={member.id}>
            <div onMouseEnter={() => setIsFlipped(!isFlipped)} className='bg-lightGray bg-opacity-[30%] rounded-lg w-[22rem] hover:shadow-primary hover:shadow-lg transition-all h-[30rem]'>
                <img src={member.img} alt="umer_img" className='w-full h-[22rem] rounded-tr-lg rounded-tl-lg' />
                <p className='px-2 bg-lightGray bg-transparent text-sm mt-4 text-primary uppercase tracking-widest'>{member.role}</p>
                <h3 className='px-2 bg-lightGray bg-transparent text-3xl font-bold'>{member.name}</h3>
                <p className='px-2 pb-4 rounded-bl-lg rounded-br-lg bg-lightGray bg-transparent font-thin'>{member.university}</p>
            </div>
            <div onMouseLeave={() => setIsFlipped(!isFlipped)} className='bg__pattern bg-lightGray bg-opacity-[30%] rounded-lg w-[22rem] hover:shadow-primary hover:shadow-lg transition-all h-[30rem] p-2 py-8'>
                <p className='bg-transparent text-center'>{member.description}</p>
                <div className='flex text-4xl items-center justify-center mt-8 bg-transparent gap-4'>
                    <a className='bg-transparent' target='_blank' href={member.discord}><BsDiscord className='bg-transparent hover:text-primary transition-all' /></a>
                    <a className='bg-transparent' target='_blank' href={member.linkedin}><AiFillLinkedin className='bg-transparent hover:text-primary transition-all' /></a>
                    <a className='bg-transparent' target='_blank' href={member.github}><BsGithub className='bg-transparent hover:text-primary transition-all' /></a>
                </div>
            </div>
        </ReactCardFlip>
    )
}

export default MemberCard