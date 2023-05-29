import css from './feature.module.scss';
import Image from 'next/image'
import { ReactNode } from 'react';
import { FeaturesList, IFeaturesConfig } from '../../../featuresList';
import { Section } from '../../../section';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';

export interface IFeature {
    name: string;
    image: string;
    title: string | ReactNode;
    text: string | ReactNode;
    features: IFeaturesConfig;
}

const Feature = ({ image, title, text, features, name }: IFeature) => {
    return (
        <Section className={css['feature']} name={name}>
            <Image
                src={image}
                className={css['feature__image']}
                alt={name}
                width={272}
                height={372} />
            <Typography variant={TypographyVariants.h4} className={css['feature__title']}>
                {title}
            </Typography>
            <Typography variant={TypographyVariants.p2} className={css['feature__text']}>
                {text}
            </Typography>
            <FeaturesList
                listItems={features} className={css['feature__list']}
                iconClassName={css['feature__list-icon']}
                descriptionClassName={css['feature__list-description']} />
        </Section>
    );
};

Feature.displayName = 'Feature';
export default Feature;