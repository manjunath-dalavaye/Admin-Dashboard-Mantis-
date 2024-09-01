import { Row, Col, Card, Select, Statistic, Table } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
import { 
  useGetLineDataQuery, 
  useGetBarDataQuery, 
  useGetDashboardStatsQuery, 
  useGetOrdersDataQuery, 
  useGetAnalyticsReportDataQuery 
} from '../redux/api';

const { Option } = Select;

const DashboardPage: React.FC = () => {
  const { data: lineData = [], isLoading: isLineDataLoading } = useGetLineDataQuery();
  const { data: barData = [], isLoading: isBarDataLoading } = useGetBarDataQuery();
  const { data: dashboardStats = {}, isLoading: isDashboardStatsLoading } = useGetDashboardStatsQuery();
  const { data: recentOrdersData = [], isLoading: isOrdersDataLoading } = useGetOrdersDataQuery();
  const { data: analyticsData = {}, isLoading: isAnalyticsDataLoading } = useGetAnalyticsReportDataQuery();

  if (
    isLineDataLoading ||
    isBarDataLoading ||
    isDashboardStatsLoading ||
    isOrdersDataLoading ||
    isAnalyticsDataLoading
  ) {
    return <div>Loading...</div>;
  }

  const columns = [
    {
      title: 'Tracking No.',
      dataIndex: 'trackingNo',
      key: 'trackingNo',
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: 'Total Order',
      dataIndex: 'totalOrder',
      key: 'totalOrder',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = 'black';
        if (status === 'Approved') color = '#52c41a';
        else if (status === 'Rejected') color = '#f5222d';
        else if (status === 'Pending') color = '#faad14';
        return <span style={{ color }}>{status}</span>;
      },
    },
    {
      title: 'Total Amount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Row gutter={12}>
        <Col span={6}>
          <Card title="Total Page Views" bordered={false}>
            <h2>{dashboardStats.totalPageViews?.value}</h2>
            <p style={{ color: '#52c41a' }}>
              <ArrowUpOutlined /> {dashboardStats.totalPageViews?.change} {dashboardStats.totalPageViews?.message}
            </p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Total Users" bordered={false}>
            <h2>{dashboardStats.totalUsers?.value}</h2>
            <p style={{ color: '#52c41a' }}>
              <ArrowUpOutlined /> {dashboardStats.totalUsers?.change} {dashboardStats.totalUsers?.message}
            </p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Total Orders" bordered={false}>
            <h2>{dashboardStats.totalOrders?.value}</h2>
            <p style={{ color: '#faad14' }}>
              <ArrowDownOutlined /> {dashboardStats.totalOrders?.change} {dashboardStats.totalOrders?.message}
            </p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Total Sales" bordered={false}>
            <h2>{dashboardStats.totalSales?.value}</h2>
            <p style={{ color: '#faad14' }}>
              <ArrowDownOutlined /> {dashboardStats.totalSales?.change} {dashboardStats.totalSales?.message}
            </p>
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={16}>
          <Card title="Unique Visitor">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <Line type="monotone" dataKey="PageViews" stroke="#8884d8" />
                <Line type="monotone" dataKey="Sessions" stroke="#82ca9d" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col span={8}>
          <Card
            title="Income Overview"
            extra={
              <Select defaultValue="Week" style={{ width: 120 }}>
                <Option value="Month">Month</Option>
                <Option value="Week">Week</Option>
              </Select>
            }
          >
            <Statistic title="This Week Statistics" value={7650} prefix="$" />
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Income" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={24}>
          <Card title="Recent Orders">
            <Table columns={columns} dataSource={recentOrdersData} pagination={false} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPage;
