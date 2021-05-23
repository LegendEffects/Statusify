import * as React from "react";

import { Container, Flex, Link } from "@chakra-ui/layout";

import PageHeader from "../elements/global/header/PageHeader";
export interface DefaultLayoutProps {
  children?: React.ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Flex direction="column">
      <PageHeader />

      {children}

      <Container maxW="container.xl" textAlign="right" py={8}>
        <Link color="gray.500" href="https://github.com/legendeffects/statusify">Powered by Statusify</Link>
      </Container>
    </Flex>
  )
}