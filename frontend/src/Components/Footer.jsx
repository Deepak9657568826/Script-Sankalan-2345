import React from "react";
import { Grid, Box, GridItem, Heading, Text, Flex } from "@chakra-ui/react";

import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import { SvgIcon } from "@mui/material";
import { Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      className="n-footer px-6 flex flex-col items-center justify-center "
      bg={"skyblue"}
      color={"black"}
    >
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: 2, md: 8 }}
        w={{ base: "100%", md: "80%" }}
      >
        <GridItem
          className="flex flex-col justify-start mt-8 "
          gap={{ base: 0, md: 1 }}
        >
          <Heading fontSize={{ base: "1.2rem", md: "2rem" }}>Menu</Heading>
          <Flex
            flexDirection={"column"}
            fontSize={{ base: ".8rem", md: "1rem" }}
          >
            <Link to="/">
              <Text mt={2} color={"black"} _hover={{ color: "blue" }}>
                Home
              </Text>
            </Link>
            <Link to="/about">
              <Text color={"black"} _hover={{ color: "blue" }}>
                About us
              </Text>
            </Link>
            <Link to="/html">
              <Text color={"black"} _hover={{ color: "blue" }}>
                {" "}
                HTML Compiler
              </Text>
            </Link>
            <Link to="/judger">
              <Text color={"black"} _hover={{ color: "blue" }}>
                {" "}
                Judger
              </Text>
            </Link>
          </Flex>
        </GridItem>
        <GridItem
          className=" flex flex-col justify-start  mt-8"
          w="100%"
          gap={1}
        >
          <Heading fontSize={{ base: "1.2rem", md: "2rem" }}>
            Need Help ?
          </Heading>
          <Flex
            flexDirection={"column"}
            fontSize={{ base: ".8rem", md: "1rem" }}
          >
            <Link to="#">
              <Text color={"black"} _hover={{ color: "blue" }} mt={2}>
                Code Q&A's
              </Text>
            </Link>
            <Link to="https://www.termsfeed.com/blog/terms-conditions-url/">
              <Text color={"black"} _hover={{ color: "blue" }}>
                {" "}
                Terms of use
              </Text>
            </Link>
            <Link to="https://www.termsfeed.com/blog/terms-conditions-url/">
              <Text color={"black"} _hover={{ color: "blue" }}>
                {" "}
                Privacy Policy
              </Text>
            </Link>
          </Flex>
        </GridItem>
        <GridItem className="flex flex-col justify-start mt-8" w="100%" gap={1}>
          <Heading fontSize={{ base: "1.2rem", md: "2rem" }}>Contacts</Heading>
          <Flex
            flexDirection={"column"}
            fontSize={{ base: ".8rem", md: "1rem" }}
          >
            <Text mt={2}>+91 9657568826</Text>
            <Text>Mumbai, Maharashtra</Text>
            <Text>coderipple@gmail.com</Text>
          </Flex>
        </GridItem>
        <GridItem className="flex flex-col justify-start mt-8" w="100%" gap={1}>
          <Heading fontSize={{ base: "1.2rem", md: "2rem" }}>
            Follow us on
          </Heading>
          <Box className="flex gap-4 justify-start" mt={2}>
            <a href="https://www.facebook.com/OfficialSGRH" target="display">
              <FacebookIcon />
            </a>
            <a href="https://twitter.com/sgrhindia" target="display">
              {" "}
              <Twitter />
            </a>
            <a href="https://www.instagram.com/sgrhindia/">
              {" "}
              <Instagram />{" "}
            </a>
          </Box>
        </GridItem>
      </Grid>
      <Box
        className="flex items-center justify-end "
        w={{ base: "100%", md: "80%" }}
        mt={2}
      >
        <Text p={"1rem 0"} fontSize={{ base: ".8rem", md: "1rem" }}>
          © Copy right 2023 CodeRipple
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
