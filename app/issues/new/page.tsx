"use client"

import { Button, TextArea, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form'
import Schema from "../../api/zod"
import { z } from "zod"
import axios from 'axios';
import { zodResolver } from "@hookform/resolvers/zod"




const NewIssuePage = () => {

    type IssueFormData = {
        title: String,
        description: String
    }

    // type IssueFormData = z.infer<typeof Schema.issueSchema>

    const {
        register,
        handleSubmit,
        formState: { errors }

    } = useForm<IssueFormData>();

    const router = useRouter();

    const onSubmit = handleSubmit(async (data) => {
        // console.log(data);
        try {
            const createTicket = await axios.post('/api/issues',
                {
                    title: data.title,
                    description: data.description
                })

            router.push('/issues');
        } catch (error: any) {
            // console.log(error.messages);
            // console.log(error?.response?.data?.title?._errors[0])
            // console.log(error?.response?.data?.description?._errors[0])
            setTitleError(error?.response?.data?.title?._errors[0]);
            setDescriptionError(error?.response?.data?.description?._errors[0]);

        }



    }
    )

    const [titleError, setTitleError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");




    return (
        <div>
            {/* <div>{error ? error.}</div> */}
            <form onSubmit={onSubmit} className=' flex p-5  bg-gray-100 rounded-md h-screen justify-center '>
                <div className='flex flex-col  justify-center '>
                    <label className='text-3xl pb-4 font-bold'>Create New Ticket</label>
                    <div className='space-y-5 h-max w-80 mx-auto '>

                        <div >
                            {titleError ? <label className='text-red-600 text-sm'>{titleError}</label> : ""}
                            <input  {...register('title')} className='text-left w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500' type="text" placeholder='Title' />
                        </div>
                        <div>
                            {descriptionError ? <label className=' text-red-600 text-sm'>{descriptionError}</label> : ""}
                            <input {...register('description')} className=" text-left w-full h-24 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" placeholder='Description' ></input>
                        </div>
                        <button className='w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>New Ticket</button>
                    </div>
                </div>
            </form>
        </div>


    )
}

export default NewIssuePage