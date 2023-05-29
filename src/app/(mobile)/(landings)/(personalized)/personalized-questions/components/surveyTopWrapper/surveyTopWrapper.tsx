import { FC, ReactNode } from 'react';
import css from './surveyTopWrapper.module.scss';

interface ISurveyTopWrapperProps {
    children: ReactNode;
}

export const SurveyTopWrapper: FC<ISurveyTopWrapperProps> = ({ children }) => {
    return <div className={css['survey-top-wrapper']}>
        {children}
    </div>;
};

export default SurveyTopWrapper;