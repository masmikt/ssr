
import css from './location.module.scss';
import clsx from 'clsx';
import { PersonalizedQuestionsPages } from '@/app/(mobile)/(landings)/personalized-questions/pageList';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';
import { useSetupFlow } from '@/app/(mobile)/(landings)/personalized-questions/contexts';

const CustomLocationTitle = () => {
    const {
        getSurveyAnswerForPage,
    } = useSetupFlow();
    const pageAnswers = getSurveyAnswerForPage ? getSurveyAnswerForPage(PersonalizedQuestionsPages.PhoneTracking) : null;

    return (
        <Typography
            className={css['survey__title']}
            variant={TypographyVariants.h4}
        >
            {`Have you noticed that your ${pageAnswers?.[0].label.toLowerCase()} always seems to `}
            <span className={clsx(css['survey__title--highlighted'])}>
                know where you are
            </span>
            ?
        </Typography>
    )
}

CustomLocationTitle.displayName = 'CustomLocationTitle';
export default CustomLocationTitle;