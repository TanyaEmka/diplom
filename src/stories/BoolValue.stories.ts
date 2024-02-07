import type { Meta, StoryObj } from '@storybook/react';

import { BoolValue } from '../components/BoolValue/BoolValue';

const meta = {
  title: 'Map/Components/BoolValue',
  component: BoolValue,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean', },
    name: { control: 'text' },
  },
} satisfies Meta<typeof BoolValue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UncheckedValue: Story = {
  args: {
    name: 'Объект',
    checked: false,
  },
};

export const CheckedValue: Story = {
    args: {
      name: 'Объект',
      checked: true,
    },
  };

