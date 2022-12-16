import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,Image
} from "@chakra-ui/react";
import { EditIcon,DeleteIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import React,{useState} from "react";
function Dashboard() {
  const [status, setStatus] =useState(false);
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [phone, setPhone]=useState("");
  return (
    <>
    <center><Link to={"/"}><Image src="images/SurveyGuru.png" alt="Dan Abramov" style={{cursor:"pointer",marginTop:"30px"}} /></Link></center>
    <h1 style={{textAlign:"center", marginTop:"20px", fontSize:"20px", fontWeight:"600"}}>Dashboard</h1>
      <div style={{ margin: "40px auto", width: "90%", height: "auto" }}>
        <TableContainer style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"}} className={"ds"}>
          <Table>
            <Thead>
              <Tr style={{backgroundColor:"#2EBF6F"}}>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Phone Number</Th>
                <Th>Edit Users</Th>
                <Th>Delete Users</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td contentEditable={status} onChange={(e)=>setName(e.target.value)}>Vicky Kumar</Td>
                <Td contentEditable={status} onChange={(e)=>setEmail(e.target.value)}>hajipurtech@gmail.com</Td>
                <Td contentEditable={status} onChange={(e)=>setPhone(e.target.value)}>8298262107</Td>
                <Td><button onClick={()=>setStatus(true)}>Edit <EditIcon/></button></Td>
                <Td><button style={{textAlign:"center",fontWeight:"600",color:"white", backgroundColor:"red", padding:"10px 20px"}}>Delete <DeleteIcon/></button></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Dashboard;
