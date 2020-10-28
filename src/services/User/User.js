import React, {Component} from "react";
import { UserOutlined } from '@ant-design/icons';
import { Popup } from '../../components/Popup/Popup';
import { LoginTabs } from '../login-registration-tabs/tabs';
import './User.scss';

export class User extends Component {

  render() {
    return (
      <div className='user-info'>
        <Popup 
          title = {<UserOutlined />}
          popupContent = {<LoginTabs isLoggedIn = { this.props.isLoggedIn }/>}
        />
      </div>
    );
  }
}
