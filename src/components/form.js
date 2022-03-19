import { useState } from "react";
import { TextField, FormLabel } from '@mui/material';
import "../styles.css";
function Form(){
    const [msg, setMsg] = useState("");
    function handleSubmit(event){
        setMsg("");
        event.preventDefault();
    }

    function handleChange(event){
        setMsg(event.target.value);
    }
    return(
        <div className="textbox" >
            <form onSubmit={handleSubmit} className="form">
                <FormLabel>
                    <TextField 
                    type={"text"}
                    value={msg}
                    onChange={handleChange}
                    sx={{
                        width: 600,
                    }}
                    InputProps={{ minRows:4, multiline: true, maxRows: 4}}
                    />
                </FormLabel>
            </form>
        </div>
    );
}

export default Form;