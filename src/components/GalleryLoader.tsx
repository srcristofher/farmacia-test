import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { tempArr } from "src/utils/const/variables";
import { Box } from "@chakra-ui/layout";

export const GalleryLoader = () => {
  return (
    <>
      {tempArr.map((temp) => (
        <Box
          key={temp}
          h="20rem"
          display="gird"
          gridTemplateRows="70% 30%"
          p="5px"
        >
          <Skeleton w="100%" h="70%" mb="10px" />
          <Box>
            <SkeletonText mb="10px" />
            <Box display="flex" justifyContent="space-between">
              <SkeletonCircle />
              <SkeletonCircle />
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};
