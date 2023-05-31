import css from './layout.module.scss';
import { FixedHeaderLayout } from '@/app/(common)/contexts';
import { LayoutContainer } from '@/app/(common)/components/layoutContainer';
import { ContentWrapper } from '@/app/(common)/components/contentWrapper';
import { MobileHeader } from '@/app/(mobile)/components/mobileHeader';
// import dynamic from 'next/dynamic';

// const FixedHeader = dynamic(() => import("@/app/(mobile)/(landings)/setup-flow/components/fixedHeader/fixedHeader"), {
//     ssr: false,
// });

export default function Home() {
    return (
        // <FixedHeaderLayout>
        <LayoutContainer>
            <ContentWrapper>
                {/*<MobileHeader className={css['layout__header']} />*/}
            </ContentWrapper>
            {/*<FixedHeader />*/}
            <div className={css['layout__content']}>
                <div className={css['layout__content']}>
                    <main>
                        <>Home page</>
                    </main>
                </div>
            </div>
        </LayoutContainer>
        // </FixedHeaderLayout>
    );
}
