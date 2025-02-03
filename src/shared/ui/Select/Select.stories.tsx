import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';

const optionsMocked = [
    { value: '1', content: '1 - один' },
    { value: '2', content: '2 - два' },
    { value: '3', content: '3 - три' },
    { value: '4', content: '4 - четыри' },
];

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите значение!',
    options: optionsMocked,
};
