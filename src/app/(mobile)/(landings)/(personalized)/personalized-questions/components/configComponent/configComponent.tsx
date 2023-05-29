import { createElement } from 'react';
import { IComponent } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/types';

interface IRenderContent {
    config: IComponent;
}

const ConfigComponent = ({ config }: IRenderContent) => {
    if (!config) {
        return null;
    }

    const { component, ...props } = config;
    if (component) {
        return createElement(component, { ...props },
            config.children &&
            (typeof config.children === "string"
                ? config.children
                : config.children.map((config) => <ConfigComponent config={config} key={config.id} />)))
    }

    return null;
}

ConfigComponent.displayName = 'ConfigComponent';
export default ConfigComponent;
