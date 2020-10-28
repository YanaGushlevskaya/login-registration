import React from 'react';
import { Tabs } from 'antd';
import { SignupForm } from '../registration/registration';
import { SigninForm } from '../login/login';
import 'antd/dist/antd.css';
import './tabs.scss';
import { FirebaseContext } from '../../components/Firebase';


const { TabPane } = Tabs;

export const LoginTabs = ({isLoggedIn}) => {
  return (
    <Tabs defaultActiveKey='1' className='login-register-tabs'>
      <TabPane tab='Логин' key='1'>
        <SigninForm isLoggedIn = { isLoggedIn }/>
      </TabPane>
      <TabPane tab='Регистрация' key='2'>
        <FirebaseContext.Consumer>
          {firebase => <SignupForm firebase={firebase} isLoggedIn = { isLoggedIn }/>}
        </FirebaseContext.Consumer>
      </TabPane>
    </Tabs>
  );
};
