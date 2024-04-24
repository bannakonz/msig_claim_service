import { Tab, TabList, TabPanel, TabPanels, Tabs, TabsProps } from '@chakra-ui/react';

interface ITabGroup extends TabsProps {
  data: {
    tabName: string;
    value: any;
  }[];
  onChange?: (_index: number) => void;
  defaultIndex?: number;
  index?: number;
}

const TabGroup = ({ data, onChange, defaultIndex, index, ...rest }: ITabGroup) => {
  return (
    <Tabs index={index} defaultIndex={defaultIndex} onChange={onChange} {...rest}>
      <TabList>
        {data.map((item, index) => {
          return <Tab key={`tabName${index}`}>{item.tabName}</Tab>;
        })}
      </TabList>

      <TabPanels>
        {data.map((item, index) => {
          if (item.value) {
            return <TabPanel key={`tabDetail${index}`}>{item.value}</TabPanel>;
          }
        })}
      </TabPanels>
    </Tabs>
  );
};

export default TabGroup;
