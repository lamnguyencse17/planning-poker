import { Text } from "@chakra-ui/react";
import { Epic, Story } from "@prisma/client";
import { Virtuoso } from "react-virtuoso";
import TaskItem from "./taskItem";

type TaskTabsProps = {
  data: (Story | Epic)[];
};

const TaskTabs: React.FC<TaskTabsProps> = ({ data }) => {
  return (
    <Virtuoso
      style={{ height: "200px" }}
      data={data}
      itemContent={(_, task) => <TaskItem task={task} />}
    />
  );
};

export default TaskTabs;
