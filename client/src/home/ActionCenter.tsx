import React from 'react';
import { Box, Heading, VStack, Button, Spacer, Link } from "@chakra-ui/react";

const ActionCenter = (): React.ReactElement => {
    return (
        <Box bg="gray.100"
            borderColor="gray.100"
            borderRadius="2xl"
            borderWidth="2px"
            textAlign="center"
            py={7}
            px={5}
            ml="150px"
            height="50%"
        >
            <Heading as="h3" size="md">Action Center</Heading>
            <VStack mt={6}>
                <Link href="/addExp"> 
                    <Button py={5} colorScheme="red">Add Expense</Button>
                </Link>
                <Spacer />
                <Link href="/addInc"> 
                    <Button mx={5} colorScheme="green">Add Earning/Income</Button>
                </Link>
                <Spacer />
                <Button mx={5} colorScheme="facebook">View Monthly Summary</Button>
            </VStack>
        </Box>
    )
}

export default ActionCenter;

