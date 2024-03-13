import { Button } from "@mui/material";


const CustomButtons = ()=>{
    return(
        <>
        <div style={container}>
            <Button variant="contained">Click</Button>
            <Button>hello</Button>
            <Button variant="contained" disableElevation color="palette.secondary.light">Click</Button>
            <Button disabled>Login</Button>
            <Button variant="outlined" >Login</Button>
        </div>
        </>
    )
}
export default CustomButtons;


const container = {
    display : "flex",
    justifyContent : "center",
    alignItems:"center",
    flexDirection: "column",
    gap: 10,
}