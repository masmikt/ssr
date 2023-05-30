import css from './layout.module.scss';
import { Suspense } from 'react';
import { LayoutContainer } from '@/app/(common)/components/layoutContainer';
import { ContentWrapper } from '@/app/(common)/components/contentWrapper';
import { MobileHeader } from '@/app/(mobile)/components/mobileHeader';
import { FixedHeaderLayout } from '@/app/(common)/contexts';
import { CookiesBanner } from '@/app/(common)/components/cookiesBanner';
import { FixedHeader } from '@/app/(mobile)/(landings)/setup-flow/components/fixedHeader';
import { Loader } from '@/app/(common)/components/loader';

export default function SetupFlowLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <Suspense fallback={<Loader />}>
            <FixedHeaderLayout>
                <LayoutContainer>
                    <ContentWrapper>
                        <MobileHeader className={css['layout__header']} />
                    </ContentWrapper>
                    <FixedHeader />
                    <div className={css['layout__content']}>
                        <div className={css['layout__content']}>
                            {children}
                        </div>
                    </div>
                    <CookiesBanner />
                </LayoutContainer>
            </FixedHeaderLayout>
        </Suspense>
    );
}