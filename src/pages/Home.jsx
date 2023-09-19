import React, { useState } from "react";
import Header from "../components/Header";
import AddInvoice from "../components/AddInvoices";
import { Box , Typography, Button} from "@mui/material";



const Home = () => {
    const [addInvoice, setAddInvoice] = useState(false);

    const toggleInvoice = () => {
        setAddInvoice(true);
    }

    return (
        <React.Fragment>
            <Header/>
            <Box style = {{margin: 20}}>
            <Typography variant = "h4">Pending Invoices</Typography>
            { !addInvoice && <Button 
                    variant = "contained" 
                    style={{marginTop: 20}}
                    onClick={() => toggleInvoice()}
                >Add Invoice:</Button>
            }
            { addInvoice && <AddInvoice/>}
            
            </Box>
            
        </React.Fragment>
        
    )
}

export default Home;