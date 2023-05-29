import css from '@/app/(mobile)/(landings)/personalized-questions/page.module.scss';
import { TopicsListConfig } from '@/app/(mobile)/(landings)/personalized-questions/config';
import clsx from 'clsx';
import Image from 'next/image';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';
import { useDashboard } from '@/app/(mobile)/(landings)/personalized-questions/hooks/useDashboard';
import { SetupFlowContextProvider } from '@/app/(mobile)/(landings)/personalized-questions/contexts';
import TrustedBy from '../../../setup-flow/components/trustedBy/trustedBy';

const DashboardCategories = () => {
    // const { activeTopics, handleTopicClick } = useDashboard();
    return (
        <SetupFlowContextProvider>
            <div className={css['dashboard__list']}>
                {TopicsListConfig.map(({ key, label, img }) => (
                    <li
                        className={clsx(css['dashboard__item'], {
                            // [css.active]: activeTopics[key],
                        })}
                        key={label}
                        // onClick={() => handleTopicClick(key)}
                    >
                        <Image className={css['dashboard__img']} src={img} alt={label} width={24} height={24} />
                        <Typography className={css['dashboard__label']} variant={TypographyVariants.p2}>
                            {label}
                        </Typography>
                    </li>))
                }
            </div>
        </SetupFlowContextProvider>
    );
}

DashboardCategories.displayName = 'DashboardCategories';
export default DashboardCategories;