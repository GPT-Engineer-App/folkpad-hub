import { Box, Button, Container, Flex, Heading, IconButton, Input, Link, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { FaPlay, FaInstagram, FaTwitter, FaFacebookF, FaSpotify, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Hero Section */}
      <Box position="relative" height="90vh" overflow="hidden">
        <video src="GPTENG:get_video('FolkPad live performance')" autoPlay loop muted style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <VStack position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" spacing={4} textAlign="center">
          <Heading size="2xl" color="white">
            New Album Out Now!
          </Heading>
          <Text fontSize="xl" color="white">
            Explore the latest beats of FolkPad.
          </Text>
          <Button colorScheme="teal" size="lg">
            Listen Now
          </Button>
          <IconButton aria-label="Play Sound" icon={<FaPlay />} isRound size="lg" colorScheme="red" variant="outline" />
        </VStack>
      </Box>

      {/* About the Band */}
      <Box py={10}>
        <VStack spacing={5}>
          <Heading size="xl">About FolkPad</Heading>
          <Text fontSize="lg" maxW="container.md">
            FolkPad has been redefining folk music since 2010, blending traditional sounds with modern influences to create something truly unique.
          </Text>
          <SimpleGrid columns={3} spacing={10}>
            <Box bg="gray.100" height="200px" />
            <Box bg="gray.100" height="200px" />
            <Box bg="gray.100" height="200px" />
          </SimpleGrid>
        </VStack>
      </Box>

      {/* Tour Dates */}
      <Box py={10}>
        <VStack spacing={5}>
          <Heading size="xl">Tour Dates</Heading>
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" w="full">
            <Box flex="1" bg="gray.100" height="300px" />
            <Stack flex="1" spacing={3} pl={{ md: 10 }}>
              <Text>
                <FaMapMarkerAlt /> New York - Sep 20, 2023
              </Text>
              <Text>
                <FaMapMarkerAlt /> Los Angeles - Oct 5, 2023
              </Text>
              <Text>
                <FaMapMarkerAlt /> Chicago - Oct 12, 2023
              </Text>
              <Button colorScheme="teal">See All Dates</Button>
            </Stack>
          </Flex>
        </VStack>
      </Box>

      {/* Music and Merchandise */}
      <Box py={10}>
        <VStack spacing={5}>
          <Heading size="xl">Music & Merchandise</Heading>
          <SimpleGrid columns={3} spacing={10}>
            <Box bg="gray.100" height="200px" />
            <Box bg="gray.100" height="200px" />
            <Box bg="gray.100" height="200px" />
          </SimpleGrid>
        </VStack>
      </Box>

      {/* Newsletter Signup */}
      <Box bg="teal.500" color="white" py={10}>
        <VStack spacing={3}>
          <Text fontSize="lg">Stay Updated with FolkPad</Text>
          <Flex as="form" w="full" maxW="md">
            <Input placeholder="Enter your email" type="email" />
            <Button type="submit" colorScheme="red" ml={2}>
              Subscribe
            </Button>
          </Flex>
        </VStack>
      </Box>

      {/* Footer */}
      <Box py={5} bg="gray.800" color="white">
        <Flex justify="space-between" align="center" px={5}>
          <Text>&copy; 2023 FolkPad. All rights reserved.</Text>
          <Stack direction="row" spacing={3}>
            <Link href="#">
              <FaFacebookF />
            </Link>
            <Link href="#">
              <FaTwitter />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
            <Link href="#">
              <FaSpotify />
            </Link>
            <Link href="#">
              <FaYoutube />
            </Link>
          </Stack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
