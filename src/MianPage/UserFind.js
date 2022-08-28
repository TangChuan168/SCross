import React, { useContext } from 'react'
import { useState } from 'react'
import { Button, Form, Input,Card,Calendar } from 'antd'
import axios from 'axios'
import endpoints,{BASE_URL} from '../api/endpoints'
import { resultContext } from '../Context/ResultContext'
import {Link} from "react-router-dom"
import { SyncOutlined,SwitcherOutlined,
  SearchOutlined,
  BorderlessTableOutlined
} from '@ant-design/icons';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

const UserFind = () => {

    const [form] = Form.useForm(); 

    const {results,setResults} = useContext(resultContext);

    const [searchResult,setResult] = useState('');

    const GetUserURL = BASE_URL + endpoints.Get_User;



      const onFinish = (values) => {
        const Poli = values.PolicyNumber.toString();
        const CardN = values.CardNumber;       
        const DataToGo = {
            PolicyNumber:Poli,
            memberCardNumber:CardN? CardN:''
        }
        
        getUser(DataToGo);

      };

      const getUser = async (userinfo) =>{
        const {data} = await axios({
            method:"POST",
            url:GetUserURL,
            responseType:"json",
            data:userinfo
        })
        console.log('callback data is :',data);
        setResult(data); //update current state
        setResults([...results,data]); // push search result to global state
        console.log('#123',results);
      }
    
      const onReset = () => {
        form.resetFields();
      };

      const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };
  
    
      return (
        <>
            <Form style={{padding:'100px'}} {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item       
              name='Calendar'
              style={{border:'1px solid'}}

            >
              <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </Form.Item>

            <Form.Item
                name="PolicyNumber"
                label="Policy Number"
                rules={[
                {
                    required: true,
                    message:"PolicyNumber is required and must be Number"
                    
                },
                ]}
            >
                <Input type="number" style={{width:'300px'}} />
            </Form.Item>

            <Form.Item
                name="CardNumber"
                label="Member Card Number"

            >
                <Input style={{width:'300px'}} />
            </Form.Item>
            


            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
                    Search
                </Button>
                <Button/>
                <Button htmlType="button" icon={<BorderlessTableOutlined />} onClick={onReset}>
                Reset
                </Button>
            </Form.Item>
            
                {
                    searchResult? 
                    <div
                    style={{display:'flex',justifyContent:'center',alignItems:'center'}}
                    ><Card
                    title="Current User's Info"
                    style={{ width: 250 }}             
                    >
                        <p>First Name:<span style={{float:'right'}}>{searchResult.firstName}</span> </p>
                        <p>Last Name:<span style={{float:'right'}}>{searchResult.lastName}</span> </p>
                        <p>DOB:<span style={{float:'right'}}> {searchResult.dob}</span></p>
                    </Card></div>:''
                }
            </Form>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Link to={'/'}><Button type="primary" shape="round" icon={<SyncOutlined />}>Back to Menu</Button></Link>
                <Button /> 
                <Link to={'/results'}><Button type="primary" shape="round" icon={<SwitcherOutlined />}>Search Histories</Button></Link>
            </div>

        </>
      );
}

export default UserFind