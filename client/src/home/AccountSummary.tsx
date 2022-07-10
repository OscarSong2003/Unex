import React from "react";
import PageLayout from "../standard/PageLayout";
import NavBar from "../standard/NavBar";
import { Flex, Spacer } from "@chakra-ui/react";
import ActionCenter from "./ActionCenter";
import SpendSummary from "./SpendSummary";
import CategorySummary from "./CategorySummary";

type AccountSummaryProps = {
    userEmail: string,
    onAddExpense: () => void,
    onAddIncome: () => void
}
const AccountSummary = ({ userEmail, onAddExpense, onAddIncome } : AccountSummaryProps): React.ReactElement => {
    return (
        <PageLayout>
            <NavBar />
            <Flex w="80%%"
                  h="600px"
                  direction="row"
                  alignItems="top"
                  justifyContent="center"
                  mt="150px"
                  bg="gray.300"
                  borderColor="gray.100"
                  pt="50px"
                  ml="20px"
                  mr="30px"> 
                  
                <ActionCenter onAddExpense={onAddExpense} onAddIncome={onAddIncome}/>
                <Spacer />
                <SpendSummary userEmail={userEmail}/>
                <Spacer />
                <CategorySummary userEmail={userEmail} />
            </Flex>
        </PageLayout>
    )
}

export default AccountSummary;