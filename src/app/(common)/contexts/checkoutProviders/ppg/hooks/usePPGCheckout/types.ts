export interface ICheckoutMessage {
    data: ICheckoutMessagesData;
}

export interface ICheckoutMessagesData {
    closeCheckout?: boolean,
    purchaseProcess?: string,
}

export type IPPGCheckoutParams = IPPGIframeCheckoutParams & IPPGCheckoutParamsTesting;

export interface IPPGIframeCheckoutParams {
    exfo?: number;
}

export interface IPPGCheckoutParamsTesting {
    'use-test-mode'?: boolean,
    'secret-key'?: string,
    'emailoverride'?: string | undefined;
}