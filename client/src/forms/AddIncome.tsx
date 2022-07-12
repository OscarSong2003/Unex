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
    Link,
    Input
 } from "@chakra-ui/react";
 import AmountInput from "./formComponents/AmountInput";
 import DatePicker from "react-date-picker";
 import api from "../utils/api";

 type IncomeCategoryProps = {
    onIncChange: (val: string) => void
 }

 const IncomeCategory = ({ onIncChange } : IncomeCategoryProps): React.ReactElement => {
    return (
        <FormControl isRequired my={4}>
                        <FormLabel as="legend" mb={4}>Income/Earning Category</FormLabel>
                        <RadioGroup onChange={(val: string) => onIncChange(val)}>
                            <HStack spacing="40px" mb={4}>
                                <Radio value="family">Family</Radio>
                                <Radio value="job">Job</Radio>
                                <Radio value="friend">Friends</Radio>
                                <Radio value="scholarship">Loans/Scholarships</Radio> 
                            </HStack>
                            <HStack spacing="40px">
                                <Radio value="other">Other</Radio>
                            </HStack>
                        </RadioGroup>
        </FormControl>
    )
}

type AddIncomeProps = {
    userEmail: string;
}

const AddIncome = ({ userEmail } : AddIncomeProps): React.ReactElement => {
    const [date, setDate] = useState(new Date());
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const onAmountChange = (amount: number) => {
        setAmount(amount);
    }
    const onCategoryChange = (val: string) => {
        setCategory(val);
    };

    const sendIncome = async () => {
        const income = {
            email: userEmail,
            date: date,
            amount: amount, 
            category: category,
            name: description
        };
        api.post("/add/income", income)
        .then(res => { console.log(res) })
        .catch(err => { console.log(err) });
    };

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
                    <Divider orientation='horizontal' my={5} />
                    <FormControl isRequired>
                        <FormLabel as="legend" mb={4}>Income Name</FormLabel>
                        <Input
                            focusBorderColor='red.300'
                            placeholder='short name/description of income'
                            onChange={(event: any) => setDescription(event.target.value)}
                        />
                    </FormControl>
                    <IncomeCategory onIncChange={onCategoryChange}/>
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
                        <Link href="/home"> 
                            <Button colorScheme="green" onClick={sendIncome}>Add Funds</Button> 
                        </Link>
                    </Flex>
                </Box>

            </Flex>
        </PageLayout>
    )
}

export default AddIncome; 