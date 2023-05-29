"use client";
import { IntroSection } from '@/app/(mobile)/(landings)/setup-flow/components/intro';

import dynamic from 'next/dynamic'

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
    );
}