import express from 'express';
import routes from './src/routes/Student.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv'



const app = express();
//const PORT = process.env.PORT || 3000;

dotenv.config()
const uri = "mongodb+srv://fatimzahra:anahna1993@cluster0.etmbixq.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json());

app.get('/', (req, res) =>
  res.send(`Node and express server running `)
)

routes(app);

app.listen(process.env.PORT || 5000, () =>
{console.log(`Your server is running on port ${PORT}`)
 })