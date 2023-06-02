import { LayoutContainer } from '@/app/(common)/components/layoutContainer';
import { ContentWrapper } from '@/app/(common)/components/contentWrapper';
import { LightFacebookPixel } from '@/app/(common)/components/lightFacebookPixel';
import { MobileHeader } from '@/app/(mobile)/components/mobileHeader';
import css from './page.module.scss';
import { IntroSection } from '@/app/(mobile)/(landings)/speed/components/intro';
import { IPageParams } from '@/app/(common)/shared/types/nextParams';



export default async function Speed({ searchParams }: IPageParams) {
    return (
        <LayoutContainer>
            <ContentWrapper>
                <LightFacebookPixel searchParams={searchParams} />
                <MobileHeader />
                <div className={css['layout__content']}>
                    <IntroSection />
                </div>
            </ContentWrapper>
        </LayoutContainer>

    );
}