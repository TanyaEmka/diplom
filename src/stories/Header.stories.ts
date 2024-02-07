import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '../containers/Header/Header';

const meta = {
  title: 'Map/Containers/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headercontainer: Story = {
  args: {
  },
};