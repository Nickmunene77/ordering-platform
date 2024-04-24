import express, { Request, Response } from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'

mongoose.connect(process.env.DATABASE as string).then(() => {
  console.log('Database connected')
})
const PORT = 7000 || process.env.PORT

const app = express()
app.use(express.json())
app.use(cors())

app.get('/test', async (req: Request, res: Response) => {
  res.json({ message: 'Hello World' })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
