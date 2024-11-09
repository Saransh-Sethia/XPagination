import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";
import Pagination from "./Pagination";

const Home = () => {
  const [usersDetails, setUserDetails] = useState([]);
  const [currentPage, setCurentPage] = useState(1);
  const [currentUsers, setCurrentUsers] = useState([]);
  const usersPerPage = 10;
  const API_URL =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  const fetchDetails = async () => {
    try {
      const response = await axios.get(API_URL);
      const result = await response.data;
      console.log("user-details", result);
      setUserDetails(result);
      setCurrentUsers(result)
    } catch (error) {
      console.log("error-1", error);
      alert("failed to fetch data.");
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  useEffect(() => {
    let indexOfLastUser = currentPage * usersPerPage;
    let indexOfFirstUser = indexOfLastUser - usersPerPage;

    let userSlice = usersDetails.slice(indexOfFirstUser, indexOfLastUser);
    if (userSlice.length === 0) {
      setCurentPage(1);
    }
    setCurrentUsers(userSlice);
  }, [usersDetails, currentPage]);

  const previousPage = () => {
    if(currentPage > 1){
      setCurentPage(currentPage - 1)
    }
    
  }

  const nextPage = (maxPageLength) => {
    if(currentPage < maxPageLength){
      setCurentPage(currentPage + 1);
    }
   
  }
  


  return (
    <div>
      <h1>Employee Data Table</h1>
      <Table usersDetails={usersDetails} currentUsers={currentUsers} />
      <Pagination
      usersPerPage={usersPerPage}
      nextPage={nextPage}
      previousPage={previousPage}
      currentPage={currentPage}
      totalUsers={usersDetails.length}
      />
    </div>
  );
};

export default Home;
