const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// // routes
const usersRoute = require('./Routes/v1/users');
const accountsRoutes = require('./Routes/v1/accounts');
const groupsRoutes = require('./Routes/v1/groups');

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

// middleware
app.use(morgan('common'));
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.send({ msg: 'got to express' });
});

app.use('/users', usersRoute);
app.use('/accounts', accountsRoutes);
app.use('/groups', groupsRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
