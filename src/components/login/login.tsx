import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './login.css';
import FormComponent from '../shared/formComponent';
import { Button } from 'react-bootstrap';
import { LOGINPAGEIMAGE, LOGO } from '../../lib/images';
import { Box, Center, Image } from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react'

export default function Login() {
    return (
        <Container fluid className="h-screen login-container">
            <Row className="h-full">
                <Col lg="4" className='left-col-login'>
                    <Center w="100%" h="80%">
                        <VStack spacing="50" px={50}>
                            <Box>
                                <img src={LOGO}></img>
                            </Box>
                            <Box w="100%">
                                <FormComponent></FormComponent>
                            </Box>
                        </VStack>
                    </Center>
                </Col>
                <Col className='bg-teal-300 p-0'>
                    <Box h="100%">
                        <Image h="100%" src={LOGINPAGEIMAGE} alt='Not found :(' />
                    </Box>
                </Col>
            </Row>
        </Container>
    )
}