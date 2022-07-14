import React from "react";
import { Box, Heading, VStack, Button, Spacer, Link } from "@chakra-ui/react";
import LogoutButton from '../standard/Logout';

type IncomeCenterProps = {
    onViewIncCat: (cat: string) => void,
}

const IncomeCenter = ({ onViewIncCat } : IncomeCenterProps): React.ReactElement => {
    return (
        <Box bg="gray.100"
            borderColor="gray.100"
            borderRadius="2xl"
            borderWidth="2px"
            textAlign="center"
            py={7}
            px={5}
            mr="150px"
            height="73%"
            width="24%"
        >
            <Heading as="h3" size="md">View Monthly Income</Heading>
            <VStack mt={6}>
                <Button py={5} onClick={() => onViewIncCat("family")} colorScheme="red">Family Funds</Button>
                <Spacer />
                <Button mx={5} onClick={() => onViewIncCat("job")} colorScheme="green">Job Income</Button>
                <Spacer />
                <Button mx={5} onClick={() => onViewIncCat("friend")} colorScheme="facebook">Friends Transfer</Button>
                <Spacer />
                <Button py={5} onClick={() => onViewIncCat("scholarship")} colorScheme="red">Scholarship/Loans</Button>
                <Spacer />
                <Button mx={5} onClick={() => onViewIncCat("other")} colorScheme="green">Other Income</Button>
                <Spacer />
                <LogoutButton />
            </VStack>
        </Box>
    )
}

export default IncomeCenter;

