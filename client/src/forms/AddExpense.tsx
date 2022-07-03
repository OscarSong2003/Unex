import React, { useState } from "react";
import { Box, Heading, Flex, Divider, RadioGroup, HStack, FormControl, FormLabel, Radio,
         SimpleGrid, Button, Spacer, Link} from "@chakra-ui/react"
import PageLayout from "../standard/PageLayout";
import NavBar from "../standard/NavBar";
import AmountInput from "./formComponents/AmountInput";
import DatePicker from "react-date-picker";

const SpendCategory = (): React.ReactElement => {
    return (
        <FormControl isRequired my={4}>
                        <Divider orientation='horizontal' my={5} />
                        <FormLabel as="legend" mb={4}>Spending Category</FormLabel>
                        <RadioGroup defaultValue="tuition">
                            <HStack spacing="30px">
                                <Radio value="tuition">Tuition</Radio>
                                <Radio value="grocery">Grocery</Radio>
                                <Radio value="food">Food/Snacks</Radio>
                                <Radio value="tech">Tech</Radio> 
                                <Radio value="fun">Entertainment</Radio>
                                <Radio value="other">Other</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>
    )
}

const AddExpense = (): React.ReactElement => { 
    const [date, setDate] = useState(new Date());
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
                    <Heading as="h5" size="lg">Add Expenditure</Heading>
                    <SpendCategory />
                    <AmountInput />
                    <SimpleGrid columns={2} spacing={4} pt={4} mb={5} 
                     alignItems="left"
                     textAlign="left">
                        <FormLabel as="legend">Date of Expenditure (MM/DD/YYYY)</FormLabel>
                        <DatePicker onChange={setDate} value={date} />  
                    </SimpleGrid>
                    <Flex direction="row">
                        <Link href="/home">
                            <Button colorScheme="red">Discard and Return</Button> 
                        </Link>
                        <Spacer />  
                        <Button colorScheme="green">Add Expense</Button> 
                    </Flex>
                    
                </Box> 
            </Flex>
        </PageLayout>
    )
}

export default AddExpense; 
