import React from 'react'

const Video = () => {
    return (
        <section className='flex flex-col h-[calc(100vh-7rem)] items-center'>
            <h2 className='text-3xl mt-4'>Presentation</h2>
            <p className='mb-4 font-thin'>"Video presentation explaining the tools and methods to use the app"</p>
            <iframe width="1080" height="580" src="https://www.youtube.com/embed/sckKfF0sXic" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </section>
    )
}

export default Video