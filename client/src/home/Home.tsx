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
import LoadingPage from "../standard/Loading";
import TopSpendDetails from "../details/TopSpendDetails";
import MonthlySummary from "../monthlySummary/MonthlySummary";
import IndividualExpenditure from "../monthlySummary/individual/Expenditure";
import IndividualIncome from "../monthlySummary/individual/Income";
import TopMonthlySpendDetails from "../details/MonthlyTopSpending";


const Home = (): React.ReactElement => {
    const { isLoading, user, isAuthenticated } = useAuth0();
    const [ pageState, setPageState ] = useState(PageState.HOME); 
    const [ userFetched, setUserFetched ] = useState(false);
    const [ expCat, setExpCat ] = useState("");
    const [ incCat, setIncCat ] = useState("");

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
    const onViewDetailedTopSpending = () => { setPageState(PageState.TOP_SPEND_DETAILS) };
    const onViewMonthlyTopSpendingBreakdown = () => { setPageState(PageState.MONTHLY_TOP_SPEND) };
    const onViewMonthlySummary = () => { setPageState(PageState.MONTHLY_SUMMARY) };
    const onReturnHome = () => { setPageState(PageState.HOME) };
    const onViewExpCat = (cat: string) => { setExpCat(cat); setPageState(PageState.INDIVIDUAL_EXPENDITURE)};
    const onViewIncCat = (cat: string) => { setIncCat(cat); setPageState(PageState.INDIVIDUAL_INCOME)};
    
    if (userFetched && user && user.email) {
        switch(pageState) {
            case PageState.HOME: {
                // return (<TopSpendDetails userEmail={user.email}/>)
                return (<AccountSummary userName={user.name} userEmail={user.email} onAddExpense={onAddExpense} onAddIncome={onAddIncome}
                        onViewDetailedTopSpending={onViewDetailedTopSpending} onViewMonthlySummary={onViewMonthlySummary}
                        onViewMonthlyTopSpendingBreakdown={onViewMonthlyTopSpendingBreakdown}/>);
            }
            case PageState.ADD_EXPENSE: {
                return (<AddExpense userEmail={user.email} />);
            }
            case PageState.ADD_INCOME: {
                return (<AddIncome userEmail={user.email} />);
            }
            case PageState.TOP_SPEND_DETAILS: {
                return (<TopSpendDetails userEmail={user.email} />);
            }
            case PageState.MONTHLY_SUMMARY: {
                return (<MonthlySummary userEmail={user.email} onReturnHome={onReturnHome} onViewExpCat={onViewExpCat} onViewIncCat={onViewIncCat}/>);
            }
            case PageState.INDIVIDUAL_EXPENDITURE: {
                return (<IndividualExpenditure userEmail={user.email} category={expCat} onReturnHome={onReturnHome} onBackToMonthlyOverview={onViewMonthlySummary}  />);
            }
            case PageState.INDIVIDUAL_INCOME: {
                return (<IndividualIncome userEmail={user.email} category={incCat} onReturnHome={onReturnHome} onBackToMonthlyOverview={onViewMonthlySummary} />);
            }
            case PageState.MONTHLY_TOP_SPEND: {
                return (<TopMonthlySpendDetails userEmail={user.email}/>)
            }
            
            default: {
                return (<UserAlert message={"You need to be logged in to view this resource!"} isNotLoggedIn={true}/>);
            }
        }
    } else {
        return (
            <LoadingPage />
        );
    }
    // fetch current user's data from API
   
}

export default Home; 