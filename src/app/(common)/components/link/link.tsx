import { clsx } from 'clsx';
import css from './link.module.scss';
import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

interface ILink extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement> {
    src: string;
    children: ReactNode;
    className?: string;
}

const Link = ({ children, src, className, ...rest }: ILink) => {
    return (
        <a href={src} className={clsx(css['link'], className)} target="_blank" {...rest}>
            {children}
        </a>
    );
};

Link.displayName = 'Link';
export default Link;
