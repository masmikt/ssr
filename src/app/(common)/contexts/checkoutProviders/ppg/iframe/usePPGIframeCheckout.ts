import { ICheckoutMessage, IPPGCheckoutParams, usePPGCheckout, ICheckoutMessagesData } from '../hooks';
import { ICheckoutParams } from '../../hooks';
import { Events, } from '@/app/(common)/shared/constants';
import { useEffect, useMemo, useState } from 'react';
import { PPGIframeRequiredParams, PPGCheckoutListenerTypes, PPGCheckoutCustomEvents } from './constants';
import { IBuyNowConfig, useSendEvent } from '@/app/(common)/shared/hooks';
import { addSearchParams } from '@/app/(common)/shared/helpers';

export type ICustomEventsHandlers = { [key in PPGCheckoutCustomEvents]?: (eventData?: ICheckoutMessagesData) => void };

export const usePPGIframeCheckout = (
    buyNowConfig: IBuyNowConfig,
    customEventsHandlers?: ICustomEventsHandlers
) => {
    const { sendEvent } = useSendEvent();
    const { baseCheckoutLink, getCheckoutParams } = usePPGCheckout(buyNowConfig);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    useEffect(() => {
        subscribeCheckoutMessages();
        return () => {
            unsubscribeCheckoutMessages();
        };
    }, []);


    const getCheckoutLink = async (purl: string) => {
        if (!purl) {
            return undefined;
        }
        const redirectCheckoutLink = `${baseCheckoutLink}/${purl}`;
        const checkoutParams = await getIframeCheckoutParams(purl);

        const linkWithParams = addSearchParams(redirectCheckoutLink, checkoutParams);
        return linkWithParams ? linkWithParams : redirectCheckoutLink;
    }

    const getIframeCheckoutParams = async (purl: string): Promise<IPPGCheckoutParams & ICheckoutParams> => {
        const defaultParams = await getCheckoutParams(purl);

        return {
            ...PPGIframeRequiredParams,
            ...defaultParams,
        }
    }

    const subscribeCheckoutMessages = () => {
        window.addEventListener(PPGCheckoutListenerTypes.message, handleMessageFromCheckout);
    };
    const unsubscribeCheckoutMessages = () => {
        window.removeEventListener(PPGCheckoutListenerTypes.message, handleMessageFromCheckout);
    };

    const handleCheckoutPurchaseProcess = (eventData?: ICheckoutMessagesData) => {
        sendEvent(Events.HandleCheckoutPurchaseProcess, { email: eventData?.purchaseProcess || null });
    }

    const handleCloseCheckoutModal = (eventData?: ICheckoutMessagesData) => {
        setIsCheckoutOpen(false);
        sendEvent(Events.PopupCheckoutClosed);
    }

    const eventsHandlers = useMemo(() => {
        let eventsHandlers = {
            [PPGCheckoutCustomEvents.CloseCheckout]: handleCloseCheckoutModal,
            [PPGCheckoutCustomEvents.PurchaseProcess]: handleCheckoutPurchaseProcess,
        }

        if (customEventsHandlers) {
            eventsHandlers = {
                ...eventsHandlers,
                ...customEventsHandlers,
            }
        }

        return eventsHandlers;
    }, [customEventsHandlers]);

    const handleMessageFromCheckout = (message: any) => {
        const { data } = message as ICheckoutMessage;
        let handler = null;
        if (data.closeCheckout) {
            handler = eventsHandlers[PPGCheckoutCustomEvents.CloseCheckout];
        }

        if (data.purchaseProcess) {
            handler = eventsHandlers[PPGCheckoutCustomEvents.PurchaseProcess]
        }

        handler?.(data);
    };

    return {
        getCheckoutLink,
        isCheckoutOpen,
        setIsCheckoutOpen,
        handleCloseCheckoutModal,
    }
}
