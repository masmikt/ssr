import css from './radioButtonGroup.module.scss';
import RadioButton from './radioButton';
import classNames from 'classnames';
import { IInputGroup, InputGroupTypes, IOption } from '@/app/(common)/components/inputs';
import { FadeIn } from '@/app/(common)/components/fadeIn';

const RadioButtonGroupMobile = ({
      label,
      options,
      onChange,
      checkedIds,
      type = InputGroupTypes.RadioInput,
      fieldsetClassname,
  }: IInputGroup) => {
    return (
        <fieldset className={classNames(css['radio-button-group__fieldset'], fieldsetClassname)}>
            {label && <legend className={css['radio-button-group__legend']}>{label}</legend>}
            <FadeIn className={css['radio-button-group__inputs']}>{
                options.map(({ label, id, disabled }: IOption, index) => {
                    return (
                        <RadioButton
                            value={label}
                            label={label}
                            key={id}
                            id={id}
                            name={id}
                            disabled={disabled}
                            buttonType={type}
                            checked={checkedIds?.includes(id)}
                            onChange={onChange}
                        />
                    );
                })
            }</FadeIn>
        </fieldset>
    );
};

RadioButtonGroupMobile.displayName = 'RadioButtonGroup';
export default RadioButtonGroupMobile;