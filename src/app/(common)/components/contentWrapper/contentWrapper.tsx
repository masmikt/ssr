import { clsx } from 'clsx';
import css from './contentWrapper.module.scss';
import { ReactNode } from 'react';

interface IContentWrapper {
    children: ReactNode;
    className?: string;
}

const ContentWrapper = ({ children, className = '' }: IContentWrapper) => {
    return (
        <div className={clsx(css['content-wrapper'], className)}>
            {children}
        </div>
    );
};

ContentWrapper.displayName = 'ContentWrapper';
export default ContentWrapper;