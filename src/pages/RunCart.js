import React from "react";
import { Button, Layout, Typography, Row, Col, Card } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'antd/dist/antd.css';
import ImageOne from "../images/Image 17.png";
import ImageTwo from "../images/Image 18.png";

import { ShoppingCartOutlined,ShopOutlined, CloseOutlined, InboxOutlined, DeleteOutlined, InfoOutlined } from "@ant-design/icons";
import './index.css';
import { Link } from "gatsby";
import RunKitchen from "./RunKitchen";
const { Sider, Footer, Content } = Layout;
const { Title, Text } = Typography;
export default function RunCart() {

  

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
                <li className="position relative d-none" id="cart">
                  <Link to="RunCart" element={<RunCart/>} ><Button icon={<ShoppingCartOutlined />} className="rounded-circle me-3" size="large" style={{ background: "#E1ECF9", color: "#4A6585" }}></Button></Link>
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
            <div className="container site-layout-content bg-transparent"></div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Got questions? Take a look at our FAQs, talk to us on Twitter @icloudready or send an email to team@icloud-ready.com</Footer>
        </Layout>
        <Sider
        id="sider"
          theme="light"
          width="400"
          breakpoint="md"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          

        >
          <div className="d-flex justify-content-between align-items-center py-3 px-3 borderGrey darkBlue" >
            <div className="d-flex align-items-center" >
              <Button  icon={<CloseOutlined />} className="rounded-circle me-2" size="large" style={{ background: "#E1ECF9", color: "#4A6585" }}></Button>
              <Title level={5} className="m-0">Your Run Cart</Title>
            </div>
            <div className="d-flex align-items-center" ><p className="text-muted m-0">Requests inrun kitchen</p></div>
          </div>
          <div className="d-flex justify-content-between align-items-center py-3 px-3 borderGrey darkBlue" >
            <p className="m-0 darkBlue w-60">Product</p>

            <div className="d-flex align-items-center w-40 justify-content-between" >
              <p className="darkBlue m-0 w-50 text-center">Qty</p>
              <p className="darkBlue m-0 w-50 text-center">Remove</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center py-3 mx-3 borderGrey " >
            <div className="d-flex align-items-center w-60" >
              <Button icon={<InboxOutlined />} className="me-2" size="large" style={{ background: "#E1ECF9", color: "#4A6585" }}></Button>
              <div className="d-flex flex-column">
                <Title level={5} className="m-0 darkBlue">Smart checklist</Title>
                <p className="text-muted m-0">Default Title, 12.00 DTSU</p>
              </div>
            </div>
            <div className="text-center w-40 d-flex align-items-center justify-content-center">
              <div className="w-50 d-flex align-items-center justify-content-center">
                <input className="w-50" defaultValue={2} type="number" />
              </div>
              <div className="w-50 d-flex align-items-center justify-content-center">
                <Button icon={<DeleteOutlined />} className="bg-transparent border-0 me-2 " size="large" style={{ color: "#DC1C6A " }}></Button>

              </div>

            </div>


          </div>
          <div className="d-flex justify-content-between align-items-center py-3 mx-3 borderGrey " >
            <div className="d-flex align-items-center w-60" >
              <Button icon={<InboxOutlined />} className="me-2" size="large" style={{ background: "#E1ECF9", color: "#4A6585" }}></Button>
              <div className="d-flex flex-column">
                <Title level={5} className="m-0 darkBlue">Smart checklist</Title>
                <p className="text-muted m-0">Default Title, 12.00 DTSU</p>
              </div>
            </div>
            <div className="text-center w-40 d-flex align-items-center justify-content-center">
              <div className="w-50 d-flex align-items-center justify-content-center">
                <input className="w-50" defaultValue={2} type="number" />
              </div>
              <div className="w-50 d-flex align-items-center justify-content-center">
                <Button icon={<DeleteOutlined />} className="bg-transparent border-0 me-2 " size="large" style={{ background: "#DC1C6A", color: "#DC1C6A" }}></Button>

              </div>

            </div>


          </div>
          
          <div className="d-flex justify-content-between align-items-center py-3 mx-3 borderGrey flex-column" >
            <div className="d-flex align-items-center justify-content-between w-100 mb-3" >
              <p className="m-0">subtotal</p>
              <p className="m-0 text-teal">12.00 DTSUs</p>

            </div>
            <div className="d-flex align-items-center justify-content-between w-100" >
              <p className="m-0 darkBlue">New payment</p>
              <p className="m-0 text-teal">12.00 DTSUs</p>

            </div>

          </div>
          <div className="d-flex mx-3  flex-column">
            <div className="d-flex align-items-center justify-content-between w-100 mb-3" >
              <p className="m-0 darkBlue">Total Units consumed</p>
              <p className="m-0 text-teal">1.00 DTSUs</p>

            </div>
            <div className="mx-3 mb-3 d-flex align-items-center justify-content-center">
              <Button type="primary" size="large" className="rounded-5 w-75 ">Checkout</Button>

            </div>
            <div className="mx-3 d-flex align-items-center justify-content-center mb-3">
              <Button type="" size="large" className="rounded-5 text-teal w-75">Back to Run information</Button>
            </div>

            <div className="mx-3 d-flex align-items-center justify-content-center mb-3 py-3 px-2" style={{ background: "#ECF6FE" }}>
              <div className="d-flex align-items-center" >
                <Button icon={<InfoOutlined />} className="rounded-circle me-2" size="large" style={{ background: "#0097C2", color: "#fff", width: "100px" }}></Button>
                <p className="m-0">Some requests can take a week or moreto be delivered and may be subject to dependency resolutions related to your</p>
              </div>
            </div>

          </div>

        </Sider>
      </Layout>
    </>
  )
}