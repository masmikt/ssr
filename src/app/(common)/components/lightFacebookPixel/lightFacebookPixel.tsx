"use client";
import { useTracking } from '@/app/(common)/shared/hooks';


const LightFacebookPixel = () => {
    const { getFacebookPixelId } = useTracking();

    return (
        <img
            src={`https://www.facebook.com/tr?id=${getFacebookPixelId()}&ev=PageView`}
            height={1}
            width={1}
            style={{ display: 'none' }}
        />
    );
};

LightFacebookPixel.displayName = 'LightFacebookPixel';
export default LightFacebookPixel;
