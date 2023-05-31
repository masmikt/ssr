import { Suspense } from 'react';
import dynamic from 'next/dynamic'
import { Loader } from '@/app/(common)/components/loader';

import { IntroSection } from '@/app/(mobile)/(landings)/setup-flow/components/intro';
import { FixedHeaderLayout } from '@/app/(common)/contexts';
import { LayoutContainer } from '@/app/(common)/components/layoutContainer';
import { ContentWrapper } from '@/app/(common)/components/contentWrapper';
import { MobileHeader } from '@/app/(mobile)/components/mobileHeader';
import css from './layout.module.scss';
import { CookiesBanner } from '@/app/(common)/components/cookiesBanner';

const FixedHeader = dynamic(() => import("@/app/(mobile)/(landings)/setup-flow/components/fixedHeader/fixedHeader"), {
    ssr: false,
});

const Awards = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/awards/awards'));
const TrustedBy = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/trustedBy/trustedBy'));
const FeaturesInfo = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/featuresInfo/featuresInfo'));
const Support = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/support/support'));
const InstructionsList = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/instructionsList/instructionsList'));
const UserRate = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/userRate/userRate'));
const Pricing = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/pricing/pricing'));
const ProtectDevices = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/protectDevices/protectDevices'));
const Comments = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/comments/comments'));
const StopSpied = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/stopSpied/stopSpied'));
const Footer = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/footer/footer'));


export default async function SetupFlow() {
    return (
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
                            <Awards />
                            <TrustedBy />
                            <FeaturesInfo />
                            <Support />
                            <InstructionsList />
                            <UserRate />
                            <Pricing />
                            <ProtectDevices />
                            <Comments />
                            <StopSpied />
                            <Footer />
                        </main>
                    </div>
                </div>
                <CookiesBanner />
            </LayoutContainer>
        </FixedHeaderLayout>
    );
}