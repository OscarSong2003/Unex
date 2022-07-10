import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Spacer, 
    Flex
} from '@chakra-ui/react'
import React from "react"
import LoginButton from './Login'
import PageLayout from './PageLayout'

type UserAlertProps = {
    message: string,
    isNotLoggedIn: boolean,
}

const UserAlert = ({ message, isNotLoggedIn}: UserAlertProps): React.ReactElement => {
    return (
        <PageLayout>
            <Flex >
                <Alert status='error'>
                <AlertIcon />
                { message }
                <Spacer />
                { isNotLoggedIn && (<LoginButton />) }
            </Alert>
            </Flex>
        </PageLayout>   
    )
}

export default UserAlert;