import clsx from 'clsx';
import css from './featuresList.module.scss';
import { IFeaturesConfig } from './types';
import { Feature } from './feature';
import { FeaturesConfig } from './config';

export interface IFeatures {
    listItems?: IFeaturesConfig;
    className?: string;
    descriptionClassName?: string;
    iconClassName?: string;
    itemClassName?: string;
}

const FeaturesList = ({
                          listItems = FeaturesConfig,
                          className,
                          descriptionClassName,
                          iconClassName,
                          itemClassName
                      }: IFeatures) => {
    return (
        <ul className={clsx(css['features'], className)}>
            {listItems?.map((listItem) => (
                <Feature
                    key={listItem.name} {...listItem}
                    descriptionClassName={descriptionClassName}
                    itemClassName={itemClassName}
                    iconClassName={iconClassName} />
            ))}
        </ul>
    );
}

FeaturesList.displayName = 'FeaturesList';
export default FeaturesList;