# Therapy Chatbot

Therabot is a chatbot that provides therapy services to users. It is designed to provide a safe space for users to talk about their feelings and emotions. Using natural language processing, Therabot can understand and respond to users in a way that feels natural and human-like. Therabot is available 24/7 and can help users work through a variety of issues, including stress, anxiety, depression, and more.

## Table of Contents

- [Therapy Chatbot](#therapy-chatbot)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

## Demo

Add a link to your live demo or a screenshot of the application here.

## Features

- Real-time chat with a therapy chatbot
- Natural language processing using OpenAI's GPT-3.5-turbo
- 24/7 availability
- Helps users work through stress, anxiety, depression, and more

## Tech Stack

- **Backend:** Flask, OpenAI API
- **Frontend:** React, Tailwind CSS, Axios
- **Environment Management:** dotenv

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Python 3.x
- Node.js (with npm)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/therapy-chatbot.git
   cd therapy-chatbot
   ```
2. **Setup the backend**
  ```sh
   cd backend
   python -m venv venv
   source venv/bin/activate # On Windows use `venv\Scripts\activate`
   pip install -r requirements.txt
  ```
3. **Setup the backend**
   ```sh
   cd ../frontend
   npm install
   ```
4.**Environment Variables:**
  Create a '.env' file in the 'backend' directory and add your OpenAI key:
  ```sh
  OPENAI_API_KEY=your_openai_api_key
  ```
## Running the Application

### Start the backend server:

```sh
cd backend
python app.py
```

### Start the frontend serve
```sh
cd ../fronted
npm start
```
Open your browser and navigate to http://localhost3000.

### Usage
- Navigate to the homepage.
- Click on the "Get started" button.
- Start chatting with Therabot by typing your message and hitting "Send".

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

    1. Fork the Project
    2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
    3. Commit your Changes (git commit -m 'Add some AmazingFeature')
    4. Push to the Branch (git push origin feature/AmazingFeature)
    5. Open a Pull Request
### License
Distributed under the MIT License. See 'LICENSE' for more information.

