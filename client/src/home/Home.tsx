import React, { useEffect, useState } from "react";
import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import PageLayout from "../standard/PageLayout";
import NavBar from "../standard/NavBar";
import SpendSummary from "./SpendSummary";
import { Container, SimpleGrid, Spacer } from "@chakra-ui/react";
import CategorySummary from "./CategorySummary";
import ActionCenter from "./ActionCenter";
import { useAuth0 } from "@auth0/auth0-react";
import { SERVER_URL } from "../utils/secrets"
import UserAlert from "../standard/Alert";
import api from "../utils/api";

const Home = (): React.ReactElement => {
    const { isLoading, user, isAuthenticated } = useAuth0();
    // const [ userExists, setUserExists ] = useState(false);
    useEffect(() => {
        if (isAuthenticated && user && user.email) {
            api.post("/user/check", {email: user?.email})
            .then((res:any) => { console.log(res); })
            .catch((err:Error) => { console.log(err) })
        } 
    }); 

    if (!isLoading && !isAuthenticated) {
        return ( <UserAlert message={"You need to be logged in to view this resource!"} isNotLoggedIn={true}/> );
    }
    
    // fetch current user's data from API
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
                  
                <ActionCenter />
                <Spacer />
                <SpendSummary userEmail={user?.email}/>
                <Spacer />
                <CategorySummary />
            </Flex>
        </PageLayout>
    )
}

export default Home; 