import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';

export default {
    title: 'СЛОЙ/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    // Аргументы
};
