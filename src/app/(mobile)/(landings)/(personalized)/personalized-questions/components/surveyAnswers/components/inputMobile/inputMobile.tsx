import { ChangeEvent, FC } from 'react';
import css from './inputMobile.module.scss';
import { ISurveyAnswerConfig } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/types';

interface IInputMobile {
    inputAnswer: ISurveyAnswerConfig;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const InputMobile: FC<IInputMobile> = ({ inputAnswer, onChange, value }) => {
    return <input value={value} onChange={onChange} className={css['input-mobile']} placeholder={inputAnswer.label} />;
};

export default InputMobile;