import classNames from 'classnames';
import { InputElementProps, InputGroupTypes } from '../types';
import css from './radioButton.module.scss';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';

const RadioButton = ({ label, id, disabled, checked, onChange, buttonType, ...rest }: InputElementProps) => {
    return (
        <label htmlFor={id} className={classNames(css['radio-button'], {
            [css['radio-button--disabled']]: disabled,
            [css['radio-button--checked']]: checked,
            [css['centered-button']]: buttonType === InputGroupTypes.CenteredButton
        })}>
            <input
                id={id || ''}
                type="radio"
                className={classNames(css['radio-button__input'], {
                    [css['centered-button']]: buttonType === InputGroupTypes.CenteredButton
                })}
                disabled={disabled || false}
                checked={checked || false}
                value={id || ''}
                onChange={onChange}
                {...rest}
            />

            <Typography variant={TypographyVariants.p1} className={classNames(css['radio-button__text'])}>
                {label}
            </Typography>
        </label>
    );
};

RadioButton.displayName = 'RadioButton';
export default RadioButton;
