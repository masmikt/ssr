import css from './page.module.scss';

export default async function PersonalizedQuestionsDashboard() {
    return (
        <div className={css['dashboard__container']}>
            <div className={css['dashboard__info-wrapper']}>
                <div className={css['dashboard__progress-wrapper']}>
                    {/*<ProgressBar progress={8} />*/}
                </div>
                {/*<Typography*/}
                {/*    variant={TypographyVariants.h4} component={TypographyComponents.div}*/}
                {/*    className={css['dashboard__title']}>*/}
                {/*    <span className={css['dashboard__title-text']}>What do you want to protect</span>*/}
                {/*    <span className={css['dashboard__title--highlighted']}>most?</span>*/}
                {/*</Typography>*/}
                {/*<Typography variant={TypographyVariants.p2} className={css['dashboard__subtitle']}>*/}
                {/*    Pick as many options as you want.*/}
                {/*</Typography>*/}
                {/*<FadeIn className={css['dashboard__list']}>*/}
                {/*    {TopicsListConfig.map(({ key, label, img }) => (*/}
                {/*        <li*/}
                {/*            className={classNames(css['dashboard__item'], {*/}
                {/*                [css.active]: activeTopics[key],*/}
                {/*            })}*/}
                {/*            key={label}*/}
                {/*            onClick={() => handleTopicClick(key)}>*/}
                {/*            <SVG className={css['dashboard__img']} src={img} />*/}
                {/*            <Typography className={css['dashboard__label']} variant={TypographyVariants.p2}>*/}
                {/*                {label}*/}
                {/*            </Typography>*/}
                {/*        </li>))*/}
                {/*    }*/}
                {/*</FadeIn>*/}
            </div>
        </div>
    );
}
