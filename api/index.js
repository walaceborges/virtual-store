require('dotenv').config();
const express = require('express');
const cors = require('cors')
const userRouter = require('./routers/userRouter')
const loginRouter = require('./routers/loginRouter')
const adminRouter = require('./routers/adminRouter')

const app = express();

app.use(express.json());

app.use(cors())

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/admin', adminRouter);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3000');
});