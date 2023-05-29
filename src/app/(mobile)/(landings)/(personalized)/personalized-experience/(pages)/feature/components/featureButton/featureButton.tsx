import { Button, ButtonColor, ButtonWrapper } from '@/app/(common)/components/button';
import css from './featureButton.module.scss';
import clsx from 'clsx';

const FeatureButton = () => {
    return (
        <ButtonWrapper
            className={clsx(css['feature__button-wrapper'])}
        >
            <Button
                // disabled={isLoading}
                color={ButtonColor.Primary}
                className={clsx(css['feature__button'], {
                    // [css.loading]: isLoading,
                })}
                // onClick={handleNextClick}
            >
                {/*{isLoading ? (*/}
                {/*    <img*/}
                {/*        className={css['feature__loading-img']}*/}
                {/*        src={LoadingDots}*/}
                {/*        alt="Loading"*/}
                {/*    />*/}
                {/*) : (*/}
                {/*    `${isRedirectToCheckout ? 'Get protection' : 'Next'}`*/}
                {/*)}*/}
            </Button>
        </ButtonWrapper>
    );
}

FeatureButton.displayName = 'FeatureButton';
export default FeatureButton;