import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RadioGroup } from '.';

const meta = {
  title: 'Components/common/radio/RadioGroup',
  component: RadioGroup,
  argTypes: {},
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const _RadioGroup: Story = {
  render: (args) => {
    const [state, setState] = useState<string>('M');

    return (
      <RadioGroup
        label="เพศ"
        required
        styleStack={{ direction: 'row', gap: '40px', w: '100%' }}
        value={state}
        name="input-name"
        onHandleChange={(select) => setState(select)}
        options={[
          {
            value: 'M',
            name: 'ชาย',
          },
          {
            value: 'F',
            name: 'หญิง',
          },
        ]}
        errorMessage={'This is Error message'}
      />
    );
  },
};

_RadioGroup.args = {};
