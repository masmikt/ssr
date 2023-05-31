"use client";
import Collapse, { Panel } from 'rc-collapse';
import 'rc-collapse/assets/index.css';
import css from './instructions.module.scss';
import { Key, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image'
import { useSendEvent } from '@/app/(common)/shared/hooks';
import ArrowIcon from 'public/images/common/arrow-icon.svg';
import { SetupFlowEvents } from '@/app/(mobile)/(landings)/setup-flow/constants';
import {
    InstructionsListConfig
} from '@/app/(mobile)/(landings)/setup-flow/components/instructionsList/instructions/config';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';
import { MotionEndEventHandler, MotionEventHandler } from 'rc-motion';

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

    const getCollapsedHeight: MotionEventHandler = () => ({ height: 0, opacity: 0 });
    const getRealHeight: MotionEventHandler = (node) => ({
        height: node.scrollHeight,
        opacity: 1,
    });
    const skipOpacityTransition: MotionEndEventHandler = (_, event) =>
        (event as TransitionEvent).propertyName === 'height';

    return (
        <>
            <Collapse
                onChange={handleChangeAccordionState}
                activeKey={activeKey}
                className={css['instructions']}
                openMotion={{
                    motionName: 'rc-collapse-motion',
                    onEnterStart: getCollapsedHeight,
                    onEnterActive: getRealHeight,
                    onLeaveActive: getCollapsedHeight,
                    onEnterEnd: skipOpacityTransition,
                    onLeaveEnd: skipOpacityTransition,
                    motionDeadline: 500,
                    leavedClassName: 'rc-collapse-content-hidden',
                }}
            >
                {InstructionsListConfig.map(instructionConfig => (
                    <Panel
                        showArrow={false}
                        header={
                            <div className={clsx(css['instruction__header'])}>
                                <Typography variant={TypographyVariants.p2} className={css['instruction__header-text']}>
                                    {instructionConfig.header}
                                </Typography>
                                <Image src={ArrowIcon}
                                       className={clsx(css['instruction__arrow'])}
                                       alt={instructionConfig.name} />
                            </div>
                        }
                        key={instructionConfig.name}
                        className={clsx(css['instructions__item'], css['instruction'])}
                    >
                        <Typography variant={TypographyVariants.p2} className={css['instruction__text']}>
                            {instructionConfig.content}
                        </Typography>
                    </Panel>
                ))}
            </Collapse>
        </>
    )
}

Instructions.displayName = 'Instructions';
export default Instructions;