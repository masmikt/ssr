import { memo, useEffect, useState } from 'react';
import css from './page.module.scss';
import { useSetupFlow } from '@/app/(mobile)/(landings)/personalized-questions/contexts';
import { useParams } from 'next/navigation';
import { IPageContentConfig, ISetupFlowPagesParams } from '@/app/(mobile)/(landings)/personalized-questions/types';
import { ConfigComponent } from '@/app/(mobile)/(landings)/personalized-questions/components/configComponent';

const PersonalizedQuestionsSurvey = memo(() => {
    const { getSurveyPageConfig, navigateTo } = useSetupFlow();
    const params = useParams();
    const { pageId } = params as ISetupFlowPagesParams;
    const [ pageConfig, setPageConfig ] = useState<IPageContentConfig | null>(null);

    useEffect(() => {
        // Handle go back - navigate(-1) and (navigate(-2) for Safari) will change path param before navigate to previous path
        //@ts-ignore
        if(pageId === '-1' || pageId === '-2') {
            return;
        }

        handleChangePageId();
    }, [pageId]);

    const handleChangePageId = () => {
        const pageConfig = getSurveyPageConfig(pageId);

        if (!pageConfig) {
            navigateTo(null);
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
});

PersonalizedQuestionsSurvey.displayName = 'PersonalizedQuestionsSurvey';
export default PersonalizedQuestionsSurvey;