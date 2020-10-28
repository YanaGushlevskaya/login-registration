import React, {Component} from "react";
import { PhoneOutlined } from '@ant-design/icons';
import { Popup } from '../../../../components/Popup/Popup';
import './Callback.scss';

export class Callback extends Component {

  render() {
    return (
      <div className='callback'>
        <a className='callback__link link' href='tel:0441234567'>
          <PhoneOutlined />
          044-123-45-67
        </a>
        <Popup 
          title = 'Перезвонить Вам?'
          popupHeader = 'В разработке'
          popupContent = 'В разработке'
        />
      </div>
    );
  }
}
