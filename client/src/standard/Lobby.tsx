import React from 'react';
import PageLayout from './PageLayout';
import NavBar from './NavBar';
import { Center, Heading, Flex, Image, Button, HStack, Link } from '@chakra-ui/react';
import LoginButton from './Login';


const Lobby = (): React.ReactElement => { 
    return (
        <PageLayout>
            <Flex w="100%"
                  h="100vh"
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                <Image 
                    width={850}
                    src="/images/slogan.png"
                    alt="Undex Slogan"
                    mb={8}
                />
                {/* <Flex w="35%" direction="row" justifyContent="center" >
                    <Button colorScheme="green">Login To Get Started Here!</Button>
                    <Spacer />
                    <Button colorScheme="red">Learn More About Unex</Button>
                    
                </Flex> */}
                <HStack alignItems="center" justifyContent="center" spacing={8}>
                    <LoginButton />
                    <Link href="/about">
                        <Button rounded="full" colorScheme="facebook">
                            Learn More About Unex
                        </Button>
                    </Link>
                </HStack>


            </Flex>
        </PageLayout>
    )

}

export default Lobby; 