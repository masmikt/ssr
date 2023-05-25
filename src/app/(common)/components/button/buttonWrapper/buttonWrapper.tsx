import { ReactNode } from 'react';
import css from './buttonWrapper.module.scss';
import clsx from 'clsx';

export interface IButtonWrapper {
    children: ReactNode;
    className?: string;
}
const ButtonWrapper = ({ children = null, className = '' }: IButtonWrapper) => {
    return (
        <div className={clsx(css['button-wrapper'], className)}>
            {children}
        </div>
    );
};

ButtonWrapper.displayName = 'ButtonWrapper';
export default ButtonWrapper;
