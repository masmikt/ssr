import css from './layout.module.scss';
import { LayoutContainer } from '@/app/(common)/components/layoutContainer';
import { ContentWrapper } from '@/app/(common)/components/contentWrapper';
import { MobileHeader } from '@/app/(mobile)/components/mobileHeader';
import { FixedHeaderLayout } from '@/app/(common)/contexts';

import dynamic from 'next/dynamic';
const FixedHeader = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/fixedHeader/fixedHeader'));
const CookiesBanner = dynamic(() => import('@/app/(common)/components/cookiesBanner/cookiesBanner'));

export default function SetupFlowLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
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
    );
}