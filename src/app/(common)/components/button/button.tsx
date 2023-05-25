import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx';
import css from './button.module.scss';
import { ButtonColor, ButtonSize, ButtonVariant } from './config';

export interface IButton
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    size?: ButtonSize;
    variant?: ButtonVariant;
    color?: ButtonColor;
    isLoading?: boolean;
}

const Button = ({
    children,
    className = '',
    size = ButtonSize.Large,
    variant = ButtonVariant.Filled,
    color = ButtonColor.Primary,
    isLoading = false,
    disabled = false,
    ...otherProps
}: IButton) => {
    return (
        <button
            type="button"
            className={clsx(
                css['button'],
                css[`button--${color}`],
                css[`button--${variant}`],
                css[`button--${size}`],
                className,
            )}
            disabled={isLoading || disabled}
            {...otherProps}
        >
            {isLoading ? 'Please wait...' : children}
        </button>
    );
};

export default Button;
