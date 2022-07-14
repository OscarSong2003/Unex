import React from "react";
import PageLayout from "../standard/PageLayout";
import NavBar from "../standard/NavBar";
import { Flex, Spacer, Box, Heading, Text } from "@chakra-ui/react";
import ActionCenter from "./ActionCenter";
import SpendSummary from "./SpendSummary";
import CategorySummary from "./CategorySummary";
import Footer from "../standard/Footer";

type AccountSummaryProps = {
    userEmail: string,
    userName: string | undefined,
    onAddExpense: () => void,
    onAddIncome: () => void,
    onViewDetailedTopSpending: () => void,
    onViewMonthlySummary: () => void,
    onViewMonthlyTopSpendingBreakdown: () => void,
}
const AccountSummary = ({ userEmail, onAddExpense, onAddIncome, onViewDetailedTopSpending, onViewMonthlySummary,
                          onViewMonthlyTopSpendingBreakdown, userName } : AccountSummaryProps): React.ReactElement => {
    return (
        <PageLayout>
            <NavBar />
            <Flex 
                  h="150px"
                  direction="row"
                  alignItems="top"
                  justifyContent="center"
                  bg="gray.300"
                  borderColor="gray.100"
                  pt="20px"
                  ml="20px"
                  mt="30px"
                  mr="30px">
                
                <Box bg="gray.100"
                    borderColor="gray.100"
                    borderRadius="2xl"
                    borderWidth="2px"
                    textAlign="center"
                    py={5}
                    px={5}

                    height="80%"
                    justifyContent="center"

                >
                    <Heading as="u" size="md"> 
                        Email
                    </Heading>
                    <Text pt={2} fontSize="xl">
                        {userEmail}
                    </Text>
                </Box>

                <Box bg="gray.100"
                    borderColor="gray.100"
                    borderRadius="2xl"
                    borderWidth="2px"
                    textAlign="center"
                    py={5}
                    px={5}
                    ml="150px"
                    height="80%"
                    justifyContent="center"
                    width="280px"
                >
                    <Heading as="u" size="md"> 
                        Name
                    </Heading>
                    <Text pt={3} fontSize="xl">
                        {userName}
                    </Text>
                </Box>

                <Box bg="gray.100"
                    borderColor="gray.100"
                    borderRadius="2xl"
                    borderWidth="2px"
                    textAlign="center"
                    py={5}
                    px={5}
                    ml="150px"
                    height="80%"
                    justifyContent="center"
                    width="280px"
                >
                    <Heading as="u" size="md"> 
                        User Status
                    </Heading>
                    <Text pt={3} fontSize="xl">
                        Signed In
                    </Text>
                </Box>

            </Flex>
            <Flex 
                  h="560px"
                  direction="row"
                  alignItems="top"
                  justifyContent="center"
                //   mt="20px"
                  bg="gray.300"
                  borderColor="gray.100"
                  pt="10px"
                  ml="20px"
                  mr="30px"> 
                  
                <ActionCenter onAddExpense={onAddExpense} onAddIncome={onAddIncome} onViewMonthlySummary={onViewMonthlySummary}/>
                <Spacer />
                <SpendSummary userEmail={userEmail}/>
                <Spacer />
                <CategorySummary userEmail={userEmail} onViewDetailedTopSpending={onViewDetailedTopSpending} 
                                 onViewMonthlyTopSpendingBreakdown={onViewMonthlyTopSpendingBreakdown}/>
            </Flex>
            <Footer marginTop={"60px"}/>
        </PageLayout>
    )
}

export default AccountSummary;