import {
    Currencies,
    InfrastructureSources,
    XBNSParams,
} from '@/app/(common)/shared/constants';

//@todo add app env variable
export const enum CheckoutParams {
    Trt = 'x-trt',
    ProductId = 'x-product-id',
    Fbp = 'x-fbp',
    Fbc = 'x-fbc',
    GaCid = 'x-ga-cid',
    PackageName = 'x-package-name',
    Bns = 'x-bns',
    Sid = 'x-sid',
    Prepay = 'x-prepay',
    Language = 'language',
    Currency = 'currency',
    CheckoutSource = 'x-checkout-source',
    FbSegmentId = 'x-fb-segment-id',
    Ua = 'x-ua',
    Iteration = 'x-iteration',
    Cbt = 'x-cbt',
    Env = 'x-env',
    TypeDevice = 'x-type-device',
    Fbclid = 'x-fbclid',
    Purl = 'x-purl',
    SegmentKey = 'x-segment-key',
    Arm = 'x-arm',
    UtmCampaign = 'x-utm-campaign',
    UtmMedium = 'x-utm-medium',
    UtmSource = 'x-utm-source',
    UtmTerm = 'x-utm-term',
    UtmContent = 'x-utm-content',
    UtmCampaignId = 'x-utm-campaign-id',
    UtmCampaignAdsetId = 'x-utm-campaign-adset-id',
    UtmCampaignAdId = 'x-utm-campaign-ad-id',
    GSegmentId = 'x-g-segment-id',
    ObSegmentId = 'x-ob-segment-id',
    ObClickId = 'x-ob-click-id',
    Gclid = 'x-gclid',
    Gbraid = 'x-gbraid',
    Wbraid = 'x-wbraid',
    ConversionActionId = 'x-conversion-action-id',
}

export interface ICheckoutParams {
    [CheckoutParams.Prepay]: string | null;
    [CheckoutParams.Language]: string;
    [CheckoutParams.Currency]: Currencies;
    [CheckoutParams.Trt]: string;
    [CheckoutParams.ProductId]: number;
    [CheckoutParams.Fbp]: string | null;
    [CheckoutParams.Fbc]: string | null;
    [CheckoutParams.GaCid]: string | null;
    [CheckoutParams.PackageName]: string | null;
    [CheckoutParams.Bns]: XBNSParams | string | null;
    [CheckoutParams.Sid]: string | null;
    [CheckoutParams.CheckoutSource]: InfrastructureSources;
    [CheckoutParams.FbSegmentId]: string | null;
    [CheckoutParams.Ua]: string | null;
    [CheckoutParams.Iteration]: string | null;
    [CheckoutParams.Cbt]: string | null;
    [CheckoutParams.Env]: '';
    [CheckoutParams.TypeDevice]: string;
    [CheckoutParams.Fbclid]: string | null;
    [CheckoutParams.Purl]: string | null;
    [CheckoutParams.SegmentKey]: string | null;
    [CheckoutParams.Arm]: string | null;
    [CheckoutParams.UtmCampaign]: string | null;
    [CheckoutParams.UtmMedium]: string | null;
    [CheckoutParams.UtmSource]: string | null;
    [CheckoutParams.UtmTerm]: string | null;
    [CheckoutParams.UtmContent]: string | null;
    [CheckoutParams.UtmCampaignId]: string | null;
    [CheckoutParams.UtmCampaignAdsetId]: string | null;
    [CheckoutParams.UtmCampaignAdId]: string | null;
    [CheckoutParams.GSegmentId]: string | null;
    [CheckoutParams.ObSegmentId]: string | null;
    [CheckoutParams.ObClickId]: string | null;
    [CheckoutParams.Gclid]: string | null;
    [CheckoutParams.Gbraid]: string | null;
    [CheckoutParams.Wbraid]: string | null;
    [CheckoutParams.ConversionActionId]: string | null;
}
