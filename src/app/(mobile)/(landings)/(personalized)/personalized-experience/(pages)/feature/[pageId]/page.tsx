"use client";
import css from './page.module.scss';
import 'swiper/swiper.min.css';
import FeatureSlide
    from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/(pages)/feature/components/featureSlide/featureSlide';
import FeatureInfo
    from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/(pages)/feature/components/featureInfo/featureInfo';
import FeatureButton
    from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/(pages)/feature/components/featureButton/featureButton';


const FeatureItem = ({ data }) => {
    console.log(`!!! Data`, data);
    // const { experiencePagesList } = useExperienceContext();
    // const { pageId } = useParams<FeaturePageParams>();
    // const [config, setConfig] = useState<null | IFeaturesConfigItem>(null);
    // const { openCheckout, isCheckoutOpen } = usePPGIframeCheckoutContext();
    // const { sendEvent } = useMobileSendEvent();
    // const [isLoading, setIsLoading] = useState(false);
    //
    // useEffect(() => {
    //     if (isCheckoutOpen) {
    //         setIsLoading(false);
    //     }
    // }, [isCheckoutOpen]);
    //
    // useEffect(() => {
    //     const newConfig = FeaturesConfig[pageId as PersonalizedExperienceFeaturesPages];
    //
    //     if (!newConfig) {
    //         Sentry.setExtra('location', location);
    //         Sentry.captureException(
    //             `[Feature] Could not find feature page config with pageId ${pageId}.`
    //         );
    //         return;
    //     }
    //
    //     setConfig(newConfig);
    // }, [pageId]);
    //
    // if (!config || !pageId) {
    //     return null;
    // }
    //
    // const currIndex = experiencePagesList.indexOf(pageId);
    // const nextNavigateIndex = currIndex + 1;
    // const isRedirectToCheckout = nextNavigateIndex >= experiencePagesList.length;
    //
    // const handleNextClick = async () => {
    //     navigateNext();
    //     if (isRedirectToCheckout) {
    //         sendEvent(BuyNowEvents.BuyNowButtonClick);
    //         return;
    //     }
    //     sendEvent(PersonalizedExperienceEvents.FeatureNextClick, {
    //         pageName: pageId,
    //         nextPage: experiencePagesList[nextNavigateIndex],
    //     });
    // };
    //
    // const navigateNext = () => {
    //     if (isRedirectToCheckout) {
    //         setIsLoading(true);
    //         openCheckout?.();
    //         return;
    //     }
    //
    //     const nextPage = experiencePagesList[nextNavigateIndex];
    //     navigate(
    //         `/${RoutesList.Land}/${LandingRoutesList.PersonalizedExperienceMobile}/${nextPage}${location.search}`
    //     );
    // };

    return (
        <div className={css['feature__content']}>
            <div className={css['feature__container']}>
                <FeatureSlide />
                <FeatureInfo />
                <FeatureButton />
            </div>
        </div>
    );
}

export default FeatureItem;
