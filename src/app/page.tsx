import css from './layout.module.scss';
import clsx from 'clsx';
import { LayoutContainer } from '@/app/(common)/components/layoutContainer';
import { ContentWrapper } from '@/app/(common)/components/contentWrapper';
import { Typography, TypographyComponents, TypographyVariants } from '@/app/(common)/components/typography';

export default function Home() {
    return (
        <LayoutContainer>
            <ContentWrapper>
            </ContentWrapper>
            <div className={css['layout__content']}>
                <div className={css['layout__content']}>
                    <main>
                        <>Home page</>
                        <Typography
                            variant={TypographyVariants.h2}
                            component={TypographyComponents.div}
                            className={css['intro__title']}>
                            Stop your
                            <span className={css['intro__title--highlighted']}>{` phone from being spied on.`}</span>
                        </Typography>
                        <Typography
                            variant={TypographyVariants.p2}
                            component={TypographyComponents.p}
                            className={clsx(css['intro__text'], 'mt-xs')}>
                            Try Clario, a smart anti-spy app that effectively protects your privacy.
                        </Typography>
                    </main>
                </div>
            </div>
        </LayoutContainer>
    );
}
