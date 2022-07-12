import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Container } from '@chakra-ui/react'
import { PieChart } from 'react-minimal-pie-chart';
import axios from 'axios';
import { SERVER_URL } from "../utils/secrets";
import api from "../utils/api";

type SpendSummaryProp = {
    userEmail: string | undefined
}

const SpendSummary = ({ userEmail }: SpendSummaryProp): React.ReactElement => {
    const [ amountAvailable, setAmountAvailable ] = useState(0);
    const [ amountSpent, setAmountSpent ] = useState(0);
    const [ isInDeficit, setIsInDeficit ] = useState(false);
    const [ deficit, setDeficit ] = useState(0);
    
    useEffect (() => {
         // get summary info
        getOverview();
    }); 
     
    const getOverview = () => {
        if (userEmail) {
            api.get(`/user/overview`, {params: { email: userEmail }})
            .then((res:any) => { 
                const body = res.data; 
                console.log(body);
                console.log(res.data.amountAvailable);
                setAmountAvailable(res.data.amountAvailable);
                // check if in deiicit
                if (amountAvailable && amountAvailable < 0) {
                    // in deficit, so set it to true
                    setIsInDeficit(true);
                    setDeficit(amountAvailable * -1);
                } 
                setAmountSpent(res.data.amountSpent);
             })
            .catch((err:Error) => { console.log(err) })
        } 
    }
    return ( 
        <VStack
            width="80%"
            ml={6}
            >
            <Box
                bg="gray.100"
                borderColor="gray.100"
                borderRadius="2xl"
                borderWidth="2px"
                textAlign="center"
                width="60%"
                px={5}
                py={6}
                >
                <Heading as="h3" size="md"> 
                    Total Summary
                </Heading>
                <Text pt={3} fontSize="xl">Amount Available: ${
                (!isInDeficit) ? amountAvailable.toFixed(2) : 0}</Text>
                <Text py={2} fontSize="xl">Amount Spent: ${amountSpent ? amountSpent.toFixed(2) : "0.00"}</Text>
                {isInDeficit && <Text py={2} fontSize="xl" color="red.600">Net Deficit: ${(deficit).toFixed(2) }</Text>}
            </Box>
            <Box
                alignContent="center"
                width="50%"
                maxWidth="400px"
            >
                <PieChart 
                    // animate={true}
                    // animationDuration={500}
                    // animationEasing="ease-out"
                    label={({dataEntry}) => {   
                        return dataEntry.title;
                    }}
                    segmentsStyle={ { 
                        transition: 'stroke 0.5s ease',
                        width: '120%',
                        height: "120%",
                        strokeWidth: '25px',
                        
                    } }
                    totalValue={isInDeficit ? amountSpent : amountSpent + amountAvailable} 
                    labelStyle={
                        {
                            fontSize: '6px',
                            fontFamily: "Lucida Console",
                            textDecoration: 'underline'
                        }
                    }
                    data={[
                        { title: isInDeficit ? ' ' : 'Available', value: isInDeficit ? 0 : amountAvailable, color: '#80CD91' },
                        { title: isInDeficit ? 'Deficit' : 'Spent', value: amountSpent, color: '#F3C18C' },
                    ]}
                    />
            </Box>
        </VStack>
    )
}

export default SpendSummary;