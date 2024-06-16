import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App';
import ChatBox from './components/ChatBox';

const connector = () => {
    return (
        <Router>
                <Routes>
                    <Route exact path="/" element={<App/>} />
                    <Route path="/chatbox" element={<ChatBox/>} />
                </Routes>
        </Router>
    );
};

export default connector;