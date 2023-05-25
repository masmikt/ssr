import { Languages, Currencies, PaymentProviders } from '@/app/(common)/shared/constants';

export const ValidationBuyNowConfigSchema = {
    language: {
        type: String,
        required: true,
        enum: Object.values(Languages),
    },
    paymentProvider: {
        type: String,
        required: false,
        enum: Object.values(PaymentProviders),
    },
    customTYPage: {
        type: String,
        required: false,
    },
    licenses: [
        {
            period: {
                type: Number,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            purl: {
                type: String,
                required: true,
            },
            products: {
                type: Array,
                each: { type: Number },
                required: false,
            },
            sku: {
                type: Array,
                each: { type: String },
                required: false,
            },
            periodText: {
                type: String,
                required: false,
            },
            devices: {
                type: Number,
                required: true,
            },
            price: [
                {
                    currency: {
                        type: String,
                        required: true,
                        enum: Object.values(Currencies),
                    },
                    value: {
                        type: Number,
                        required: true,
                    },
                    fullPrice: {
                        type: Number,
                        required: false,
                    },
                    pricePerPeriod: {
                        type: Number,
                        required: false,
                    },
                    newPrice: {
                        type: Number,
                        required: false,
                    },
                    previousPrice: {
                        type: Number,
                        required: false,
                    },
                    discount: {
                        type: Number,
                        required: false,
                    },
                    calculatedPeriod: {
                        type: Number,
                        required: false,
                    },
                }
            ],
            selected: {
                type: Boolean,
                required: false,
            },
            specialOffer: {
                type: Boolean,
                required: false,
            },
            popular: {
                type: Boolean,
                required: false,
            }
        }
    ]
}