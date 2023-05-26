import clsx from 'clsx';
import css from './progressBar.module.scss';

interface IProgressBar {
    progress: number;
    className?: string;
}

const ProgressBar = ({ className, progress = 0 }: IProgressBar) => {
    return (
        <div className={clsx(css['progress-bar'], className)}>
            <div className={css['progress-bar__progress']} style={{ width: `${progress}%` }} />
        </div>
    );
};

ProgressBar.displayName = 'ProgressBar';
export default ProgressBar;