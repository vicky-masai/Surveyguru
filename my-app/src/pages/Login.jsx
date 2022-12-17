import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
  export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast()
const handleLogin =()=>{
  if(email=="hajipurtech@gmail.com" && password=="vision@123"){
    toast({
      title: 'Login Successful',
      description: "User found in our database",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    window.location.replace("/dashboard");
  }else{
    toast({
      title: 'Invalid User!',
      description: "User not found in our database",
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }
}
    

    return (
      <>
      <Navbar />
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={(e)=>setPassword(e.target.value)}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                    bg={'#FDC713'}
                    color={'#1C1606'}
                    _hover={{
                      bg: '#FDC712',
                  }} onClick={handleLogin}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
      </>
    );
  }