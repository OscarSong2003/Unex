import React from "react";
import PageLayout from "./PageLayout";
import { Flex, Spinner, Image } from "@chakra-ui/react";

const LoadingPage = (): React.ReactElement => {
    return (
        <PageLayout>
            <Flex w="100%"
                  h="100vh"
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                    mr={4}
                />
                <Image 
                    width={850}
                    src="/images/loadingProf.png"
                    alt="loading profile"
                    mb={8}
                />
            </Flex>
        </PageLayout>
    )
}

export default LoadingPage;