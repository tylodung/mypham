import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Ink from 'react-ink'

import './style.scss'
import iconReleases from '../../static/img/svg-icons/cosmetics.svg'
import iconArtists from '../../static/img/svg-icons/trangda.svg'
import iconEvents from '../../static/img/svg-icons/events.svg'

class MainMenu extends React.Component {
    render() {
        const {location} = this.props
        const {route} = this.props
        const page = route.page.data

        return (
            <div className='mainmenu'>

                <Link to={ prefixLink('/releases/')} className={`mainmenu__link ${ location.pathname.indexOf(prefixLink('/releases/')) == 0 ? 'is-selected' : '' }`} >
                    <img className='mainmenu__link-icon' src={ prefixLink(iconReleases) }/>
                    <span className='mainmenu__link-name'>Trắng Da</span>
                    <Ink />
                </Link> 

                <Link to={ prefixLink('/artists/')} className={`mainmenu__link ${ location.pathname.indexOf(prefixLink('/artists/')) == 0 ? 'is-selected' : '' }`} >
                    <img className='mainmenu__link-icon' src={ prefixLink(iconArtists) }/>
                    <span className='mainmenu__link-name'>Chăm Sóc</span>
                    <Ink />
                </Link> 

                <Link to={ prefixLink('/events/')} className={`mainmenu__link ${ location.pathname.indexOf(prefixLink('/events/')) == 0 ? 'is-selected' : '' }`} >
                    <img className='mainmenu__link-icon' src={ prefixLink(iconEvents) }/>
                    <span className='mainmenu__link-name'>Sự kiện</span>
                    <Ink />
                </Link> 

            </div>
        );
    }
}

MainMenu.propTypes = {
    location: React.PropTypes.object,
    page: React.PropTypes.object,
}

export default MainMenu
