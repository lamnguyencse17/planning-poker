import {
  Box,
  Skeleton,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { StoryStatus } from "@prisma/client";
import { capitalize } from "radash";

const SkeletonTab = () => {
  return (
    <Stack direction="column" align="center" width="100%">
      <Box width="100%">
        <Tabs>
          <TabList>
            {Object.keys(StoryStatus).map((status) => (
              <Tab key={status}>{capitalize(status).replace(/_/g, " ")}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {Object.keys(StoryStatus).map((key) => (
              <TabPanel key={key}>
                <Skeleton width="100%" height="200px" />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Stack>
  );
};

export default SkeletonTab;
