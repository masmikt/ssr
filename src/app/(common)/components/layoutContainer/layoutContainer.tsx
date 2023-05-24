import css from './layoutContainer.module.scss';
import { DetailedHTMLProps, ImgHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

interface ILayoutContainer extends DetailedHTMLProps<ImgHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

const LayoutContainer = ({ children, className, ...rest }: ILayoutContainer) => {
    return (
        <div
            className={clsx(css["layout__container"], className)}
            {...rest}>
            {children}
        </div>
    )
};

LayoutContainer.displayName = 'LayoutContainer';
export default LayoutContainer;