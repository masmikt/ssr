import { IBuyNowConfig } from './types';
import Schema, { ValidationError } from 'validate';
import { ValidationBuyNowConfigSchema } from './validationConfigSchema';
import { useMemo, useState } from 'react';
import { PaymentProviders } from '@/app/(common)/shared/constants';

export const useBuyNow = (config: null | IBuyNowConfig) => {
    const [validateConfigErrors, setValidateConfigErrors] = useState<ValidationError[]>([]);

    const validateBuyNowConfig = (config: IBuyNowConfig) => {
        const validationClient = new Schema(ValidationBuyNowConfigSchema);
        const validationErrors = validationClient.validate(config);
        setValidateConfigErrors(validationErrors);
    }

    const buyNowConfig = useMemo(() => {
        if (!config) {
            return null;
        }

        validateBuyNowConfig(config);
        if (validateConfigErrors.length) {
            return null;
        }

        return config;
    }, [config]);

    const getLanguage = (): string | null => {
        return buyNowConfig?.language || null;
    }

    const getPaymentProvider = (): string | null => {
        if (!buyNowConfig) {
            return null;
        }

        if (buyNowConfig.paymentProvider) {
            return (buyNowConfig?.paymentProvider as string);
        }

        return PaymentProviders.PPG;
    }

    return {
        buyNowConfig,
        getLanguage,
        getPaymentProvider
    }
}

