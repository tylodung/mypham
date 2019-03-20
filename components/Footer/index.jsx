import React from 'react'
import { prefixLink } from 'gatsby-helpers'

import './style.scss'
import iconEagle from '../../static/img/svg-icons/nihonsuruinline.svg'
import iconKamon from '../../static/img/svg-icons/nihonsuruinline.svg'
import iconBakaDono from '../../static/img/svg-icons/achau.svg'

class Footer extends React.Component {
  render() {

    return (
      <div className='footer'>
        <div className='footer__wrapper'>

	<div className='footer__container-floating'>

  <div className='footer__floating-button' data-toggle='tooltip' data-placement='left' data-original-title='Create' onclick='newmail()'>
    <a href='tel:+84902683189'><p className='footer__plus'>Gọi</p></a>
  </div>

</div>


	  <div className='footer__copyright'>
          </div>
       <div className='footer__left'>

	    <div><img className='footer__powered-svg' src={ prefixLink(iconBakaDono) }/> Mỹ Phẩm Á Châu</div>


        </div>

	
	
	<div className='footer__right'>
            
          
	    
	     <div className='footer__powered'>
            <span>Member of the clan </span>
            <a href='https://thaoam.com' className='footer__powered-link' target='_blank'>
              <img className='footer__powered-svg' src={ prefixLink(iconEagle) }/>
              <span className='footer__powered-fx'>Thao Am</span>
            </a>
          </div>


        </div>



        <div className='footer__centered'>


         <nav className='footer__versions'>
	    <h3>21/4A Xuân Thới Thượng, Hóc Môn, Thành phố Hồ Chí Minh.</h3>
	    <h3>Đặt mua mỹ phẫm cao cấp Asinice 090-268-3189 Đoàn Bình.</h3>
            <a href='/tos/privacy'>Privacy</a>
            <a href='/tos'>Terms of service</a>
            <a href='/about' className='is-selected'><img className='footer__powered-svg' src={ prefixLink(iconKamon) }/> Giới thiệu Mỹ Phẩm Asinice</a>
	    <a href='http://thaoam.com/'>© Thao Am Private Enterprise (P.E)</a>
          </nav>
        </div>
        </div>
      </div>
    );
  }
}

export default Footer
