import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Box,
  Link,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>
      <VStack
        bg="white"
        borderRadius="15px"
        overflow="hidden"
        paddingBottom='18px'
        >
        <Image
          src={imageSrc}
          borderRadius="15px"
        />
        <Box
          color="black"
          marginLeft="25px !important">
          <Heading alignSelf="flex-start">{title}</Heading>
          <Text margin="18px 0">{description}</Text>
          <Link fontWeight="semibold">
            {"See more "}
            <FontAwesomeIcon
              icon={faArrowRight}
              size="1x"
            />
          </Link>
        </Box>
      </VStack>
    </>
  );
};

export default Card;
