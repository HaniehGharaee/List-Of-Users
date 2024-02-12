import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const SideBar = () => {
    return (
        <div className="w-fit mt-5 mr-5 inline-block">
            <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="light"
            >
                {items.map((item) => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.linkTo}>{item.label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </div>
    );
};

export default SideBar;
