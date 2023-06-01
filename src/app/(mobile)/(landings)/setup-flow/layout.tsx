import { ContentWrapper } from '@/app/(common)/components/contentWrapper';
import css from './layout.module.scss';
import { MobileHeader } from '@/app/(mobile)/components/mobileHeader';
import { LayoutContainer } from '@/app/(common)/components/layoutContainer';

export default function SetupFlowLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <LayoutContainer>
            <ContentWrapper>
                <MobileHeader className={css['layout__header']} />
                {children}
            </ContentWrapper>
        </LayoutContainer>
    );
}