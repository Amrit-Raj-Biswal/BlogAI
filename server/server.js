import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors'
import connectDB from './configs/db.js' // write entire file name
import adminRouter from './routes/adminRoutes.js'
import blogRouter from './routes/blogRoutes.js';
dotenv.config(); 

const app = express()

await connectDB()

// Middlewares (all request will pass through them)
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req, res) => res.send("API is working"))  // home route 
app.use('/api/admin', adminRouter)
app.use('/api/blog', blogRouter)

// if port available, env port used else port 3000 will be used
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})


export default app

