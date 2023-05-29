"use client";
import { useEffect, useState } from 'react';
import css from './page.module.scss';
import { useParams } from 'next/navigation';
import { IPageContentConfig, ISetupFlowPagesParams } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/types';
import { ConfigComponent } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/configComponent';
import {
    useSetupFlow
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/contexts/setupFlow';

const PersonalizedQuestionsSurvey = () => {
    const { getSurveyPageConfig } = useSetupFlow();
    const params = useParams();
    const { pageId } = params as ISetupFlowPagesParams;
    const [pageConfig, setPageConfig] = useState<IPageContentConfig | null>(null);

    useEffect(() => {
        handleChangePageId();
    }, []);

    const handleChangePageId = () => {
        const pageConfig = getSurveyPageConfig(pageId);


        if (!pageConfig) {
            return;
        }

        setPageConfig(pageConfig);
    }

    if (!pageConfig) {
        return null;
    }

    return (
        <div className={css['survey__wrapper']}>
            <div className={css['survey']}>
                {pageConfig.components.map((config: any) => {
                        return <ConfigComponent
                            config={config} key={`${pageConfig?.id}_${config.id}`} />
                    }
                )}
            </div>
        </div>
    );
};

PersonalizedQuestionsSurvey.displayName = 'PersonalizedQuestionsSurvey';
export default PersonalizedQuestionsSurvey;