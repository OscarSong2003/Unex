import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Container } from '@chakra-ui/react'
import { PieChart } from 'react-minimal-pie-chart';

const SpendSummary = (): React.ReactElement => {
    return ( 
        <VStack
            width="80%"
            ml={6}
            >
            <Box
                bg="gray.100"
                borderColor="gray.100"
                borderRadius="2xl"
                borderWidth="2px"
                textAlign="center"
                width="60%"
                px={5}
                py={6}
                >
                <Heading as="h3" size="md"> 
                    Total Summary
                </Heading>
                <Text pt={3} fontSize="xl">Amount Available: $3000</Text>
                <Text py={2} fontSize="xl">Amount Spent: $1000</Text>
            </Box>
            <Box
                alignContent="center"
                width="50%"
                pt={5}
            >
                <PieChart 
                    data={[
                        { title: 'One', value: 10, color: '#E38627' },
                        { title: 'Two', value: 15, color: '#C13C37' },
                        { title: 'Three', value: 20, color: '#6A2135' },
                    ]}
                    />
            </Box>
        </VStack>
    )
}

export default SpendSummary;