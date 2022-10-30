import {
  Box,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Epic, Story, StoryStatus } from "@prisma/client";
import { capitalize, group, isEmpty } from "radash";
import { trpc } from "../../utils/trpc";
import EmptyTab from "./emptyTab";
import SkeletonTab from "./skeletonTab";
import StoryTab from "./taskTab";

const fillInEmptyKeys = (input: Record<StoryStatus, (Story | Epic)[]>) => {
  const clonedInput = { ...input };
  Object.keys(StoryStatus).forEach((status) => {
    if (!clonedInput[status as keyof typeof clonedInput]) {
      clonedInput[status as keyof typeof clonedInput] = [];
    }
  });
  return clonedInput;
};

const TaskTabs: React.FC = () => {
  const {
    data: taskList,
    isError,
    isLoading,
    error,
  } = trpc.tasks.getRecentTasks.useQuery();

  if (isError) {
    throw error;
  }
  if (isLoading) {
    return <SkeletonTab />;
  }
  const groupedTasks = fillInEmptyKeys(group(taskList, (task) => task.status));

  return (
    <Stack direction="column" align="center" width="100%">
      <Box width="100%">
        <Tabs isLazy>
          <TabList>
            {Object.keys(StoryStatus).map((status) => (
              <Tab key={status}>{capitalize(status).replace(/_/g, " ")}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {Object.keys(groupedTasks).map((key) => (
              <TabPanel key={key}>
                {isEmpty(groupedTasks[key as keyof typeof groupedTasks]) ? (
                  <EmptyTab />
                ) : (
                  <StoryTab
                    data={groupedTasks[key as keyof typeof groupedTasks]}
                  />
                )}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Stack>
  );
};

export default TaskTabs;
