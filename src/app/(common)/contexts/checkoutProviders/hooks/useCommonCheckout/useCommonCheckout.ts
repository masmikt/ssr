import {
    Currencies, DefaultTrt, InfrastructureSources, InterstellarProductId,
    Languages, TrackingParams, XBNSParams,
} from '@/app/(common)/shared/constants';
import { objectOmitNull } from '@/app/(common)/shared/helpers';
import { useTracking } from '@/app/(common)/shared/hooks';
import { CheckoutParams, ICheckoutParams } from './types';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { IBuyNowConfig, useLicenseConfig } from '@/app/(common)/shared/hooks';

declare const APP_ENV: string;

export const useCommonCheckout = (buyNowConfig: IBuyNowConfig) => {
    const router = useRouter();
    console.log(`!!!! router`, router);

    const {
        getTrackingParam,
        getMarketing,
        getSid,
        getUserAgent,
        getTypeDevice,
        getIteration,
        getGaCid,
        getFbc,
        getFbp,
    } = useTracking();
    const iteration = getIteration();
    const { getLicenseData } = useLicenseConfig(buyNowConfig);
    const checkoutSource =
        (getTrackingParam(TrackingParams.CheckoutSource) as InfrastructureSources) ||
        'betelgeuse';
    const xPrepay = useMemo(() => {
        let prepay = 'setup-flow';
        return `${prepay} ${iteration}`;
    }, [location, iteration]);

    const getCommonCheckoutParams = async (purl: string): Promise<ICheckoutParams> => {
        const licenseData = getLicenseData(purl);
        const marketing = getMarketing();
        return objectOmitNull({
            [CheckoutParams.Prepay]: xPrepay,
            [CheckoutParams.Language]: buyNowConfig.language || Languages.En,
            [CheckoutParams.Currency]: Currencies.USD,
            [CheckoutParams.Trt]: DefaultTrt,
            [CheckoutParams.ProductId]: InterstellarProductId,
            [CheckoutParams.Fbp]: getFbp(),
            [CheckoutParams.Fbc]: getFbc(),
            [CheckoutParams.GaCid]: getGaCid(),
            [CheckoutParams.PackageName]: licenseData?.name || null,
            [CheckoutParams.Bns]: getTrackingParam<XBNSParams>(TrackingParams.XBNS),
            [CheckoutParams.Sid]: getSid(),
            [CheckoutParams.CheckoutSource]: checkoutSource,
            [CheckoutParams.Ua]: getUserAgent(),
            [CheckoutParams.FbSegmentId]: getTrackingParam(TrackingParams.FbSegmentId),
            [CheckoutParams.Env]: APP_ENV,
            [CheckoutParams.TypeDevice]: getTypeDevice(),
            [CheckoutParams.Fbclid]: getTrackingParam(TrackingParams.Fbclid),
            [CheckoutParams.Iteration]: iteration,
            [CheckoutParams.Cbt]: getTrackingParam(TrackingParams.Cbt),
            [CheckoutParams.SegmentKey]: getTrackingParam(TrackingParams.SegmentKey),
            [CheckoutParams.Purl]: purl,
            [CheckoutParams.Arm]: marketing.arm,
            [CheckoutParams.UtmCampaign]: marketing.utm.campaign,
            [CheckoutParams.UtmMedium]: marketing.utm.medium,
            [CheckoutParams.UtmSource]: marketing.utm.source,
            [CheckoutParams.UtmTerm]: marketing.utm.term,
            [CheckoutParams.UtmContent]: marketing.utm.content,
            [CheckoutParams.UtmCampaignId]: marketing.utm.campaignId,
            [CheckoutParams.UtmCampaignAdsetId]: marketing.utm.campaignAdsetId,
            [CheckoutParams.UtmCampaignAdId]: marketing.utm.campaignAdId,
            [CheckoutParams.GSegmentId]: getTrackingParam(TrackingParams.GSegmentId),
            [CheckoutParams.ObSegmentId]: getTrackingParam(TrackingParams.ObSegmentId),
            [CheckoutParams.ObClickId]: getTrackingParam(TrackingParams.ObClickId),
            [CheckoutParams.Gclid]: getTrackingParam(TrackingParams.Gclid),
            [CheckoutParams.Gbraid]: getTrackingParam(TrackingParams.Gbraid),
            [CheckoutParams.Wbraid]: getTrackingParam(TrackingParams.Wbraid),
            [CheckoutParams.ConversionActionId]: getTrackingParam(
                TrackingParams.ConversionActionId
            ),
        }) as ICheckoutParams;
    };

    return {
        getCommonCheckoutParams,
    };
};
