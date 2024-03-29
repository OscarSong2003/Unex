import React, { useState, useEffect} from "react";
import { Box, Heading, Flex, Divider, RadioGroup, HStack, FormControl, FormLabel, Radio,
         SimpleGrid, Button, Spacer, Link, Input} from "@chakra-ui/react"
import PageLayout from "../standard/PageLayout";
import NavBar from "../standard/NavBar";
import AmountInput from "./formComponents/AmountInput";
import DatePicker from "react-date-picker";
import api from "../utils/api";
import AllExpenditure from "./AllExpenditure";
import Footer from "../standard/Footer";
import { ExpState } from "../types/ExpState";
import LoadingPage from "../standard/Loading";

type SpendCategoryProps = {
    onCatChange : (val: string) => void;
}

const SpendCategory = ({ onCatChange } : SpendCategoryProps): React.ReactElement => {
    return (
        <FormControl isRequired my={4}>
                        <FormLabel as="legend" mb={4}>Spending Category</FormLabel>
                        <RadioGroup onChange={(val: string) => onCatChange(val)}>
                            <HStack spacing="40px" mb={4}>
                                <Radio value="tuition">Tuition</Radio>
                                <Radio value="grocery">Grocery</Radio>
                                <Radio value="food">Food/Snacks</Radio>
                            </HStack>
                            <HStack spacing="40px">
                                <Radio value="tech">Tech</Radio> 
                                <Radio value="fun">Entertainment</Radio>
                                <Radio value="other">Other</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>
    )
}

type AddExpenseProps = {
    userEmail: string
}

const AddExpense = ({ userEmail } : AddExpenseProps): React.ReactElement => { 
    const [date, setDate] = useState(new Date());
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    
    const onAmountChange = (amount: number) => {
        setAmount(amount);
    };

    const onCategoryChange = (val: string) => {
        setCategory(val);
    };


    const sendExpense = async () => {
        const expense = {
            email: userEmail,
            date: date,
            amount: amount, 
            category: category,
            name: description
        };
        api.post("/add/expense", expense)
        .then(res => { console.log(res) })
        .catch(err => { console.log(err) });
    };

    return (
        <PageLayout> 
            <NavBar />
            <Flex 
                w="100%"
                h="100vh"
                direction="row">
                    <Flex w="100%"
                    h="100vh"
                    direction="column"
                    alignItems="center"
                    justifyContent="top"
                    mt="50px"
                    >
                        <Box
                            px={8}
                            py={6}
                            borderWidth="3px"
                            borderColor="gray.300"
                            borderRadius="xl"
                            background="gray.100"
                            width="70%"
                            justifyContent="center"
                            alignItems="center"
                            textAlign="center"
                            >
                            <Heading as="h5" size="lg">Add Expenditure</Heading>
                            <Divider orientation='horizontal' my={5} />
                            <FormControl isRequired>
                                <FormLabel as="legend" mb={4}>Expenditure Name</FormLabel>
                                <Input
                                    focusBorderColor='red.300'
                                    placeholder='short name/description of expense'
                                    onChange={(event: any) => setDescription(event.target.value)}
                                />
                            </FormControl>
                            
                            <SpendCategory onCatChange={onCategoryChange} />
                            <AmountInput onAmountChange={onAmountChange}/>
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
                                <Link href="/home"> 
                                    <Button colorScheme="green" onClick={() => sendExpense()}>Add Expense</Button>
                                </Link> 
                            </Flex>
                        </Box> 
                    </Flex>
                <AllExpenditure userEmail={userEmail} />
            </Flex>
            <Footer marginTop="-20px" />
        </PageLayout>
    )

   
}

export default AddExpense; 
