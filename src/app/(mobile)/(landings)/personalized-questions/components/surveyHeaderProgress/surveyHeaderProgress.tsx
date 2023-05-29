import css from './surveyHeaderProgress.module.scss';
import classnames from 'classnames';
import { ReactNode, useMemo } from 'react';
import { useSetupFlow } from '@/app/(mobile)/(landings)/personalized-questions/contexts';
import { ProgressBar } from '@/app/(common)/progressBar';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';
import { useParams } from 'next/navigation';

export interface ISurveyHeaderProps {
    title: {
        default: string,
        highlighted?: string;
        defaultAdd?: string;
    };
    children?: ReactNode;
    subtitle?: string;
}

const SurveyHeaderProgress = ({ title, subtitle = '', children }: ISurveyHeaderProps) => {
    const params = useParams();
    const { getSurveyPageInfo } = useSetupFlow();
    const flowInfo = useMemo(() => {
        console.log(`!!! params`, params);
        const pageId = params.pageId;
        //@todo add handle Path params
        //@ts-ignore
        return getSurveyPageInfo && pageId ? getSurveyPageInfo(pageId) : null;
    }, [params]);

    return (
        <div className={css['survey__container']}>
            <div className={css['survey__progress-wrapper']}>
                <ProgressBar className={css['survey__progress-bar']} progress={flowInfo?.flowProgress || 0} />
            </div>
            <div className={css['survey__text-wrapper']}>
                {children ? children : <Typography
                    className={css['survey__title']}
                    variant={TypographyVariants.h4}
                >
                    {title.default}
                    {<span className={classnames(css['survey__title--highlighted'])}>{title.highlighted}</span>}
                    {title.defaultAdd}
                </Typography>}
                <Typography
                    className={css['survey__subtitle']}
                    variant={TypographyVariants.p2}
                >
                    {subtitle}
                </Typography>
            </div>

        </div>

    );
};

SurveyHeaderProgress.displayName = 'SurveyHeaderProgress';
export default SurveyHeaderProgress;
