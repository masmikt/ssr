import { TrackingProvider } from '@/app/(common)/shared/services';
import { TrackingParams } from '@/app/(common)/shared/constants';
import { IPageParams } from '@/app/(common)/shared/types/nextParams';

const LightFacebookPixel = ({ searchParams }: IPageParams) => {
    const trackingProvider = new TrackingProvider(searchParams);
    const fbPixelId = trackingProvider.getParam(TrackingParams.FbPixelId) || process.env.NEXT_PUBLIC_DEFAULT_FB_PIXEL_ID;
    return (
        <img
            src={`https://www.facebook.com/tr?id=${fbPixelId}&ev=PageView`}
            height={1}
            width={1}
            style={{ display: 'none' }}
        />
    );
};

LightFacebookPixel.displayName = 'LightFacebookPixel';
export default LightFacebookPixel;
