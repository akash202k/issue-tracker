"use client"

import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";


const NewIssuePage = () => {
    return (
        <div className='max-w-xl space-y-4'>
            <TextField.Root>
                <TextField.Input placeholder='Title' />

            </TextField.Root>
            <SimpleMDE placeholder="Description" />
            <Button >New Ticket</Button>

        </div>
    )
}

export default NewIssuePage