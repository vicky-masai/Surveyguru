import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { Link } from "react-router-dom";
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
  export default function SignupCard() {
    const toast = useToast()
    const [showPassword, setShowPassword] = useState(false);
  const[name, setName]=useState("");
  const[email, setEmail]=useState("");
  const[phone, setPhone]=useState("");
  const[password, setPassword]=useState("");
const handleSubmit =(e)=>{

  e.preventDefault();
    if(name=="" && email =="" && phone==""&&password==""){
      toast({
        title: 'Invalid data',
        description: "Please enter your valid details",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }else{
      axios({
        method: 'post',
        url: 'http://localhost:3080/api/enquires',
        data: {
          id:email,
          name,email,phone,password
        }
      });
     window.location.replace("/submit");
    }
  }
    return (
      <>
      <Navbar />
      <Flex style={{marginTop:"30px"}}
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
             Enquire now
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Fill the details for survey enquire
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'} style={{width:"400px", height:"auto", margin:"20px auto"}}
            p={8}>
            <Stack spacing={4}>
            <FormControl>
            <FormLabel>Full Name</FormLabel>
                <Input type="name" onChange={(e)=>setName(e.target.value)} />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="phone" isRequired>
                <FormLabel>Phone no</FormLabel>
                <Input type="number"  onChange={(e)=>setPhone(e.target.value)}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} onChange={(e)=>setPassword(e.target.value)}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'#FDC713'}
                  color={'#1C1606'}
                  _hover={{
                    bg: '#FDC712',
                  }} onClick={ handleSubmit}>
              Submit
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'#2CBD6C'} to={"/login"}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
      </>
    );
  }