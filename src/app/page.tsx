import { FixedHeaderLayout } from '@/app/(common)/contexts';
import { LayoutContainer } from '@/app/(common)/components/layoutContainer';

export default function Home() {
    return (
        <FixedHeaderLayout>
            <LayoutContainer>
                <>Home page</>
            </LayoutContainer>
        </FixedHeaderLayout>);
}
