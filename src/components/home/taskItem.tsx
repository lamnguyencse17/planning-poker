import { Text } from "@chakra-ui/react";
import { Epic, Story } from "@prisma/client";

type TaskItemProps = {
  task: Story | Epic;
};

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return <Text>{task.name}</Text>;
};

export default TaskItem;
