import express from 'express'
import cors from "cors"


const app = express()

app.use(express.json());
app.use(cors({
    origin: [
    "http://localhost:5172", //fallback call
    "http://localhost:5173",
    "http://localhost:3000",

    //add production url
],
credentials:true,
methods:["GET","POST"],

}));

//API route
app.get('/api/message', (req, res) => {
    res.json({ message: "Hello! server is running" })
})

const PORT = 4000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})