import express from 'express';
import routes from './src/routes/Student.js';
import mongoose from 'mongoose';



const app = express();
const PORT = 4000;


const uri = "mongodb+srv://fatimzahra:anahna1993@cluster0.nnpe6.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json());

app.get('/', (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
)

routes(app);

app.listen(PORT, () =>
console.log(`Your server is running on port ${PORT}`))