import { ReactNode } from 'react';
import clsx from 'clsx';
import css from './surveyFooter.module.scss';

export interface ISurveyFooter {
    children: ReactNode;
    className?: string;
}

const SurveyFooter = ({ children, className = '' }: ISurveyFooter) => {
    return (
        <div className={clsx(css['survey__footer'], className)}>
            {children}
        </div>
    );
};

SurveyFooter.displayName = 'SurveyFooter';
export default SurveyFooter;
