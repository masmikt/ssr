import css from './surveyContentWrapper.module.scss';
import { ReactNode } from 'react';

export interface ISurveyContentWrapper {
    children: ReactNode;
}

const SurveyContentWrapper = ({ children }: ISurveyContentWrapper) => {
    return (
        <section className={css['survey__content-wrapper']}>
            {children}
        </section>
    );
};

SurveyContentWrapper.displayName = 'SurveyContentWrapper';
export default SurveyContentWrapper;
