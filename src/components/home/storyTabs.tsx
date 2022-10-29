import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { group } from "radash";
import { trpc } from "../../utils/trpc";
import StoryTab from "./storyTab";

const StoryTabs: React.FC = () => {
  const {
    data: storyList,
    isError,
    isLoading,
    error,
  } = trpc.cards.getAllCards.useQuery();
  if (isError) {
    throw error;
  }
  if (isLoading) {
    return null;
  }
  const groupedStories = group(storyList, (story) => story.status);
  const statuses = Object.keys(groupedStories);
  return (
    <>
      <Tabs>
        <TabList>
          {statuses.map((status, index) => (
            <Tab key={status}>{status}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {Object.keys(groupedStories).map((key) => (
            <TabPanel key={key}>
              <StoryTab
                data={groupedStories[key as keyof typeof groupedStories]}
              />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default StoryTabs;
