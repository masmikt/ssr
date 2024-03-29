import { LayoutContainer } from '@/app/(common)/components/layoutContainer';
import { ContentWrapper } from '@/app/(common)/components/contentWrapper';
import { LightFacebookPixel } from '@/app/(common)/components/lightFacebookPixel';
import { MobileHeader } from '@/app/(mobile)/components/mobileHeader';
import css from './page.module.scss';
import { IntroSection } from '@/app/(mobile)/(landings)/speed/components/intro';
import { INextPageParams } from '@/app/(common)/shared/types/common';


export default async function Speed({ searchParams }: INextPageParams) {
    return (
        <LayoutContainer>
            <ContentWrapper>
                <LightFacebookPixel searchParams={searchParams} />
                <MobileHeader />
            </ContentWrapper>
            <div className={css['layout__content']}>
                <IntroSection />
            </div>
        </LayoutContainer>

    );
}