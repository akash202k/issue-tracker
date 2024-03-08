import React from 'react'
import { Button, TextArea } from '@radix-ui/themes'
import Link from 'next/link'

const Issues = () => {
    return (
        <div className='p-5'>
            <Button>
                <Link href={'/issues/new'}>New Issue</Link>
            </Button>
        </div>

    )
}

export default Issues