import React from "react";
import Header from "../components/Header";
import AddInvoice from "../components/AddInvoices";
import { Box , Typography, Button} from "@mui/material";

const Home = () => {
    return (
        <React.Fragment>
            <Header/>
            <Box style = {{margin: 20}}>
            <Typography variant = "h4">Pending Invoices</Typography>
            <Button variant = "contained" style={{marginTop: 20}}>Add Invoice:</Button>
            <AddInvoice/>
            </Box>
            
        </React.Fragment>
        
    )
}

export default Home;