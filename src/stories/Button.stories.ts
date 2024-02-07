import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/Button/Button';

const meta = {
  title: 'Map/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    buttonType: { control: 'select', 
                  options: ['blue', 'white', 'accent'],
                  defaultValue: 'blue' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = {
  args: {
    buttonType: 'blue',
  },
};

export const White: Story = {
  args: {
    buttonType: 'white',
  },
};

export const Accent: Story = {
  args: {
    buttonType: 'accent',
  },
};

