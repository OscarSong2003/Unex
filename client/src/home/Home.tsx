import React from "react";
import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import PageLayout from "../standard/PageLayout";
import NavBar from "../standard/NavBar";
import SpendSummary from "./SpendSummary";
import { Container, SimpleGrid, Spacer } from "@chakra-ui/react";
import CategorySummary from "./CategorySummary";
import ActionCenter from "./ActionCenter";

const Home = (): React.ReactElement => {
    return (
        <PageLayout>
            <NavBar />
            <Flex w="80%%"
                  h="600px"
                  direction="row"
                  alignItems="top"
                  justifyContent="center"
                  mt="150px"
                  bg="gray.300"
                  borderColor="gray.100"
                  pt="50px"
                  ml="20px"
                  mr="30px"> 
                  
                {/* <SimpleGrid columns={3} spacing={4} pt={4}> */}
               
            {/* <HStack > */}
                <ActionCenter />
                <Spacer />
                <SpendSummary />
                <Spacer />
                <CategorySummary />
            {/* </HStack> */}
                    
                    
            </Flex>
                
                {/* </SimpleGrid> */}
        
            


            {/* <Flex 
                direction="column"
                alignItems="center"
                justifyContent="center" 
                justify="center"
                w="100%"
            >
                
            </Flex> */}
        </PageLayout>
    )
}

export default Home; 