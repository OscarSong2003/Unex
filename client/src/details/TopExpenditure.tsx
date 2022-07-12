import React, { useState } from "react";
import { 
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Heading,
}  from "@chakra-ui/react";
import { CategoryInfo, EntryInfo } from "./TopSpendDetails";

type TopExpenditureProps = { 
    categoryInfo: CategoryInfo,
    catEntries: EntryInfo[],
}

const TopExpenditure = ({categoryInfo, catEntries} : TopExpenditureProps): React.ReactElement => {
    const [ currentDate, setCurrentDate] = useState(new Date());
    return (
        <Box
                        bg="gray.100"
                        borderColor="gray.100"
                        borderRadius="2xl"
                        borderWidth="2px"
                        textAlign="center"
                        px={2}
                        py={7}
                        mr="100px"
                        ml={8}
                        height="80%"
                        >
                        <Heading as="h3" size="md" mb={4}> 
                            Top {categoryInfo.category} Expenditures
                        </Heading>
                        <TableContainer>
                        <Table variant='striped' colorScheme='teal'>
                            <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Amount</Th>
                                <Th>Date</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                                { catEntries.map((entry: any) => (
                                    <Tr>
                                    <Td>{entry.name}</Td>
                                    <Td>${entry.amount}</Td>
                                    <Td>{entry.date}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                            <Tfoot>
                            <Tr>
                                <Th fontSize="16px">Total:</Th>
                                <Th fontSize="16px">${categoryInfo.amount}</Th>
                                <Th fontSize="16px">{`${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`}</Th>
                            </Tr>
                            </Tfoot>
                                </Table>
                            </TableContainer>
                            
                    </Box>
    )

}

export default TopExpenditure; 