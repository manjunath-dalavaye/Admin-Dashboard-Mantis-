import React, { useState } from "react";
import { Layout, Menu, Avatar, Badge, Input, Button, Dropdown } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  NotificationOutlined,
  GithubOutlined,
  UserOutlined,
  DashboardOutlined,
  FileTextOutlined,
  SettingOutlined,
  BarChartOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header, Sider } = Layout;

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [notifications, setNotifications] = useState(5); // Notification count
  const [profileName] = useState("John Doe");
  const navigate = useNavigate(); //Initialize for the login page

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleLoginClick = () => {
    navigate("/login"); // Use navigate to redirect to the login page
  };

  const registerForm = () => {
    navigate("/signup"); // Use navigate to redirect to the login page
  };
  // Dropdown menu for the profile
  const profileMenu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Conditionally render Sidebar */}
      {!collapsed && (
        <Sider
          width={250}
          theme="light"
          font-size="14px"
          style={{ fontFamily: "Public Sans, sans-serif" }}
        >
          <div
            className="logo"
            style={{
              padding: "16px",
              fontSize: "24px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            Mantis
            <div
              className="log"
              style={{
                border: "1px solid #000", // Border for the box
                padding: "4px 8px", // Padding inside the box
                marginLeft: "10px", // Space between "Mantis" and the version number
                borderRadius: "4px", // Optional: Rounding the corners
                fontSize: "16px", // Font size for the version number
                fontWeight: "normal", // Ensuring the version number has normal font weight
              }}
            >
              v1.3.0
            </div>
          </div>

          <Menu mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.ItemGroup key="navigation" title="Navigation">
              <Menu.Item key="1" icon={<DashboardOutlined />}>
                Dashboard
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="authentication" title="Authentication">
              <Menu.Item
                key="2"
                icon={<LockOutlined />}
                onClick={handleLoginClick}
              >
                Login
              </Menu.Item>

              <Menu.Item key="3" icon={<FileTextOutlined />}
              onClick={registerForm}
              >
                Sign-up
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="utilities" title="Utilities">
              <Menu.Item key="4" icon={<BarChartOutlined />}>
                Typography
              </Menu.Item>
              <Menu.Item key="5" icon={<SettingOutlined />}>
                Color
              </Menu.Item>
              <Menu.Item key="6" icon={<SettingOutlined />}>
                Shadow
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="support" title="Support">
              <Menu.Item key="7" icon={<FileTextOutlined />}>
                Sample Page
              </Menu.Item>
              <Menu.Item key="8" icon={<NotificationOutlined />}>
                Documentation
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu>
        </Sider>
      )}

      {/* Layout for Header and Main Content */}
      <Layout>
        {/* Header */}
        <Header
          style={{
            padding: 0,
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* Sidebar toggle button */}
            <Button
              type="text"
              onClick={toggleCollapse}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              style={{ marginLeft: 16 }}
            />

            {/* Search Bar */}
            <Input
              placeholder="Search..."
              prefix={<SearchOutlined />}
              style={{ width: 200, marginLeft: 20 }}
            />
          </div>

          <div
            style={{ display: "flex", alignItems: "center", marginRight: 16 }}
          >
            {/* Notification Badge */}
            <Badge count={notifications} offset={[10, 0]}>
              <NotificationOutlined
                style={{ fontSize: "20px", marginRight: 20 }}
              />
            </Badge>

            {/* GitHub Icon */}
            <Button
              type="text"
              icon={<GithubOutlined style={{ fontSize: "20px" }} />}
              onClick={() =>
                window.open("https://github.com/manjunath-dalavaye", "_blank")
              }
              style={{ marginRight: 20 }}
            />

            {/* Profile Avatar with Hover Dropdown */}
            <Dropdown overlay={profileMenu} placement="bottomRight">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Avatar icon={<UserOutlined />} />
                <span style={{ marginLeft: 10 }}>{profileName}</span>
              </div>
            </Dropdown>
          </div>
        </Header>

        {/* Main content can go here */}
        <div style={{ padding: "24px" }}>{/* Your content */}</div>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
