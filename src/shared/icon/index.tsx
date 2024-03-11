import React from 'react'

interface Props {
    type: 'link'
}

export const Icon: React.FC<Props> = ({ type }) => {
    return (
        <>
            {type === 'link' && <img className='w-5' src='/icons/link.svg' />}
        </>
    )
}
