import React, { useState, useEffect } from "react";
import { ObjectId } from "mongoose"
import api from "../utils/api";
import { 
    Flex, 
    Box, 
    Heading, 
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Link,
    Spacer } from "@chakra-ui/react";

type AllIncomeProps = {
    userEmail: string,
}

type IncEntry = {
    category: string,
    amount: number,
    date: string,
    name: string, 
    id: ObjectId
}

const AllIncome = ({ userEmail } : AllIncomeProps): React.ReactElement => {
    const [ allIncome, setAllIncome] = useState<IncEntry[]>([]);
    const [ manualUpdate, setManualUpdate ] = useState(false);

    useEffect(() => {
        getAllIncome();
    }, [])

    const getAllIncome = async () => {
        api.get('/inc/all', { params: { email: userEmail } })
        .then((res:any) => {
            const body = res.data;
            setAllIncome(body);
        })
    }

    const deleteEntry = async (id: ObjectId) => {
        await api.delete(`/inc/delete/${id}`); 
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
                    mt="50px"
                    mr="80px"
                    height="80%"
                    width="1200px"
                    maxHeight="700px"
                    overflow={"auto"}
                    >
                    <Heading as="h3" size="md" mb={4}> 
                        All Incomes
                    </Heading>
                    
                    <TableContainer>
                        <Table variant='striped' colorScheme='teal'>
                            <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Amount</Th>
                                <Th>Category</Th>
                                <Th>Delete</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                                { allIncome.map((entry:any) => (
                                   <Tr>
                                   <Td>{entry.name}</Td>
                                   <Td>${entry.amount}</Td>
                                   <Td>{entry.category}</Td>
                                   <Td>
                                    <Link mr={2} href="/home"><Button colorScheme="facebook" onClick={() => deleteEntry(entry._id)}>Delete</Button></Link>
                                    </Td>
                                   </Tr> 
                                ))
                                }
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
    )
}

export default AllIncome; 