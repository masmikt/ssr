import css from './layout.module.scss';
import { LayoutContainer } from '@/app/(common)/components/layoutContainer';
import { IntroSection } from '@/app/(mobile)/(landings)/setup-flow/components/intro';
import { AppProviders, FixedHeaderLayout } from '@/app/(common)/contexts';
import { ContentWrapper } from '@/app/(common)/components/contentWrapper';
import { MobileHeader } from '@/app/(mobile)/components/mobileHeader';
import { CookiesBanner } from '@/app/(common)/components/cookiesBanner';
import { FixedHeader } from '@/app/(mobile)/(landings)/setup-flow/components/fixedHeader';

export default function Home() {
    return (
        <AppProviders>
            <FixedHeaderLayout>
                <LayoutContainer>
                    <ContentWrapper>
                        <MobileHeader className={css['layout__header']} />
                    </ContentWrapper>
                    <FixedHeader />
                    <div className={css['layout__content']}>
                        <div className={css['layout__content']}>
                            <main>
                                <IntroSection />
                            </main>
                        </div>
                    </div>
                    <CookiesBanner />
                </LayoutContainer>
            </FixedHeaderLayout>
        </AppProviders>
    );
}
