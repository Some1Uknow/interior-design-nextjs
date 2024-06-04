# ICRAVE - Luxury and Modern Interior Design

ICRAVE is a premier destination for luxury and modern interior design. This project showcases the company's services and allows customers to get in touch through a responsive web form. The project is built using modern web development technologies to ensure a seamless and engaging user experience.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive design for all devices
- Beautiful and modern user interface
- Subscription form for newsletters
- Contact form for customer queries
- Social media integration
- Clean and maintainable codebase

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express (for handling form submissions)
- **Email Service**: Nodemailer (or any other email service)
- **Icons and Images**: Lazy loading for optimized performance

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/icrave.git
    cd icrave
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm start
    ```

4. **Build for production:**
    ```bash
    npm run build
    ```

## Usage

### Running the Project Locally

1. **Start the development server:**
    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to see the website in action.

### Contact Form Setup

The contact form in this project uses a backend service to handle form submissions and send emails. You can set up a simple Express server to handle this.

1. Create a `server.js` file:
    ```javascript
    const express = require('express');
    const nodemailer = require('nodemailer');
    const bodyParser = require('body-parser');
    const cors = require('cors');

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    app.post('/send-query', (req, res) => {
        const { name, email, phone, query } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'your-email@gmail.com',
                pass: 'your-email-password',
            },
        });

        const mailOptions = {
            from: email,
            to: 'your-email@gmail.com',
            subject: 'New Query from Website',
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nQuery: ${query}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send(error.toString());
            }
            res.status(200).send('Query sent successfully');
        });
    });

    app.listen(5000, () => {
        console.log('Server is running on port 5000');
    });
    ```

2. **Install necessary packages:**
    ```bash
    npm install express nodemailer body-parser cors
    ```

3. **Start the server:**
    ```bash
    node server.js
    ```

4. Update the form submission logic in your React component to POST data to `http://localhost:5000/send-query`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

