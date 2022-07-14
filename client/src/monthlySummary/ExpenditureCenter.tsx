import React from "react";
import { Box, Heading, VStack, Button, Spacer, Link } from "@chakra-ui/react";


type ExpenditureCenterProps = {
    onViewExpCat: (cat: string) => void,
    onReturnHome: () => void
}

const ExpenditureCenter = ({ onViewExpCat, onReturnHome} : ExpenditureCenterProps): React.ReactElement => {
    return (
        <Box bg="gray.100"
            borderColor="gray.100"
            borderRadius="2xl"
            borderWidth="2px"
            textAlign="center"
            py={7}
            px={5}
            ml="150px"
            height="84%"
        >
            <Heading as="h3" size="md">View Monthly Expenditures</Heading>
            <VStack mt={6}>
                <Button onClick={() => onViewExpCat("tuition")} py={5} colorScheme="red">Tuition Spending</Button>
                <Spacer />
                <Button mx={5} onClick={() => onViewExpCat("food")} colorScheme="green">Food Spending</Button>
                <Spacer />
                <Button mx={5} onClick={() => onViewExpCat("grocery")} colorScheme="facebook">Grocery Spending</Button>
                <Spacer />
                <Button py={5} onClick={() => onViewExpCat("tech")} colorScheme="red">Tech Spending</Button>
                <Spacer />
                <Button mx={5} onClick={() => onViewExpCat("fun")} colorScheme="green">Entertainment Spending</Button>
                <Spacer />
                <Button mx={5} onClick={() => onViewExpCat("other")} colorScheme="facebook">Other Spending</Button>
                <Spacer />
                <Button
                    colorScheme="orange"
                    onClick={() => onReturnHome()}
                >
                    Return Home
                </Button>
            </VStack>
        </Box>
    )
}

export default ExpenditureCenter;

