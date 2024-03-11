import clsx from 'clsx'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLElement> {
    className?: string
    children: React.ReactNode
}

export const Section: React.FC<Props> = ({ className, children }) => {
    return (
        <div className={clsx('bg-white px-8 py-16 rounded-[28px]', className)}>{children}</div>
    )
}
