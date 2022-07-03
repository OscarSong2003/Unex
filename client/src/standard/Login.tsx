import React from 'react';
import { Button } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = (): React.ReactElement => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button
            rounded="full"
            colorScheme="gray"
            onClick={() => loginWithRedirect()}
        >
            Login To Get Started Here!
        </Button>
    )
}

export default LoginButton;