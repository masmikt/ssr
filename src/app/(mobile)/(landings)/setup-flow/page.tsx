import { CookiesBanner } from '@/app/(common)/components/cookiesBanner';
import { LightFacebookPixel } from '@/app/(common)/components/lightFacebookPixel';
import SetupFlowContent from '@/app/(mobile)/(landings)/setup-flow/components/contentWrapper/contentWrapper';


export default async function SetupFlow() {
    return (
        <>
            {/*<LightFacebookPixel />*/}
            {/* @ts-expect-error Server Component */}
            <SetupFlowContent />
            <CookiesBanner />
        </>
    );
}