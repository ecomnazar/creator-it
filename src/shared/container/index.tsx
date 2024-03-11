import clsx from 'clsx';
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode
}

export const Container: React.FC<Props> = ({ className, children, ...props }) => {
    return (
        <div className={clsx('max-w-[1400px] mx-auto px-4', className)} {...props}>{children}</div>
    )
}
