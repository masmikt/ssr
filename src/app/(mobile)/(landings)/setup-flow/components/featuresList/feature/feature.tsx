import css from './feature.module.scss';
import { IFeatureConfig } from '../types';
import clsx from 'clsx';
import Image from 'next/image'
import Checkmark from 'public/images/common/checkmark.svg';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';

const Feature = ({
                     icon,
                     description,
                     name,
                     descriptionClassName = '',
                     iconClassName,
                     itemClassName
                 }: IFeatureConfig) => {
    return (
        <li className={clsx(css['feature-item'], itemClassName)}>
            <Image
                src={icon || Checkmark}
                alt={`${name} icon`}
                className={clsx(css['feature-item__icon'], iconClassName)} />
            <Typography
                variant={TypographyVariants.p3}
                className={clsx(
                    css['feature-item__description'],
                    descriptionClassName,
                    description.className
                )}>
                {description.text}
            </Typography>
        </li>
    );
}

Feature.displayName = 'SurveyFeature';
export default Feature;