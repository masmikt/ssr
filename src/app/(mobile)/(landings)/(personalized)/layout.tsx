import css from './layout.module.scss';
import clsx from 'clsx';
import { LayoutContainer } from '@/app/(common)/components/layoutContainer';
import { ContentWrapper } from '@/app/(common)/components/contentWrapper';
import { MobileHeader } from '@/app/(mobile)/components/mobileHeader';

export default function PersonalizedLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <LayoutContainer>
            <ContentWrapper className={clsx(css['personalized-layout__header-wrapper'])}>
                <MobileHeader className={css['personalized-layout__header']} />
            </ContentWrapper>
            <div className={clsx(css['personalized-layout__wrapper'])}>
                <ContentWrapper className={clsx(css['personalized-layout__content'])}>
                    {children}
                </ContentWrapper>
            </div>
        </LayoutContainer>
    );
}