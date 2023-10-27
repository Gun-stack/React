import React, { useState } from 'react';
import {TabContent,TabPane,Nav,NavItem,NavLink,Card,Button,CardTitle,CardText,Row,Col} from 'reactstrap';

function TabStrap() {  
    const [activeTab,setActiveTab]= useState('1');
    const [active,setActive]=useState('');
    return(
        <div>
  <Nav tabs>
    <NavItem>
      <NavLink
        className={active}
        onClick={()=>setActiveTab('2')}
      >
        Tab1
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={active}
      >
        More Tabs
      </NavLink>
    </NavItem>
  </Nav>
  <TabContent activeTab={activeTab}>
    <TabPane tabId="1">
      <Row>
        <Col sm="12">
          <h4>
            Tab 1 Contents
          </h4>
        </Col>
      </Row>
    </TabPane>
    <TabPane tabId="2">
      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle>
              Special Title Treatment
            </CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>
              Go somewhere
            </Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle>
              Special Title Treatment
            </CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>
              Go somewhere
            </Button>
          </Card>
        </Col>
      </Row>
    </TabPane>
  </TabContent>
</div>
    )
}
export default TabStrap;