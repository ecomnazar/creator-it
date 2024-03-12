import clsx from 'clsx';
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
    className?: string;
    children?: React.ReactNode;
    link: string;
}

export const Button: React.FC<Props> = ({ className, children, link, ...props }) => {
    return (
        <a href={link} target='_blank' className={clsx('bg-dark px-8 py-4 block w-fit rounded-3xl cursor-pointer', className)} {...props}>{children}</a>
    )
}