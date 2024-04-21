
import {
  Box,

  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Card, CardBody, } from "@chakra-ui/react";
import raushan from "../assets/TeamPhoto/Pic.png";
import Akash from "../assets/TeamPhoto/Akash.jpeg";
import Deepak from "../assets/TeamPhoto/Deepak.jpeg";
import Ab from "../assets/TeamPhoto/Ab.jpeg";

const About = () => {
  return (
    <Box p={"2rem 4rem"}>
      <Heading as="h3" size="lg" mb={4}>
        About CodeRipple
      </Heading>

      <Box bg="gray.100" p={6} borderRadius="md" mb={4}>
        <Heading as="h2" size="xl" mb={4}>
          Our Story:
        </Heading>
        <Text>
          CodeRipple is the brainchild of a team of passionate developers who came
          together during a Construct Week, a dedicated period for intensive
          collaboration and innovation. Fueled by a shared vision to create a
          cutting-edge collaborative coding platform, our journey began with a
          commitment to push the boundaries of what is possible in the world of
          coding.
        </Text>
      </Box>

      <Box
        bg="gray.100"
        p={4}
        borderRadius="md"
        mb={4}
        display={"flex"}
        flexDirection={"column"}
        gap={4}
      >
        <Heading as="h2" size="xl" mb={4} style={{ textAlign: "center" }}>
          Meet the Team:
        </Heading>
        <div className="Allteam">
          <Card maxW="300px">
            <CardBody>
              <Image
                style={{ width: "250px", height: "300px", objectFit: "cover" }}
                src={raushan}
                alt="rpic"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Full Stack Developer</Heading>
                <Text></Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="300px">
            <CardBody>
              <Image
                style={{ width: "250px", height: "300px", objectFit: "cover" }}
                src={Akash}
                alt="rpic"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Full Stack Developer</Heading>
                <Text></Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="300px">
            <CardBody>
              <Image
                style={{ width: "250px", height: "300px", objectFit: "cover" }}
                src={Deepak}
                alt="rpic"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Full Stack Developer</Heading>
                <Text></Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="300px">
            <CardBody>
              <Image
                style={{ width: "250px", height: "300px", objectFit: "cover" }}
                src={Ab}
                alt="rpic"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Full Stack Developer</Heading>
                <Text></Text>
              </Stack>
            </CardBody>
          </Card>
        </div>
      </Box>

      <Box bg="gray.100" p={4} borderRadius="md" mb={4}>
        <Heading as="h2" size="xl" mb={4}>
          Our Mission:
        </Heading>
        <Text>
          At CodeRipple, we are on a mission to democratize coding by providing a
          platform where collaboration, learning, and creativity thrive. We
          believe that coding is not just about writing lines of code but about
          building connections, sharing knowledge, and fostering innovation.
        </Text>
      </Box>

      <Box bg="gray.100" p={4} borderRadius="md" mb={4}>
        <Heading as="h2" size="xl" mb={4}>
          Why CodeRipple?
        </Heading>
        <Text>
          CodeRipple just another coding platform; it is a community-driven
          ecosystem designed to empower coders of all levels. Whether you are a
          seasoned developer looking for new challenges or a beginner eager to
          learn, CodeRipple offers the tools and resources you need to succeed.
        </Text>
        <Text>
          Join us as we revolutionize the way coders work, learn, and
          collaborate. Welcome to the future of coding—welcome to CodeRipple.
        </Text>
      </Box>
    </Box>
  );
};

export default About;
