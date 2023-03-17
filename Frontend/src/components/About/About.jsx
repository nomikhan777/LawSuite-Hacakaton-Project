import React from 'react'
import aboutImg from '../../assets/about.png'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <section className='flex flex-col h-[calc(100vh-7rem)] items-center'>
            <h2 className='text-3xl mt-4'>About</h2>
            <p className='mb-4 font-thin'>"What and how our app do"</p>

            <div className='flex flex-wrap'>
                <div className='flex flex-col items-center px-6 justify-center text-center leading-8 text-lg font-light' >
                    <p className='mt-8'>Welcome to our website, where we use artificial intelligence to help you navigate the complexities of the constitution. Our goal is to make it easier for you to understand your rights and responsibilities as a citizen, and to empower you to participate in the democratic process.

                        Our AI-powered platform provides you with a range of tools and resources that can help you better understand the constitution. Whether you are a student, a lawyer, or just a concerned citizen, our platform has something for everyone.</p>
                    <div className='mt-8 flex gap-4'>
                        <Link to='/' className='bg-primary text-secondary font-medium px-4 rounded-full py-2 hover:tracking-wider transition-all'>Get Started</Link>
                        <Link to='/video' className='px-4 py-2 border-primary border text-primary rounded-full hover:bg-primary hover:bg-opacity-[10%] transition-all'>Learn More</Link>
                    </div>
                </div>
                {/* <img className='' src={aboutImg} alt="about_image" /> */}
            </div>
        </section>
    )
}

export default About