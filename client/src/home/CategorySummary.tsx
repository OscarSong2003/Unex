import React, { useEffect, useState } from "react";
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
import api from "../utils/api";

type CategorySummaryProps = { 
    userEmail: string;
    onViewDetailedTopSpending: () => void;
    onViewMonthlyTopSpendingBreakdown: () => void;
}

const CategorySummary = ({ userEmail, onViewDetailedTopSpending, onViewMonthlyTopSpendingBreakdown} : CategorySummaryProps): React.ReactElement => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getTopCategories();
    }, []);

    const getTopCategories = async () => {
        if (userEmail) {
            await api.get(`/user/topSpendCat`, {params: { email: userEmail }})
            .then((res:any) => { 
                const body = res.data; 
                console.log('body', body)
                setCategories(body); 
             })
            .catch((err:Error) => { console.log(err) })
        } 
    }

    return (
            <Box
            bg="gray.100"
            borderColor="gray.100"
            borderRadius="2xl"
            borderWidth="2px"
            textAlign="center"
            px={5}
            py={7}
            mr="70px"
            ml="30px"
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
                        { categories.map((category:any) => (
                            <Tr>
                            <Td>{category.name}</Td>
                            <Td>{category.val}</Td>
                            <Td isNumeric>{parseFloat(category.percentage).toFixed(2)}%</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
            <Flex direction="row" alignItems="center" mt="8px"> 
                <Button onClick={() => onViewDetailedTopSpending()} colorScheme='blue'>View Details</Button>
                <Spacer />
                <Button colorScheme='green' onClick={() => onViewMonthlyTopSpendingBreakdown()}>Monthly Breakdown</Button>
            </Flex>
        </Box>
    )
}

export default CategorySummary;