import css from './supportedPlatforms.module.scss';
import clsx from 'clsx';
import { SupportedPlatform } from './supportedPlatform';
import { SupportedPlatformsConfig } from './config';

interface ISupportedPlatforms {
    className?: string;
}

const SupportedPlatforms = ({ className }: ISupportedPlatforms) => {
    return (
        <div className={clsx(css['supported-platforms'], className)}>
            {SupportedPlatformsConfig?.map(platform => (
                <SupportedPlatform {...platform} key={platform.name} />
            ))
            }
        </div>
    );
}


SupportedPlatforms.displayName = 'SupportedPlatforms';
export default SupportedPlatforms;