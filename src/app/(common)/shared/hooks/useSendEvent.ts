import { objectOmitNull } from '../helpers';
import { InterstellarProductId, TrackingParams } from '../constants';
import { useTracking } from './useTracking';
import { ICustomEventParams, ISegmentEvent, useAnalytics } from '@/app/(common)/contexts/analyticsProvider';

export const useSendEvent = () => {
    const { send } = useAnalytics();
    const { pathname } = 'abcd';
    const {
        getFbp,
        getFbc,
        getTrackingParam,
        getGaCid,
        getIteration,
        getTypeDevice,
        getMarketing,
        getUserAgent
    } = useTracking();
    const pageName = pathname;

    const prepareEventMessage = (
        eventName: string,
        params?: ICustomEventParams
    ): ISegmentEvent => {
        const typeDevice = getTypeDevice();
        return objectOmitNull(
            {
                eventName,
                properties: {
                    $os: typeDevice,
                    affid: getTrackingParam(TrackingParams.Affid),
                    gaCid: getGaCid(),
                    pageName: /^\//.test(pageName) ? pageName : `${pageName}`,
                    marketing: getMarketing(),
                    fbclid: getTrackingParam(TrackingParams.Fbclid),
                    fbp: getFbp(),
                    fbc: getFbc(),
                    prodId: `${InterstellarProductId}`,
                    obClickId: getTrackingParam(TrackingParams.ObClickId),
                    typeDevice,
                    iteration: getIteration(),
                    cbt: getTrackingParam(TrackingParams.Cbt),
                    userAgent: getUserAgent(),
                    ...params,
                },
            },
            false
        ) as ISegmentEvent;
    };

    const sendEvent = async (
        eventName: string,
        eventParams?: ICustomEventParams
    ): Promise<void> => {
        const eventMessage = prepareEventMessage(eventName, eventParams);
        send?.(eventMessage);
    };

    return {
        sendEvent,
    };
};
