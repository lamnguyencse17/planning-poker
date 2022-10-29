import { Text } from "@chakra-ui/react";
import { Story } from "@prisma/client";

type StoryTabProps = {
  data: Story[];
};

const StoryTab: React.FC<StoryTabProps> = ({ data }) => {
  return (
    <>
      {data.map((story) => (
        <Text key={story.id}>{story.name}</Text>
      ))}
    </>
  );
};

export default StoryTab;
