import React from "react";
import { 
    Box, 
    Heading, 
    SimpleGrid, 
    Text,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    HStack, 
    Flex, 
    Spacer, 
    VStack
} from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'

const CategorySummary = (): React.ReactElement => {
    return (
        
            <Box
            bg="gray.100"
            borderColor="gray.100"
            borderRadius="2xl"
            borderWidth="2px"
            textAlign="center"
            px={5}
            py={7}
            mr="150px"
            ml={8}
            height="80%"
            >
            <Heading as="h3" size="md" mb={4}> 
                Top Spend Categories
            </Heading>
            
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                    <Tr>
                        <Th>Category</Th>
                        <Th>Amount</Th>
                        <Th isNumeric>Percentage</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>0.91444</Td>
                    </Tr>
                    </Tbody>
                    <Tfoot>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            <Flex direction="row" alignItems="center" mt="14"> 
                <Button colorScheme='blue'>View Details</Button>
                <Spacer />
                <Button colorScheme='green'>Monthly Breakdown</Button>
            </Flex>
        </Box>
    )
}

export default CategorySummary;