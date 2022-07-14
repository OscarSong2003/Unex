import React from "react";
import PageLayout from "../standard/PageLayout";
import { Flex, position, Spacer } from "@chakra-ui/react";
import NavBar from "../standard/NavBar";
import ExpenditureCenter from "./ExpenditureCenter";
import MonthlyOverview from "./MonthlyOverview";
import IncomeCenter from "./IncomeCenter";
import Footer from "../standard/Footer";

type MonthlySummaryProps = {
    userEmail: string,
    onReturnHome: () => void,
    onViewExpCat: (cat: string) => void,
    onViewIncCat: (cat: string) => void,
}

const MonthlySummary = ( { userEmail, onReturnHome, onViewExpCat, onViewIncCat } : MonthlySummaryProps): React.ReactElement => {
    return (
        <PageLayout>
            <NavBar />
            <Flex 
                  h="650px"
                  direction="row"
                  alignItems="top"
                  justifyContent="center"
                  mt="40px"
                  bg="gray.300"
                  borderColor="gray.100"
                  pt="50px"
                  ml="20px"
                  mr="30px"> 
                <ExpenditureCenter onReturnHome={onReturnHome} onViewExpCat={onViewExpCat} />
                <Spacer />
                <MonthlyOverview userEmail={userEmail} />
                <Spacer />
                
                <IncomeCenter onViewIncCat={onViewIncCat}/>
            </Flex>
            <Footer marginTop={"90px"}/>

        </PageLayout>
    )
}

export default MonthlySummary;