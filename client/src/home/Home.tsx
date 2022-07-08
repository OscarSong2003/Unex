import React, { useEffect, useState } from "react";
import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
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

const Home = (): React.ReactElement => {
    const { isLoading, user, isAuthenticated } = useAuth0();
    const [ pageState, setPageState ] = useState(PageState.HOME); 
    const [ userId, setUserId ] = useState(null);

    useEffect(() => {
        if (isAuthenticated && user && user.email) {
            api.post("/user/check", {email: user?.email})
            .then((res:any) => { console.log(res); setUserId(res.data._id) })
            .catch((err:Error) => { console.log(err) })
        } 
    }); 

    if (!isLoading && !isAuthenticated) {
        return ( <UserAlert message={"You need to be logged in to view this resource!"} isNotLoggedIn={true}/> );
    }
    
    const onAddExpense = () => { setPageState(PageState.ADD_EXPENSE) };
    const onAddIncome = () => { setPageState(PageState.ADD_INCOME) };

    if (user && user.email) {
        switch(pageState) {
            case PageState.HOME: {
                return (<AccountSummary userEmail={user.email} onAddExpense={onAddExpense} onAddIncome={onAddIncome} />);
            }
            case PageState.ADD_EXPENSE: {
                return (<AddExpense userEmail={user.email} />);
            }
            default: {
                return (<UserAlert message={"You need to be logged in to view this resource!"} isNotLoggedIn={true}/>);
            }
        }
    } else {
        return ( <UserAlert message={"You need to be logged in to view this resource!"} isNotLoggedIn={true}/> );
    }
    // fetch current user's data from API
   
}

export default Home; 