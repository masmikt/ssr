import clsx from 'clsx';
import css from './surveyContent.module.scss';
import { ReactNode } from 'react';

export interface ISurveyContent {
    children: ReactNode;
}

const SurveyContent = ({ children }: ISurveyContent) => {
    return (
        <div className={clsx(css['survey__content'])}>
            {children}
        </div>
    );
};

SurveyContent.displayName = 'SurveyContent';
export default SurveyContent;
