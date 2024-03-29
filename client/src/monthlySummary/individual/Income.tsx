import react, { useEffect, useState } from "react";
import PageLayout from "../../standard/PageLayout";
import NavBar from "../../standard/NavBar";
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
    Spacer } from "@chakra-ui/react";
import api from "../../utils/api";
import Footer from "../../standard/Footer";

type IndividualIncomeProps = { 
    userEmail: string,
    category: string,
    onReturnHome: () => void,
    onBackToMonthlyOverview: () => void,
}

type EntryInfo = {
    name: string,
    amount: number,
    date: Date,
}

const IndividualIncome = ({ userEmail, category, onReturnHome, onBackToMonthlyOverview } : IndividualIncomeProps) => {
    const [catEntries, setCatEntries] = useState<EntryInfo[]>([]);

    useEffect(() => {
        getIndividualCategory();
    }, []); 

    const getIndividualCategory = async () => {
        await api.get(`/monthly/byIncCat`, {params: { email: userEmail, category: category }})
        .then((res:any) => { 
            const body = res.data; 
            setCatEntries(body);
        })
    }
    
    return (
        <PageLayout>
            <NavBar />
            <Flex 
                  h="650px"
                  direction="row"
                  alignItems="top"
                  justifyContent="center"
                  mt="40px"
                  bg="gray.300"
                  borderColor="gray.100"
                  pt="50px"
                  ml="20px"
                  mr="30px"
                  >
                <Box
                    bg="gray.100"
                    borderColor="gray.100"
                    borderRadius="2xl"
                    borderWidth="2px"
                    textAlign="center"
                    px={5}
                    py={7}
                    overflow={"auto"}
                    height="90%"
                    width="800px"
                    >
                    <Heading as="h3" size="md" mb={4}> 
                        {category.charAt(0).toUpperCase() + category.slice(1)} Monthly Incomes
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
                                { catEntries.map((entry:any) => (
                                   <Tr>
                                   <Td>{entry.name}</Td>
                                   <Td>${entry.amount}</Td>
                                   <Td>{entry.date}</Td>
                                   </Tr> 
                                ))
                                }
                            </Tbody>
                        </Table>
                    </TableContainer>
                    <Flex direction="row" alignItems="center" mt="14"> 
                        <Button colorScheme='blue' onClick={() => onReturnHome()}>Return Home</Button>
                        <Spacer />
                        <Button colorScheme='green' onClick={() => onBackToMonthlyOverview()}>Back to Overview</Button>
                    </Flex>
                </Box>
            </Flex>
            <Footer marginTop="40px"/>
        </PageLayout>
    )
    
}

export default IndividualIncome; 