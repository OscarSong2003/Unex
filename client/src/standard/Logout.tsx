import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "@chakra-ui/react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
        colorScheme="orange"
        onClick={() => logout({ returnTo: window.location.origin })}
    >
        Log Out
    </Button>
    );
};

export default LogoutButton;