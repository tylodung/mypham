import React from 'react'
import Youtube from '../Youtube'

import './style.scss'

class SideBar extends React.Component {
    render() {


        return (
            <div className='sidebar'>
                <Youtube {...this.props} />
		<div className='sidebar__sponsor'>Sponsor</div>
                <div className='sidebar__title'>Important</div>
		<div className='sidebar__link'>
		<a href='/about'>Đoàn Bình & Mỹ Phẩm Asinice</a>
		<a href='http://haboba.com'>Những địa điểm hẹn hò tại Phú Quốc</a>
		<a href='/payments'>How to pay? Thanh toán</a>
		<a href='/help'>Hướng dẫn đặt mua Mỹ Phẩm Asinice</a>
		</div>
            </div>
        );
    }
}

export default SideBar
