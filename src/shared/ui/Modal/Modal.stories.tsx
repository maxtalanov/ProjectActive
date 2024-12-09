import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
    ThemeDecorator,
} from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Modal make text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    isOpen: true,
    children: 'Modal make text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
