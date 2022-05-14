require('dotenv').config();
const express = require('express');
const cors = require('cors')
const userRouter = require('./routers/userRouter')
const loginRouter = require('./routers/loginRouter')
const adminRouter = require('./routers/adminRouter')
const productRouter = require('./routers/productRouter')

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(cors())

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/admin', adminRouter);
app.use('/product', productRouter);

app.listen(PORT, () => {
  console.log('Aplicação ouvindo na porta: ', PORT);
});