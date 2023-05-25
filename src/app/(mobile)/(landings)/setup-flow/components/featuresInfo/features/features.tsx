import css from './features.module.scss';
import { FeaturesConfig } from './configs/config';
import { Feature } from './feature';


const Features = () => {
    return (
        <div className={css['features']}>
            {FeaturesConfig.map(featureConfig => (
                <Feature {...featureConfig} key={featureConfig.name} />
            ))}
        </div>
    );
};

Features.displayName = 'Features';
export default Features;