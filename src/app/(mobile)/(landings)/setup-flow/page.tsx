import { AnalyticsBrowser } from '@segment/analytics-next';
import { IntroSection } from '@/app/(mobile)/(landings)/setup-flow/components/intro';

export default function SetupFlow() {
    // const router = useRouter();
    //
    // useEffect(() => {
    //     router.push({
    //         pathname: '/[iteration]',
    //         query: { iteration: 'it-3-1' },
    //     });
    // }, []);

    return (
        <main>
           <IntroSection />
        </main>
    );
}