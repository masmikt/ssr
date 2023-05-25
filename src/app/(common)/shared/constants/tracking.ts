export enum GeneralParams {
    Iteration = 'iteration',
    Cbt = 'cbt',
    CustomTYPage = 'c-ty',
    CheckoutSource = 'checkout-source',
    Email = 'email',
    UserAgent = 'user-agent'
}

export enum XBNSParams {
    SFChat = 'FFChat',
    SFCall = 'Call',
    FromSoftBrowser = 'FromSoft',
    InApp = 'InSoft',
    NE = 'NE',
    MarketingEmails = 'Email',
    Organic = 'Organic',
    Account = 'Account',
    Landing = 'Landing',
}

export enum OutBrainParams {
    ObSegmentId = 'ob-segment-id',
    ObClickId = 'ob-click-id',
}

export enum FbParams {
    Fbp = '_fbp',
    FbPixelId = 'fb-pixel-id',
    Fbc = '_fbc',
    Fbclid = 'fbclid',
    FbSegmentId = 'fb-segment-id',
}

export enum SegmentParams {
    Sid = 'sid',
    SegmentKey = 'segment-key',
}

export enum MarketingParams {
    Arm = 'arm', // arm from ab test
}

export enum GoogleParams {
    UtmCampaign = 'utm-campaign', // name of traffic source campaign, need for relationship view and coasts on campaign
    UtmMedium = 'utm-medium',
    UtmSource = 'utm-source',
    UtmTerm = 'utm-term',
    UtmContent = 'utm-content',
    UtmCampaignId = 'utm-campaign-id',
    UtmCampaignAdsetId = 'utm-campaign-adset-id',
    UtmCampaignAdId = 'utm-campaign-ad-id',

    OriginalUtmCampaign = 'utm_campaign',
    OriginalUtmMedium = 'utm_medium',
    OriginalUtmSource = 'utm_source',
    OriginalUtmTerm = 'utm_term',
    OriginalUtmContent = 'utm_content',

    GSegmentId = 'g-segment-id',
    Gclid = 'gclid',
    Gbraid = 'gbraid',
    Wbraid = 'wbraid',
    ConversionActionId = 'ctId',

    CookiesGa = '_ga',
    CookiesGaId = '_gid',
    CookiesGaCid = 'ga_cid',
    GaCid = 'ga-cid',
}

export enum InternalParams {
    Affid = 'affid',
    XBNS = 'x-bns',
}

export const TrackingParams = {
    ...GeneralParams,
    ...SegmentParams,
    ...FbParams,
    ...OutBrainParams,
    ...GoogleParams,
    ...InternalParams,
    ...MarketingParams,
};

export type TrackingParams =
    | GeneralParams
    | SegmentParams
    | FbParams
    | OutBrainParams
    | GoogleParams
    | InternalParams
    | MarketingParams;
