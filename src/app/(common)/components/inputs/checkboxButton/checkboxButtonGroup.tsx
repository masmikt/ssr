import { IInputGroup, InputGroupTypes, IOption } from '../types';
import css from './checkboxButtonGroup.module.scss';
import CheckboxButton from './checkboxButton';
import classNames from 'classnames';
import CustomCheckboxButton from './customCheckbox';
import { ReactElement } from 'react';

interface ICheckboxButtonGroup extends IInputGroup {
    children?: ReactElement;
}

const CheckboxButtonGroup = ({
                                 label,
                                 options,
                                 onClick,
                                 onChange,
                                 checkedIds,
                                 type = InputGroupTypes.RadioInput,
                                 fieldsetClassname,
                                 children,
                             }: ICheckboxButtonGroup) => {
    return (
        <fieldset className={classNames(css['checkbox-button-group__fieldset'], fieldsetClassname)}>
            {label && <legend className={css['checkbox-button-group__legend']}>{label}</legend>}
            <div className={css['checkbox-button-group__inputs']}>
                {
                    options.map(({ label, id, disabled }: IOption) => {
                        return (
                            <div key={id}>
                                {
                                    children ?
                                        <CustomCheckboxButton
                                            value={label} label={label} key={id} name={id} id={id}
                                            disabled={disabled} buttonType={type} checked={checkedIds?.includes(id)}
                                            onClick={onClick}>
                                            {children}
                                        </CustomCheckboxButton>
                                        :
                                        (<CheckboxButton
                                            value={label}
                                            label={label}
                                            key={id}
                                            id={id}
                                            name={id}
                                            disabled={disabled}
                                            buttonType={type}
                                            checked={checkedIds?.includes(id)}
                                            onClick={onClick}
                                        />)
                                }
                            </div>
                        )}
                    )
                }
            </div>
        </fieldset>
    );
};

CheckboxButtonGroup.displayName = 'RadioButtonGroup';
export default CheckboxButtonGroup;