import react from 'react';
import { 
    Container,
    Stack, 
    ButtonGroup, 
    IconButton,
    Text,
    Box,
    Image,
    Flex,
    Spacer
} from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

type FooterProps = {
    marginTop: string
}
const Footer = ({ marginTop } : FooterProps): React.ReactElement => {
    return (
        // <Container width="100%" as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
            <Flex mt={marginTop} direction="row" backgroundColor="white" height="60px" pt={2} mb={0}> 
                <Image mt={2} pb={1} ml={8} height="40px" src="/images/logo.png" alt="logo" />
                <Spacer />
                <Text  pt="9px" mr={6} fontSize="sm" >
                    &copy; {new Date().getFullYear()} Linfeng Song. All rights reserved.
                </Text>
                <ButtonGroup variant="ghost" mr={8}>
                <IconButton
                    as="a"
                    href="#"
                    aria-label="LinkedIn"
                    icon={<FaLinkedin fontSize="1.25rem" />}
                />

                
                <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
                <IconButton
                    as="a"
                    href="#"
                    aria-label="Twitter"
                    icon={<FaTwitter fontSize="1.25rem" />}
                />
                </ButtonGroup>
            </Flex> 
            )
        
}

export default Footer;
