import { TabGroup } from '@/components/common/tab/index';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/common/tab/TabGroup',
  component: TabGroup,
  argTypes: {},
} satisfies Meta<typeof TabGroup>;

export default meta;
type Story = StoryObj<typeof TabGroup>;

export const _TabGroup: Story = {
  render: (args) => <TabGroup {...args} />,
};

_TabGroup.args = {
  data: [
    {
      tabName: 'ประกันภัยการเดินทาง',
      value: 'one',
    },
    {
      tabName: 'ประกันภัยรถยนต์',
      value: 'two',
    },
    {
      tabName: 'ประกันภัยอุบัติเหตุส่วนบุคคล และสุขภาพ',
      value: 'three',
    },
  ],
};
