import { UserContext } from "../contexts/user.context";
import {useContext, useState} from 'react'
import {Button, Container} from '@mui/material';
import { TextField, Card, Typography } from "@mui/material";
import { sendAiRequest } from "@/utils/openai";

const Home = () => {
    const {currentUser} = useContext(UserContext)
    const [prompt, setPrompt] = useState("")
    const [response, setResponse] = useState<string | undefined>("")

    const submitRequest = () => {
        sendAiRequest(prompt, 128).then(response => {     
            console.log(response)       
            setResponse(response)
        })
    }

    return (
        <Container>
            <div><p>welcome {currentUser?.email}</p></div>
            <TextField 
            id="outlined-basic" label="Prompt" variant="outlined"
                type="text" 
                placeholder="How can I help you get a job today?"
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)}
            ></TextField>  
            <Button onClick={() => submitRequest()}>Submit</Button>
            <Button onClick={() => setResponse("")}>Clear</Button>
            <Card>
                <Typography  variant="body1">{response}</Typography></Card>           
        </Container>
    )
}

export default Home