import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

interface ITabGroup {
  data: {
    tabName: string;
    value: any;
  }[];
  onChange?: (_index: number) => void;
  defaultIndex?: number;
  index?: number;
}

const TabGroup = ({ data, onChange, defaultIndex, index }: ITabGroup) => {
  return (
    <Tabs index={index} defaultIndex={defaultIndex} align="center" onChange={onChange}>
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
