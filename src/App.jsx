import React from "react";
import "./main.css";
import { ConfigProvider } from "antd";
import Navbar from "./container/Navbar";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./container/UserList.jsx";
function App() {
    return (
        <ReduxProvider store={store}>
            <ConfigProvider direction="rtl">
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/UserList" exact element={<UserList />} />
                    </Routes>
                </Router>
            </ConfigProvider>
        </ReduxProvider>
    );
}

export default App;
