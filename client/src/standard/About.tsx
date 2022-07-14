import React from "react";
import NavBar from "./NavBar";
import PageLayout from "./PageLayout";
import { Center, Box } from "@chakra-ui/react"; 
import TypeAnimation from "react-type-animation";
import "./about.css";

const About = (): React.ReactElement => {
    return (
        <PageLayout>
            <NavBar />
            <Center height="75vh" bg="white.100" justifyContent="center" alignItems="center">
                <Box width="800px" fontSize="30px">
                    <TypeAnimation
                        cursor={true}
                        sequence={[
                        'Unex is a financial tracker for students. You can use it to manage your incomes and expenses. Whether you want to organize your monthly expenses or visualize your financial status, Unex is the right tool for you!',
                        ]}
                        repeat={5}
                        className="text-animation"
                    />
                </Box>
            </Center>


        </PageLayout>
    )
}   

export default About; 