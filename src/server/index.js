import express from 'express';
import bodyParser from 'body-parser';
// import.meta.env;

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(express.json());

app.get('/api/hello', (req, res) => {
   res.json({ message: 'Hey! Hello Express! Testing...' });
});

/* Mock data */

let data = [
   { id: 1, username: 'john_doe', email: 'john.doe@example.com' },
   { id: 2, username: 'jane_smith', email: 'jane.smith@example.com' },
];

app.get('https://candidat.adcleek.it/cities', (req, res) => {
   res.json(data);
});

app.get('/api', (req, res) => {
   res.json(data);
});

app.post('/api/users', (req, res) => {
   const newUser = req.body;
   data.push(newUser);
   res.json(newUser);
});
 
app.put('/api/users/:id', (req, res) => {
   const userId = parseInt(req.params.id);
   const updatedUser = req.body;
 
   data = data.map(user => (user.id === userId ? updatedUser : user));
 
   res.json(updatedUser);
});
 
app.delete('/api/users/:id', (req, res) => {
   const userId = parseInt(req.params.id);
 
   data = data.filter(user => user.id !== userId);
 
   res.json({ message: 'User deleted successfully.' });
});

app.listen(port, () => {
   console.log(`Express server is running on http://localhost:${port}`);
});
