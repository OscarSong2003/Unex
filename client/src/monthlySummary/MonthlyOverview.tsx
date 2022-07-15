import React, { useEffect, useState } from "react";
import { VStack, Box, Heading, Text, Divider } from "@chakra-ui/react";
import api from "../utils/api";
import { PieChart } from 'react-minimal-pie-chart';

type MonthlyOverviewProps = {
    userEmail: string;
}

const MonthlyOverview = ({ userEmail } : MonthlyOverviewProps): React.ReactElement => {
    const [totalSpending, setTotalSpending] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);

    useEffect(() => {
        getMonthlyOverview();
    })

    const getMonthlyOverview = async () => {
        await api.get('/monthly/overview', { params: { email: userEmail }}) 
        .then((res: any) => {
            const body = res.data;
            console.log('body', body)
            setTotalSpending(body.totalSpending);
            setTotalIncome(body.totalIncome);
        })

    }
    return ( 
        <VStack
            width="80%"
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
                    Total Monthly Summary
                </Heading>
                <Text pt={3} fontSize="xl">Total Spending: ${totalSpending.toFixed(2)}</Text>
                <Text py={2} fontSize="xl">Total Income: ${totalIncome.toFixed(2)}</Text>
                <Divider orientation='horizontal' />
                <Text py={2} fontSize="xl">Total Balance: ${(totalIncome - totalSpending).toFixed(2)}</Text>
            </Box>
            <Box
                alignContent="center"
                width="100%"
                maxWidth="400px"
            >
                <PieChart 
                    // animate={true}
                    // animationDuration={500}
                    // animationEasing="ease-out"
                    label={({dataEntry}) => {   
                        return (totalSpending != 0 || totalIncome != 0 ) ? dataEntry.title : 'Insufficient Data';
                    }}
                    segmentsStyle={ { 
                        transition: 'stroke 0.5s ease',
                        width: '120%',
                        height: "120%",
                        strokeWidth: '25px',
                        
                    } }
                    totalValue={totalSpending + totalIncome} 
                    labelStyle={
                        {
                            fontSize: '6px',
                            fontFamily: "Lucida Console",
                            textDecoration: 'underline'
                        }
                    }
                    data={[
                        { title: totalSpending == 0 ? ' ' : 'Spending', value: totalSpending, color: '#80CD91' },
                        { title: totalIncome == 0 ? ' ' : 'Income', value: totalIncome, color: '#F3C18C' },
                    ]}
                    />
            </Box>
        </VStack>
    )
}

export default MonthlyOverview;