import React, { useState } from "react";
import PageLayout from "../standard/PageLayout";   
import NavBar from "../standard/NavBar";
import { 
    Flex, 
    Box,
    Heading,
    Button,
    Radio,
    Divider,
    FormControl,
    FormLabel, 
    RadioGroup, 
    HStack,
    SimpleGrid,
    Spacer,
    Link
 } from "@chakra-ui/react";
 import AmountInput from "./formComponents/AmountInput";
 import DatePicker from "react-date-picker";

 const IncomeCategory = (): React.ReactElement => {
    return (
        <FormControl isRequired my={4}>
                        <Divider orientation='horizontal' my={5} />
                        <FormLabel as="legend" mb={4}>Income/Earning Category</FormLabel>
                        <RadioGroup defaultValue="family">
                            <HStack spacing="30px">
                                <Radio value="family">Family</Radio>
                                <Radio value="job">Job</Radio>
                                <Radio value="friends">Friends</Radio>
                                <Radio value="loan">Loans/Scholarships</Radio> 
                                <Radio value="other">Other</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>
    )
}

const AddIncome = (): React.ReactElement => {
    const [date, setDate] = useState(new Date());
    const [amount, setAmount] = useState(0);

    const onAmountChange = (amount: number) => {
        setAmount(amount);
    }
    return (
        <PageLayout>
            <NavBar />
            <Flex w="100%"
                  h="100vh"
                  direction="column"
                  alignItems="center"
                  justifyContent="top"
                  mt="200px"
                >
                 <Box
                    px={8}
                    py={6}
                    borderWidth="3px"
                    borderColor="gray.300"
                    borderRadius="xl"
                    background="gray.100"
                    width="43%"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    >
                    <Heading as="h5" size="lg">Add Income/Additional Funds</Heading>
                    <IncomeCategory />
                    <AmountInput onAmountChange={onAmountChange}/>
                    <SimpleGrid columns={2} spacing={4} pt={4} mb={5} 
                     alignItems="left"
                     textAlign="left">
                        <FormLabel as="legend">Date of Income (MM/DD/YYYY)</FormLabel>
                        <DatePicker onChange={setDate} value={date} />  
                    </SimpleGrid>
                    <Flex direction="row">
                        <Link href="/home">
                            <Button colorScheme="red">Discard and Return</Button> 
                        </Link>
                        <Spacer />  
                        <Button colorScheme="green">Add Funds</Button> 
                    </Flex>
                </Box>

            </Flex>
        </PageLayout>
    )
}

export default AddIncome; 