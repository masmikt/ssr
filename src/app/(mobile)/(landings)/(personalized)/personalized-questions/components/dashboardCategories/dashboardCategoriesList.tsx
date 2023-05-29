import { TopicsListConfig } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/config';
import clsx from 'clsx';
import css from './dashboardCategoriesList.module.scss';
import Image from 'next/image';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';
import {
    useDashboardCategories,
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/contexts/dashboardCategories/useDashboardContext';
import { PersonalizedQuestionsTopics } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/pageList';

const DashboardCategoriesList = () => {
    const { activeTopics, handleTopicClick } = useDashboardCategories();
    const handleCategoryClick = (key: PersonalizedQuestionsTopics) => {
        handleTopicClick(key);
    }
    return (
        <div className={css['dashboard__list']}>
            {TopicsListConfig.map(({ key, label, img }) => (
                <li
                    className={clsx(css['dashboard__item'], {
                        [css.active]: activeTopics[key],
                    })}
                    key={label}
                    onClick={() => handleCategoryClick(key)}
                >
                    <Image className={css['dashboard__img']} src={img} alt={label} width={24} height={24} />
                    <Typography className={css['dashboard__label']} variant={TypographyVariants.p2}>
                        {label}
                    </Typography>
                </li>))
            }
        </div>
    );
}

DashboardCategoriesList.displayName = 'DashboardCategoriesList';
export default DashboardCategoriesList;