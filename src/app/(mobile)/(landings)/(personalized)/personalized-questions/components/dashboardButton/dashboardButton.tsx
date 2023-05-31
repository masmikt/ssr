'use client';
import css from './dashboardButton.module.scss';
import { Button, ButtonColor, ButtonWrapper } from '@/app/(common)/components/button';
import clsx from 'clsx';
import {
    useDashboardCategories,
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/contexts/dashboardCategories/useDashboardContext';

const DashboardButton = () => {
    const { navigate, isButtonActive, handleNextClick } = useDashboardCategories();
    return (
        <>
            {navigate ? null : <ButtonWrapper
                className={clsx(css['dashboard__button-wrapper'], { [css.active]: isButtonActive })}>
                <Button
                    color={ButtonColor.Primary}
                    className={clsx(css['dashboard__button'], { [css.active]: isButtonActive, })}
                    onClick={handleNextClick}>
                    Next
                </Button>
            </ButtonWrapper>}
        </>
    );
}

DashboardButton.displayName = 'DashboardButton';
export default DashboardButton;