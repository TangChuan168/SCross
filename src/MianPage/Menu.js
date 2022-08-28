import { Button } from 'antd'
import { SearchOutlined,DatabaseOutlined } from '@ant-design/icons';
import React,{ useState } from 'react'
import {Link} from "react-router-dom"



const Menu = () => {

  const [open,setOpen] = useState(false);

  const Menu = 
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'245px'}}>
        <Link to={'/userfind'}><Button type="primary" block icon={<SearchOutlined />}>Member Search</Button></Link>
        <Button /> 
        <Link to={'/results'}><Button type="primary" block icon={<DatabaseOutlined />} >Search Results</Button></Link>
    </div>
  const Btn = <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'245px'}}>
    <Button type='primary' onClick={()=>setOpen(!open)}>Open Menu</Button>
    </div>
  return (
    <>
      {open === false? Btn:Menu}
    </>
  )
}

export default Menu