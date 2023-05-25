export interface IFeatureConfig {
    name: string;
    icon?: string;
    descriptionClassName?: string;
    iconClassName?: string;
    itemClassName?: string;
    description: {
        text: string;
        className?: string;
    };
}

export type IFeaturesConfig = IFeatureConfig[];