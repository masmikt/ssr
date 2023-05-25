import Collapse, { Panel } from 'rc-collapse';
import 'rc-collapse/assets/index.css';
import css from './instructions.module.scss';
import { Key, useState } from 'react';
import { InstructionsListConfig } from './config';
import classNames from 'classnames';
import Image from 'next/image'
import ArrowIcon from 'public/images/common/arrow-icon.svg';
import { SetupFlowEvents } from '../../../constants';
import { useSendEvent } from '@/app/(common)/shared/hooks';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';
import { motion } from '@/app/(common)/shared/helpers';

const Instructions = () => {
    const { sendEvent } = useSendEvent();
    const [activeKey, setActiveKey] = useState<Key | Key[]>();

    const handleChangeAccordionState = (key: Key | Key[]) => {
        setActiveKey(key);

        sendEvent(SetupFlowEvents.DropdownClick, { dropdownItem: getStepByKey(key) });
    }

    const getStepByKey = (key: Key | Key[]) => {
        let step = null;
        if (!key) {
            return step;
        }
        if (typeof key === 'string') {
            step = key;
            return step;
        }
        return (key as Key[]).at(-1);
    }
    return (
        <Collapse
            onChange={handleChangeAccordionState}
            activeKey={activeKey}
            className={css['instructions']}
            openMotion={motion}
        >
            {InstructionsListConfig.map(instructionConfig => (
                <Panel
                    showArrow={false}
                    header={
                        <div className={classNames(css['instruction__header'])}>
                            <Typography variant={TypographyVariants.p2} className={css['instruction__header-text']}>
                                {instructionConfig.header}
                            </Typography>
                            <Image src={ArrowIcon} className={classNames(css['instruction__arrow'])}
                                   alt={instructionConfig.name} />
                        </div>
                    }
                    key={instructionConfig.name}
                    className={classNames(css['instructions__item'], css['instruction'])}
                >
                    <Typography variant={TypographyVariants.p2} className={css['instruction__text']}>
                        {instructionConfig.content}
                    </Typography>
                </Panel>
            ))}
        </Collapse>
    )
}

Instructions.displayName = 'Instructions';
export default Instructions;