import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
} from "@chakra-ui/react";
import axios from 'axios';
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import React, { useState} from "react";
function Dashboard() {
  const [status, setStatus] = useState(false);
  const [data , setData]= useState([]);
  const[id, setId] = useState();
  axios.get('https://surveyguru-mockserver.onrender.com/api/enquires')
  .then(response => {
    // handle success
    setData(response.data);
  })
  .catch(error => {
    // handle error
    console.log(error);
  });


// delete request 
const handleDelete =()=>{
//   axios.delete(`https://surveyguru-mockserver.onrender.com/api/enquires/${id}`)
//     .then(response => {
//       // handle success
//       console.log(response.data);
//     })
//     .catch(error => {
//       // handle error
//       console.log(error);
//     });  
}

  return (
    <>
      <center>
        <Link to={"/"}>
          <Image
            src="images/SurveyGuru.png"
            alt="Dan Abramov"
            style={{ cursor: "pointer", marginTop: "30px" }}
          />
        </Link>
      </center>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        Dashboard
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "200px",
            height: "60px",
            display: "flex",
            margin: "0px 10px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#2CBC68",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
        >
          <p style={{ fontSize: "20px", fontWeight: "300" }}>
            Total Enquires:{" "}
          </p>
          <span
            style={{ fontWeight: "800", color: "white", padding: "0px 10px" }}
          >
            {data.length}
          </span>
        </div>
        <div
          style={{
            width: "200px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "red",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
        >
          <p style={{ fontSize: "20px", fontWeight: "400" }}>
            Reject Enquires:{" "}
          </p>
          <span
            style={{ fontWeight: "800", color: "white", padding: "0px 10px" }}
          >
          </span>
        </div>
      </div>{" "}
      <div style={{ margin: "40px auto", width: "90%", height: "auto" }}>
        <TableContainer
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
          className={"ds"}
        >
          <Table>
            <Thead>
              <Tr style={{ backgroundColor: "#2EBF6F" }}>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Phone Number</Th>
                <Th>Edit Users</Th>
                <Th>Delete Users</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((el) => (
                <>
                  <Tr>
                    <Td
                      contentEditable={status}
                    >
                      {el.name}
                    </Td>
                    <Td
                      contentEditable={status}
                    >
                      {el.email}
                    </Td>
                    <Td
                      contentEditable={status}
                    >
                      {el.phone}
                    </Td>
                    <Td>
                      <button onClick={() => setStatus(true)}>
                        Edit <EditIcon />
                      </button>
                    </Td>
                    <Td>
                      <button
                        style={{
                          textAlign: "center",
                          fontWeight: "600",
                          color: "white",
                          backgroundColor: "red",
                          padding: "10px 20px",
                        }}
                        onClick={handleDelete}
                        key={el.id}
                      >
                        Delete <DeleteIcon />
                      </button>
                    </Td>
                  </Tr>{" "}
                </>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Dashboard;
