import css from './loader.module.scss';
import clsx from 'clsx';

interface ILoader {
    className?: string;
    animationClassName?: string;
    dotsClassName?: string;
}

const Loader = ({ className, animationClassName, dotsClassName }: ILoader) => {
    return (
        <div className={clsx(css["loader"], className)}>
            <div className={clsx(css["loader__animation"], animationClassName)}>
                <span className={clsx(css["dots"], css["dots_1"], dotsClassName)}></span>
                <span className={clsx(css["dots"], css["dots_2"], dotsClassName)}></span>
                <span className={clsx(css["dots"], css["dots_3"], dotsClassName)}></span>
            </div>
        </div>
    );
};

export default Loader;
