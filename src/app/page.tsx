import css from './layout.module.scss';
import { LayoutContainer } from '@/app/(common)/components/layoutContainer';
import { IntroSection } from '@/app/(mobile)/(landings)/setup-flow/components/intro';

export default function Home() {
    return (
        <LayoutContainer>
            <div className={css['layout__content']}>
                <div className={css['layout__content']}>
                    <main>
                        <>Home page</>
                        <IntroSection />
                    </main>
                </div>
            </div>
        </LayoutContainer>
    );
}
