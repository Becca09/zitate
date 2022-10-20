import React from "react";
import Container from "../../components/Dashboard/Container";
import { Routes, Route } from "react-router-dom";
import Quotes from "../Quotes/Quotes";
import '../dashboard/Dashboard.css'
import MyQuotes from "../Quotes/MyQuotes";
import NewQuote from "../Quotes/new-quote/NewQuote";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Container>
        <Routes>
          <Route path="/" element={ <Quotes/>} />
          <Route path="/my-quotes" element={ <MyQuotes/>} />
          <Route path="/new-quote" element={ <NewQuote/>} />
          
        </Routes>
      
      </Container>  
    </div>
  );
};

export default Dashboard;
