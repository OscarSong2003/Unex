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
    onAddIncome: () => void,
    onViewDetailedTopSpending: () => void
}
const AccountSummary = ({ userEmail, onAddExpense, onAddIncome, onViewDetailedTopSpending } : AccountSummaryProps): React.ReactElement => {
    return (
        <PageLayout>
            <NavBar />
            <Flex 
                  h="650px"
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
                <CategorySummary userEmail={userEmail} onViewDetailedTopSpending={onViewDetailedTopSpending}/>
            </Flex>
        </PageLayout>
    )
}

export default AccountSummary;