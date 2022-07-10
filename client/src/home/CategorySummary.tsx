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
}
const CategorySummary = ({ userEmail } : CategorySummaryProps): React.ReactElement => {
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
                        { categories.map((category:any) => (
                            <Tr>
                            <Td>{category.name}</Td>
                            <Td>{category.val}</Td>
                            <Td isNumeric>{parseFloat(category.percentage).toFixed(2)}%</Td>
                            </Tr>
                        ))}
                    </Tbody>
                    {/* <Tfoot>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                    </Tfoot> */}
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