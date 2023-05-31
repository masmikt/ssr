"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import css from './commentsList.module.scss';
import { CommentsConfig } from './config';
import Image from 'next/image'
import clsx from 'clsx';
import { Autoplay, Navigation, Pagination } from 'swiper';
import ArrowIcon from 'public/images/common/arrow-icon.svg';
import { useCallback } from 'react';
import { SetupFlowEvents } from '../../../constants';
import { useSendEvent } from '@/app/(common)/shared/hooks';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';
import { ButtonWrapper } from '@/app/(common)/components/button';

enum NavigationDirections {
    Prev = 'prev',
    Next = 'next'
}

const CommentsList = () => {
    const { sendEvent } = useSendEvent();

    const handleSwipe = useCallback(() => {
        sendEvent(SetupFlowEvents.CommentsScreenSwipe);
    }, []);

    const sendNavigationEvent = (direction: NavigationDirections) => {
        sendEvent(SetupFlowEvents.CommentsArrowClick, { direction });
    }

    const handleNavigationNextClick = useCallback(() => {
        sendNavigationEvent(NavigationDirections.Next)
    }, []);

    const handleNavigationPrevClick = useCallback(() => {
        sendNavigationEvent(NavigationDirections.Prev)
    }, []);

    return (
        <Swiper
            spaceBetween={15}
            slidesPerView={1.2}
            initialSlide={1}
            centeredSlides={true}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            grabCursor={true}
            onTouchEnd={handleSwipe}
            onNavigationPrev={handleNavigationPrevClick}
            onNavigationNext={handleNavigationNextClick}
            navigation={{
                prevEl: '.prev',
                nextEl: '.next',
            }}
            className={css['comments-list']}
        >
            <ButtonWrapper className={css["comments-controls__button-wrapper"]}>
                <div className="prev">
                    <div className={clsx(css["comments-controls__button"])}>
                        <Image src={ArrowIcon} className={clsx(css['comments-controls__arrow'], css['prev'])}
                               alt="prev" />
                    </div>
                </div>
                <div className="next">
                    <div className={clsx(css["comments-controls__button"])}>
                        <Image src={ArrowIcon} className={clsx(css['comments-controls__arrow'], css['next'])}
                               alt="next" />
                    </div>
                </div>
            </ButtonWrapper>
            {[...CommentsConfig, ...CommentsConfig].map((commentConfig, index) => (
                <SwiperSlide
                    key={`${commentConfig.resource}__${index}`}
                    className={clsx(
                        css["comments-list__item"],
                        css['comment'],
                        css[`comment--${commentConfig.resource}`])
                    }
                >
                    <Image className={css['comment__image']} src={commentConfig.img} alt={commentConfig.author} />
                    <Typography variant={TypographyVariants.h5} className={css['comment__text']}>
                        {commentConfig.comment}
                    </Typography>
                    <Typography variant={TypographyVariants.p2} className={css['comment__author']}>
                        {commentConfig.author}
                    </Typography>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

CommentsList.displayName = 'CommentsList';
export default CommentsList;