import { Button, ButtonColor, ButtonWrapper } from '@/app/(common)/components/button';
import css from './featureButton.module.scss';
import LoadingDots from 'public/images/common/triple-dots-jump.gif';
import clsx from 'clsx';
import {
    useFeatureContext
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/(pages)/feature/contexts/feature/useFeatureContext';
import Image from 'next/image';

const FeatureButton = () => {
    const { isLoading, handleNextClick, isRedirectToCheckout } = useFeatureContext();
    return (
        <ButtonWrapper
            className={clsx(css['feature__button-wrapper'])}
        >
            <Button
                disabled={isLoading}
                color={ButtonColor.Primary}
                className={clsx(css['feature__button'], {
                    [css.loading]: isLoading,
                })}
                onClick={handleNextClick}
            >
                {isLoading ?
                    <Image
                        className={css['feature__loading-img']}
                        src={LoadingDots}
                        width={47}
                        height={47}
                        alt='Loading' />
                    : `${isRedirectToCheckout ? 'Get protection' : 'Next'}`}
            </Button>
        </ButtonWrapper>
    );
}

FeatureButton.displayName = 'FeatureButton';
export default FeatureButton;