
import React, { useContext } from 'react'
import {resultContext} from '../Context/ResultContext'
import {Card,Button} from 'antd'
import {Link} from "react-router-dom"
import { SyncOutlined
} from '@ant-design/icons';

const gridStyle = {
  width: '50%',
  textAlign: 'center',
};

const Results = () => {

  const {results} = useContext(resultContext);



  const showResults = <Card>{results.map((x,index)=><Card.Grid
    title='User Info'
    key={index}    
    style={gridStyle}
  >
  <p style={{float:'left'}}>First Name: {x.firstName}</p> <br/>
  <p style={{float:'left'}}>Last Name: {x.lastName}</p> <br/>
  <p style={{float:'left'}}>DOB: {x.dob}</p><br/>
  </Card.Grid>)
  }</Card>

  return (
    <>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'600px',width:'600px'}}>       
        {results? showResults:"No Results"}
    </div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Link to={'/'}><Button  type="primary" shape="round" icon={<SyncOutlined />}>Back to Menu</Button></Link>
    </div>
    </>
  )
}

export default Results