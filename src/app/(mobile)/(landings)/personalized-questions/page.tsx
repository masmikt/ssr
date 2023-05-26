'use client';
import css from './page.module.scss';
import clsx from 'clsx';
import Image from 'next/image'
import { ProgressBar } from '@/app/(common)/progressBar';
import { Typography, TypographyComponents, TypographyVariants } from '@/app/(common)/components/typography';
import { TopicsListConfig } from '@/app/(mobile)/(landings)/personalized-questions/config';

export default async function PersonalizedQuestionsDashboard() {
    return (
        <div className={css['dashboard__container']}>
            <div className={css['dashboard__info-wrapper']}>
                <div className={css['dashboard__progress-wrapper']}>
                    <ProgressBar progress={8} />
                </div>
                <Typography
                    variant={TypographyVariants.h4} component={TypographyComponents.div}
                    className={css['dashboard__title']}>
                    <span className={css['dashboard__title-text']}>What do you want to protect</span>
                    <span className={css['dashboard__title--highlighted']}>most?</span>
                </Typography>
                <Typography variant={TypographyVariants.p2} className={css['dashboard__subtitle']}>
                    Pick as many options as you want.
                </Typography>
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
            </div>
        </div>
    );
}
