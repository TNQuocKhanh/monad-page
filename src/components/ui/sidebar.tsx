import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { IoCloseCircle } from "react-icons/io5";

interface SidebarProps {
}

export const SideBar = (props: SidebarProps) => {
  const {

  } = props

  return (
    <Box
      left={0}
      top={0}
      height="100vh"
      width="250px"
      bg="gray.800"
      color="white"
      padding="1rem"
      flexDirection='column'
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">
          MONAD
        </Text>
      </Flex>
      <Box mt="2rem">
        <Link href="/">
          <Text mb="1rem" cursor="pointer">Home</Text>
        </Link>
        <Link href="/ecosystem">
          <Text mb="1rem" cursor="pointer">Ecosystem</Text>
        </Link>
        <Link href="/settings">
          <Text mb="1rem" cursor="pointer">Settings</Text>
        </Link>
        <Link href="/profile">
          <Text mb="1rem" cursor="pointer">Profile</Text>
        </Link>
      </Box>
    </Box>
  )
}