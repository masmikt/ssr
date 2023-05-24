// Create a functional component that take
// variant: the selected html tag
// color: the selected color
// children: the node passed inside the Component
// ...props: the default attribute of the Component
import { ReactNode } from 'react';
import { clsx } from 'clsx';
import css from './typography.module.scss';
import { TypographyComponents, TypographyVariants } from './config';

type ITypography = {
    children?: ReactNode;
    className?: string;
    variant: TypographyVariants;
    bold?: boolean;
    opacity?: boolean;
    crossed?: boolean;
    component?: TypographyComponents;
    // All others prop
    [x: string]: unknown;
};

const Typography = ({
    variant,
    children,
    component,
    opacity = false,
    bold = false,
    crossed = false,
    className,
    ...props
}: ITypography) => {
    // If the component exists in components list, we use it or existing component of variant.
    // Otherwise, use p tag instead.
    const Component =
        (component && TypographyComponents[component]) ||
        TypographyComponents[variant as keyof typeof TypographyComponents] ||
        TypographyComponents.p;

    return (
        <Component
            className={clsx(
                css[`typography--variant-${variant}`],
                className,
                {
                    [css['typography--bold']]: bold,
                    [css['typography--opacity']]: opacity,
                    [css['typography--crossed']]: crossed,
                }
                )}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Typography;
