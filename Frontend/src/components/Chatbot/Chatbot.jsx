import React, { useRef, useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { GoLaw } from 'react-icons/go'
import { FaTrafficLight } from 'react-icons/fa'
import { GiHumanPyramid } from 'react-icons/gi'
import logo from '../../assets/logo.png'
import axios from 'axios'
import { FaUser } from 'react-icons/fa'
import { FaRobot } from 'react-icons/fa'
import Typewriter from "typewriter-effect";

const Chatbot = () => {
    const [message, setMessage] = useState('')
    const ref = useRef(null)
    const [isLoading, setIsLoading] = useState(false)
    const [messages, setMessages] = useState([])
    const inputRef = useRef(null)

    const sendMessage = async (e) => {
        e.preventDefault()
        if (isLoading) {
            return
        }
        if (!message || !message.replace(/\s/g, '').length) {
            return
        }
        try {
            setIsLoading(true)
            const formData = new FormData()
            formData.append('q', message)
            const res = await axios.post("https://lawsuite.onrender.com", formData)
            const new_messages = [...messages, { 'sender': 'user', 'message': message }]
            const data = await res.data
            await setMessages([...new_messages, { 'sender': 'api', 'message': data }])
            setMessage('')
            setIsLoading(false)
            try {
                ref.current.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                });
            } catch (error) {

            }
            inputRef.current.focus();
        } catch (error) {
            setIsLoading(false)
            setMessages([...messages, { 'sender': 'api', 'message': 'Some error occoured' }])
            inputRef.current.focus();
            console.log(error)
        }
    }
    return (
        <section className='flex flex-col h-[calc(100vh-7rem)] justify-center items-center'>
            {
                messages.length == 0 && <div>
                    <img src={logo} alt='logo' width='300' />
                    <h2 className='text-center text-3xl font-bold tracking-widest'>Law <span className='text-primary'>Suit<span className=''>e</span></span></h2>
                </div>
            }

            <div className='flex-grow flex items-center justify-center w-full'>
                {messages.length == 0 && <div className='flex gap-6 px-2'>
                    <div className='flex flex-col items-center gap-4 max-w-[17rem] text-center'>
                        <GoLaw className='text-5xl text-primary' />
                        <h3 className='font-light tracking-widest'>Penal Code</h3>
                        <p className='font-thin text-sm'>The Pakistan Penal Code (PPC) is a comprehensive set of criminal laws that defines various criminal offenses and their punishments in Pakistan.</p>
                    </div>
                    <div className='flex flex-col items-center gap-4 max-w-[17rem] text-center'>
                        <FaTrafficLight className='text-primary text-5xl' />
                        <h3 className='font-light tracking-widest'>Traffic Rules</h3>
                        <p className='font-thin text-sm'>Traffic rules are a set of regulations designed to ensure safe and efficient movement of vehicles and pedestrians on roads and highways.</p>
                    </div>
                    <div className='flex flex-col items-center gap-4 max-w-[17rem] text-center'>
                        <GiHumanPyramid className='text-primary text-5xl' />
                        <h3 className='font-light tracking-widest'>Human Rights</h3>
                        <p className='font-thin text-sm'>Human rights refer to basic rights and freedoms that are inherently entitled to every human, regardless of their race, gender, nationality and religion</p>
                    </div>
                </div>
                }
                {
                    messages.length > 0 && <div className='flex flex-col gap-4 h-[calc(100vh-10rem)] w-full overflow-y-auto custom__scrollbar px-2 mb-6'>

                        {
                            messages.map((msg, index) => {
                                return <div key={index} className={`flex items-center p-4 gap-4 rounded ${msg.sender === 'api' ? 'flex-row-reverse bg-lightGray' : ''}`}>
                                    {
                                        index == messages.length - 1 ?
                                            <h3 className={`w-full font-light bg-transparent ${msg.sender === 'user' ? 'text-right ' : 'text-left'}`}>
                                                <Typewriter
                                                    onInit={(typewriter) => {
                                                        typewriter.typeString(msg.message)
                                                            .start();
                                                    }}
                                                    options={{
                                                        delay: 20
                                                    }}
                                                />
                                            </h3> :
                                            <h3 className={`w-full font-light bg-transparent ${msg.sender === 'user' ? 'text-right ' : 'text-left'}`}>{msg.message}</h3>
                                    }
                                    {msg.sender === 'user' ? <FaUser className='text-primary text-2xl bg-transparent' /> : <FaRobot className='text-primary text-2xl bg-transparent' />}
                                </div>
                            })
                        }
                        <div ref={ref}></div>
                    </div>
                }
            </div>
            <form className='relative bottom-5 sm:w-[calc(100%-10rem)] w-[90%]' onSubmit={sendMessage}>
                <input ref={inputRef} type="text" placeholder='' className='px-4 py-3 border-white bg-lightGray outline-none rounded w-full pr-12' value={message} onChange={(e) => setMessage(e.target.value)} />
                <AiOutlineSend onClick={sendMessage} className={`${isLoading ? 'text-secondary' : 'text-primary'} absolute bg-transparent right-5 text-2xl top-[50%] translate-y-[-50%]`} />
            </form>
        </section>
    )
}

export default Chatbot