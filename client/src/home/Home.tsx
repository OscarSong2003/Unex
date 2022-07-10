import React, { useEffect, useState } from "react";
import { Box, Button, Flex, HStack, Image, Text, Center, Spinner } from "@chakra-ui/react";
import PageLayout from "../standard/PageLayout";
import NavBar from "../standard/NavBar";
import SpendSummary from "./SpendSummary";
import { Container, SimpleGrid, Spacer } from "@chakra-ui/react";
import CategorySummary from "./CategorySummary";
import ActionCenter from "./ActionCenter";
import AccountSummary from "./AccountSummary";
import { useAuth0 } from "@auth0/auth0-react";
import { SERVER_URL } from "../utils/secrets"
import UserAlert from "../standard/Alert";
import api from "../utils/api";
import { PageState } from "../types/PageState";
import AddExpense from "../forms/AddExpense";
import AddIncome from "../forms/AddIncome";


const Home = (): React.ReactElement => {
    const { isLoading, user, isAuthenticated } = useAuth0();
    const [ pageState, setPageState ] = useState(PageState.HOME); 
    const [ userFetched, setUserFetched ] = useState(false);

    useEffect(() => {
        const checkUser = async () => {
            if (isAuthenticated && user && user.email) {
                await api.post("/user/check", {email: user?.email})
                setUserFetched(true);
            } 
        }
        checkUser(); 
    }); 

    if (!isLoading && !isAuthenticated) {
        return ( <UserAlert message={"You need to be logged in to view this resource!"} isNotLoggedIn={true}/> );
    }
    
    const onAddExpense = () => { setPageState(PageState.ADD_EXPENSE) };
    const onAddIncome = () => { setPageState(PageState.ADD_INCOME) };

    if (userFetched && user && user.email) {
        switch(pageState) {
            case PageState.HOME: {
                return (<AccountSummary userEmail={user.email} onAddExpense={onAddExpense} onAddIncome={onAddIncome} />);
            }
            case PageState.ADD_EXPENSE: {
                return (<AddExpense userEmail={user.email} />);
            }
            case PageState.ADD_INCOME: {
                return (<AddIncome userEmail={user.email} />);
            }
            default: {
                return (<UserAlert message={"You need to be logged in to view this resource!"} isNotLoggedIn={true}/>);
            }
        }
    } else {
        return (
            <PageLayout>
            <Flex w="100%"
                  h="100vh"
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                    mr={4}
                />
                <Image 
                    width={850}
                    src="/images/loadingProf.png"
                    alt="loading profile"
                    mb={8}
                />
                </Flex>
            </PageLayout>
        );
    }
    // fetch current user's data from API
   
}

export default Home; 