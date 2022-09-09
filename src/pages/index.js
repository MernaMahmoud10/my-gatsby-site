import React from "react";
import { Button, Layout, Typography, Row, Col, Card } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'antd/dist/antd.css';
import ImageOne from "../images/Image 17.png";
import ImageTwo from "../images/Image 18.png";
import cardOne from "../images/cardOne.png";
import cardTwo from "../images/cardTwo.png";
import cardThree from "../images/cardThree.png";
import cardFour from "../images/cardFour.png";
import { ShoppingCartOutlined, SelectOutlined, PlusOutlined, ShopOutlined } from "@ant-design/icons";
import './index.css';
import Paragraph from "antd/lib/skeleton/Paragraph";
import { Link } from "gatsby";
import { Outlet  } from "react-router-dom"
import RunKitchen from "./RunKitchen";
import RunCart from "./RunCart";
const { Sider, Footer, Content } = Layout;
const { Meta } = Card;
const { Title, Text } = Typography;
export default function Home() {

  return (
    <>
      <Layout className="layout">

        <Layout>
          <nav className={` bg-grey`} >

            <div className="container d-flex justify-content-between align-items-center">
              <div className="py-2">
                <Title level={3} className="darkblue mb-1">welcome to icloudReady!</Title>
                <Text style={{ fontSize: 16 }} className="text-muted">You have started your </Text><Text style={{ fontSize: 16 }} className="darkblue ms-1">30 day trial</Text>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="me-5 pe-5">
                  <div className=" w-100 position-relative">
                    <img className="w-100" src={ImageOne} />
                    <div className=" w-100 position-absolute start-50 top-0">
                      <img className="w-100" src={ImageTwo} />
                      <div className=" w-100 position-absolute start-50 top-0">
                        <img className="w-100" src={ImageOne} />
                        <div className=" w-100 position-absolute start-50 top-0">
                          <img className="w-100" src={ImageTwo} />
                          <div className="  position-absolute start-50 top-0 rounded-circle bg-white roundedDiv" >
                            <div className=" w-100 position-absolute start-50 top-0 w-50 h-100 rounded-circle bg-darkgrey d-flex justify-content-center align-items-center">
                              +3
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="py-2 ps-5">
                  <Title level={4} className="text-muted mb-1">Our architects are here to help</Title>
                  <Text style={{ fontSize: 18 }} className="text-info">Book your free session </Text>
                </div>
              </div>
              <div className="d-flex">
                <li className="position relative">
                  <Link to="/RunCart" element={<RunCart/>}><Button icon={<ShoppingCartOutlined />} className="rounded-circle me-3" size="large" style={{ background: "#E1ECF9", color: "#4A6585" }}></Button></Link>
                  <div className="rounded-circle me-3 position-absolute darkblue d-flex align-items-center justify-content-center" style={{ background: "#FFD900", width: "20px", height: "20px", top: '15px' }}>2</div>
                </li>
                <li className="position relative">
                  <Link to="/RunKitchen" element={<RunKitchen/>}><Button icon={<ShopOutlined />} className="rounded-circle " size="large" style={{ background: "#E1ECF9", color: "#4A6585" }}></Button></Link>
                  <div className="rounded-circle me-3 position-absolute darkblue d-flex align-items-center justify-content-center" style={{ background: "#FFD900", width: "20px", height: "20px", top: '15px' }}>2</div>

                </li>
              </div>
            </div>

          </nav>
          <Content className="content " style={{ padding: '0 50px' }}>
            <div className="contentBlue"></div>
            <div className="container site-layout-content bg-transparent">
              <Title level={4} className="text-info mb-5">Get support</Title>
              <Row gutter={[16, 16]} className="w-100">
                <Col className="card" span={6} >
                  <Card
                    className="m-0 d-flex flex-column justify-content-between h-100"
                    bodyStyle={{ backgroundColor: '#0A488F', height: "250px" }}
                    cover={
                      <img
                        alt="example"
                        src={cardOne}
                        className=" m-auto py-4 px-2"
                        style={{ width: '200px' }}
                      />
                    }

                  >

                    <Meta
                      className="p-3  w-100 meta"
                      title="Customer Engagement"
                      description="Get your own mobile app for industry specific"

                    />
                    <div className="d-flex justify-content-between align-items-center px-3 pt-3">
                      <p className="mb-0" style={{ color: "#FFFF" }}>100 DTSU*</p>
                      <div className="d-flex ">
                        <li>
                          <Button icon={<SelectOutlined />} className="rounded-circle me-3 iconCard" size="large"></Button>
                        </li>
                        <li>
                          <Button icon={<PlusOutlined />} className="rounded-circle iconCard" size="large"></Button>
                        </li>
                      </div>
                    </div>

                  </Card>

                </Col>
                <Col className="card" span={6} >
                  <Card
                    className="m-0 d-flex flex-column justify-content-between h-100"
                    bodyStyle={{ backgroundColor: '#579064', height: "250px" }}
                    cover={
                      <img

                        alt="example"
                        src={cardTwo}
                        className="w-75 m-auto py-5 px-2 cardImg"
                      />
                    }

                  >

                    <Meta
                      className="p-3  w-100 meta"
                      title="Actionable Insighets"
                      description="Create Dashboards "

                    />
                    <div className="d-flex justify-content-between align-items-center px-3 pt-3">
                      <p className="mb-0" style={{ color: "#FFFF" }}>100 DTSU*</p>
                      <div className="d-flex ">
                        <li>
                          <Button icon={<SelectOutlined />} className="rounded-circle me-3 iconCard" size="large"></Button>
                        </li>
                        <li>
                          <Button icon={<PlusOutlined />} className="rounded-circle iconCard" size="large"></Button>
                        </li>
                      </div>
                    </div>

                  </Card>

                </Col>

                <Col className="card" span={6} >
                  <Card
                    className="m-0 d-flex flex-column justify-content-between h-100"
                    bodyStyle={{ backgroundColor: '#950000', height: "250px" }}
                    cover={
                      <img

                        alt="example"
                        src={cardThree}
                        className="w-75 m-auto py-5 px-2 cardImg"
                      />
                    }

                  >

                    <Meta
                      className="p-3  w-100 meta"
                      title="Employees Productivity"
                      description="KPI Builder , Work Conf,Create Oracle Requests"

                    />
                    <div className="d-flex justify-content-between align-items-center px-3 pt-3">
                      <p className="mb-0" style={{ color: "#FFFF" }}>100 DTSU*</p>
                      <div className="d-flex ">
                        <li>
                          <Button icon={<SelectOutlined />} className="rounded-circle me-3 iconCard" size="large"></Button>
                        </li>
                        <li>
                          <Button icon={<PlusOutlined />} className="rounded-circle iconCard" size="large"></Button>
                        </li>
                      </div>
                    </div>

                  </Card>

                </Col>
                <Col className="card" span={6} >
                  <Card
                    className="m-0 d-flex flex-column justify-content-between h-100"
                    bodyStyle={{ backgroundColor: '#8F6C0A', height: "250px" }}
                    cover={
                      <img

                        alt="example"
                        src={cardFour}
                        className="w-75 m-auto py-5 px-2 cardImg"
                      />
                    }

                  >

                    <Meta
                      className="p-3  w-100 meta"
                      title="Operations Excellence"
                      description="Tenant/lessee Managment"

                    />
                    <div className="d-flex justify-content-between align-items-center px-3 pt-3">
                      <p className="mb-0" style={{ color: "#FFFF" }}>100 DTSU*</p>
                      <div className="d-flex ">
                        <li>
                          <Button icon={<SelectOutlined />} className="rounded-circle me-3 iconCard" size="large"></Button>
                        </li>
                        <li>
                          <Button icon={<PlusOutlined />} className="rounded-circle iconCard" size="large"></Button>
                        </li>
                      </div>
                    </div>

                  </Card>

                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Got questions? Take a look at our FAQs, talk to us on Twitter @icloudready or send an email to team@icloud-ready.com</Footer>
        </Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}

        >
          <Outlet />

        </Sider>
      </Layout>
    </>
  )
}