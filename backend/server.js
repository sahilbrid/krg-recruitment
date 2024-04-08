const express = require('express')
const mysql = require('mysql')
const session = require('express-session');
const cors = require('cors')

const app = express()
app.use(cors({
    credentials: true, // Allows cookies to be sent from client to server
    origin: 'http://www.krgdataresearch.org.s3-website.ap-south-1.amazonaws.com', // Whitelist the origin of your frontend application
  }));
  
app.use(express.json())
app.use(session({
    secret: 'keyboardcat', // Change this to a random string for security
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24*60*60*1000 }
}));

const db = mysql.createConnection({
    host: 'krgrecruitmentdb.cdo6ua2eqsk6.ap-south-1.rds.amazonaws.com',
    user: 'admin',
    password: 'testing123',
    database: 'krg'
})

app.post('/register', (req, res) => {
    const { email, password } = req.body;
    const sql = "INSERT INTO user (email, password) VALUES (?, ?)";
    const values = [email, password];
    db.query(sql, values, (err, result) => {
        if(err) {
            console.error('Error registering user:', err);
            if(err.code == 'ER_DUP_ENTRY'){
                console.log('Account already exists!')
            }
            return res.status(500).json({ error: 'Error registering user' });
        }
        console.log('User registered successfully:', result);
        req.session.email = req.body.email;
        console.log(req.session.email)
        var sess = req.session
        console.log(sess)
        return res.status(200).json({ message: 'User registered successfully' });
    });
});

app.post('/registration', (req, res) => {
    console.log("Email to update", req.session.email)
    console.log(req.body)
    const {
        firstName,
        middleName,
        lastName,
        residentialCity,
        residentialAddress,
        personalEmail,
        workEmail,
        mobileNumber,
        whatsappNumber,
        education,
        professionalMembership,
        membershipNumber,
        currentJobDesignation,
    } = req.body;
    const email1 = req.body.personalEmail
    console.log("personal: ", email1)

    // if (!req.session.email) {
    //     return res.status(401).json({ error: 'Unauthorized' });
    // }

    // if (!email) {
    //     return res.status(401).json({ error: 'Unauthorized' });
    // }

    // const sql = "INSERT INTO user (firstName, middleName, lastName, residentialCity, residentialAddress, personalEmail, workEmail, mobileNumber, whatsappNumber, education, professionalMembership, membershipNumber, currentJobDesignation) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const sql = 'UPDATE user SET firstName = ?, middleName = ?, lastName = ?, residentialCity = ?, residentialAddress = ?, personalEmail = ?, workEmail = ?, mobileNumber = ?, whatsappNumber = ?, education = ?, professionalMembership = ?, membershipNumber = ?, currentJobDesignation = ? WHERE email = ?'
    const values = [
        firstName,
        middleName,
        lastName,
        residentialCity,
        residentialAddress,
        personalEmail,
        workEmail,
        mobileNumber,
        whatsappNumber,
        education,
        professionalMembership,
        membershipNumber,
        currentJobDesignation,
        email1,
    ];

    console.log("SQL Query:", sql); // Log the SQL query being executed
    console.log("Values:", values);

    db.query(sql, values, (err, result) => {
        if(err) {
            console.error('Error saving registration data:', err);
            return res.status(500).json({ error: 'Error saving registration data' });
        }
        console.log('Registration data saved successfully:', result);
        return res.status(200).json({ message: 'Registration data saved successfully' });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(req.session)
    const sql = "SELECT * FROM user WHERE email = ?";
    db.query(sql, [email], (err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        const user = results[0];
        // Check if the password matches the hashed password stored in the database
        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        // Authentication successful, you may generate a token or session here
        req.session.email = email;
        return res.status(200).json({ message: 'Login successful' });
    });
});


// app.post('/registration', (req, res) => {
//     const sql = "INSERT INTO user (`firstName`, `middleName`, `lastName`, `residentialCity`, `residentialAddress`, `personalEmail`, `workEmail`, `mobileNumber`, `whatsappNumber`, `education`, `professionalMembership`, `membershipNumber`, `currentJobDesignation`) VALUES (?)"
//     const values = [
//         req.body.firstName,
//         req.body.middleName,
//         req.body.lastName,
//         req.body.residentialCity,
//         req.body.residentialAddress,
//         req.body.personalEmail,
//         req.body.workEmail,
//         req.body.mobileNumber,
//         req.body.whatsappNumber,
//         req.body.education,
//         req.body.professionalMembership,
//         req.body.membershipNumber,
//         req.body.currentJobDesignation,
//     ]
//     db.query(sql, [values], (err, data) => {
//         if(err) return res.json(err)
//         return res.json(data)
//     })
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// app.listen(5000, () => {
//     console.log("Listening...")
// })