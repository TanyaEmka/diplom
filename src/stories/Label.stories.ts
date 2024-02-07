import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../components/Label/Label';

const meta = {
  title: 'Map/Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelComponent: Story = {
  args: {
    name: 'Object name',
  },
};

