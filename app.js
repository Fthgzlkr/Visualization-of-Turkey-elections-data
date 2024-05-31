import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




// Routes
app.get('/', (req, res) => {
    res.render('index', { data: null });
});

app.get('/marmara', (req, res) => {
    res.render('marmara');
});

app.get('/ege', (req, res) => {
    res.render('ege');
});

app.get('/akdeniz', (req, res) => {
    res.render('akdeniz');
});
app.get('/icanadolu', (req, res) => {
    res.render('icAnadolu');
});
app.get('/guneydoguanadolu', (req, res) => {
    res.render('guneydoguAnadolu');
});
app.get('/karadeniz', (req, res) => {
    res.render('karadeniz');
});
app.get('/doguanadolu', (req, res) => {
    res.render('doguAnadolu');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
