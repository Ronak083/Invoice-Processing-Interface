
import { Box, Button, TextField, Typography, styled } from "@mui/material"

const component = styled(Box)({
    marginTop: 20,
    '& > p':{
        fontSize: 26,
        marginBottom: 9
    }


})

const AddInvoice = () => {
    return (
        <component>            
            <Typography>Add Invoice</Typography>
            <Box>
                <TextField 
                variant="standard"
                placeholder="Enter Vendor name" />
                <TextField 
                variant="standard"
                placeholder="Enter Product name" />
                <TextField 
                variant="standard"
                placeholder="Enter amount (in  Rs.)"
                type = "number"  />
                <TextField 
                variant="standard"
                placeholder="Enter Date"
                type="date" />
                <Button>
                    Add Invoice
                </Button>
            </Box>
            
        </component>
    )
}

export default AddInvoice