const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/session', (req, res) => {
    res.sendFile(path.join(__dirname, 'session.html'));
});

app.get('/deploy', (req, res) => {
    res.sendFile(path.join(__dirname, 'deploy.html'));
});

app.get('/support', (req, res) => {
    res.sendFile(path.join(__dirname, 'support.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
