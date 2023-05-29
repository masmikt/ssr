'use client';
import css from './page.module.scss';
import { ProgressBar } from '@/app/(common)/progressBar';
import { Typography, TypographyComponents, TypographyVariants } from '@/app/(common)/components/typography';
import dynamic from 'next/dynamic'

const DashboardCategories = dynamic(() => import('@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/dashboardCategories/dashboardCategories'));

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
                <DashboardCategories />
            </div>
        </div>
    );
}
