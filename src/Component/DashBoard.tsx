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
  BellOutlined,
} from "@ant-design/icons";
import { useNavigate, Routes, Route } from "react-router-dom";
import DashboardPage from './dashData'; // Import the DashboardPage component
// import ProfileDropdown from "./profile";


const { Header, Sider, Content } = Layout;

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [notifications] = useState(5); // Notification count
  const [profileName] = useState("John Doe");
  const navigate = useNavigate(); // Initialize for navigation
  const [active, setActive] = useState<string | null>('dashboard');

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleLoginClick = () => {
    navigate("/login"); // Use navigate to redirect to the login page
  };

  const registerForm = () => {
    navigate("/signup"); // Use navigate to redirect to the signup page
  };

  const goToDashboard = () => {
    setActive('dashboard'); // Set active state to 'dashboard'
    navigate("/home/dashboard"); // Use navigate to redirect to the dashboard page
  };

  // Dropdown menu for the profile
  const profileMenu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Logout</Menu.Item>
    </Menu>
  );

  // Dropdown menu for notifications
  const notificationMenu = (
    <Menu>
      <Menu.Item key="1">Notification 1</Menu.Item>
      <Menu.Item key="2">Notification 2</Menu.Item>
      <Menu.Item key="3">Notification 3</Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Conditionally render Sidebar */}
      {!collapsed && (
        <Sider
          width={250}
          theme="light"
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
                border: "1px solid #000",
                padding: "4px 8px",
                marginLeft: "10px",
                borderRadius: "4px",
                fontSize: "16px",
                fontWeight: "normal",
              }}
            >
              v1.3.0
            </div>
          </div>

          <Menu mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.ItemGroup key="navigation" title="Navigation">
              <Menu.Item key="1" icon={<DashboardOutlined />} onClick={goToDashboard}>
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

              <Menu.Item key="3" icon={<FileTextOutlined />} onClick={registerForm}>
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

          <div style={{ display: 'flex', alignItems: 'center', paddingRight: 16 }}>
            <a
              href="https://github.com/manjunath-dalavaye"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button shape="circle" icon={<GithubOutlined />} style={{ marginLeft: 30 }} />
            </a>
            <Dropdown overlay={notificationMenu} trigger={['click']}>
              <Badge count={notifications} size="small">
                <Button shape="circle" icon={<BellOutlined />} style={{ marginLeft: 30 }} />
              </Badge>
            </Dropdown>

            {/* profile data  */}
            {/* <ProfileDropdown /> */}

            <Dropdown overlay={profileMenu} placement="bottomRight">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  marginLeft: 20,
                }}
              >
                <Avatar icon={<UserOutlined />} />
                <span style={{ marginLeft: 10 }}>{profileName}</span>
              </div>
            </Dropdown>
          </div>
        </Header>

        {/* Main content */}
        <Content style={{ padding: '24px', background: '#f0f2f5' }}>
          {active === 'dashboard' && <DashboardPage />}
        </Content>

      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
