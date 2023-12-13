import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"

type Props = {};

type Inputs = {
    name: string
    email: string,
    subject: string,
    message: string
}

function ContactMe({ }: Props) {
    const { 
        register, 
        handleSubmit, 
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto: shubhambhardwaj142@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    }

    return (
        <div className="h-screen flex md:relative flex-col text-center md:text-left md:flex-row max-w-7xl mx-auto justify-evenly px-10 items-center">
            <h3 className="md:absolute md:top-24 uppercase md:tracking-[20px] tracking-[10px] text-gray-500 text-2xl flex mt-20 md:mt-0">Contact</h3>
            <div className="flex flex-col space-y-8 md:space-y-10 md:mt-20">
                <h4 className="text-lg md:text-2xl font-semibold text-center">
                    I have got just what you need. {" "}
                    <span className="decoration-[#F7Ab0A]/50 underline">Lets Talk.</span>
                </h4>
                <div className="md:space-y-5 space-y-2 flex items-baseline justify-evenly flex-col md:flex-row">
                    <div className="flex items-center md:space-x-5 justify-center space-x-2">
                        <PhoneIcon className="text-[#f7ab0a] h-4 w-4 md:h-7 md:w-7 animate-pulse" />
                        <p className="text-xs md:text-lg">9654741157</p>
                    </div>
                    <div className="flex items-center md:space-x-5 space-x-2 justify-center">
                        <EnvelopeIcon className="text-[#f7ab0a] h-4 w-4 md:h-7 md:w-7  animate-pulse" />
                        <p className="text-xs break-all whitespace-normal  md:text-lg">shubhambhardwaj142@gmail.com</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 md:w-fit w-full mx-auto">
                    <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
                        <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
                        <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
                    </div>
                    <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
                    <textarea {...register('message')} placeholder="Message" className="contactInput" />
                    <button
                        type="submit"
                        className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe
