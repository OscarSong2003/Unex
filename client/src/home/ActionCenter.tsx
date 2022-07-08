import React from 'react';
import { Box, Heading, VStack, Button, Spacer, Link } from "@chakra-ui/react";
import LogoutButton from '../standard/Logout';

type ActionCenterProps = {
    onAddExpense: () => void;
    onAddIncome: () => void;
}

const ActionCenter = ({ onAddExpense, onAddIncome }: ActionCenterProps): React.ReactElement => {
    return (
        <Box bg="gray.100"
            borderColor="gray.100"
            borderRadius="2xl"
            borderWidth="2px"
            textAlign="center"
            py={7}
            px={5}
            ml="150px"
            height="56%"
        >
            <Heading as="h3" size="md">Action Center</Heading>
            <VStack mt={6}>
                <Button onClick={() => onAddExpense()} py={5} colorScheme="red">Add Expense</Button>
                <Spacer />
                <Button mx={5} onClick={() => onAddIncome} colorScheme="green">Add Earning/Income</Button>
                <Spacer />
                <Button mx={5} colorScheme="facebook">View Monthly Summary</Button>
                <Spacer />
                <LogoutButton />
            </VStack>
        </Box>
    )
}

export default ActionCenter;

