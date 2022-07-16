import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css'

import { useContext } from 'react'

import FavoritesContext from '../../store/favorites-context'

const MainNavigation = () => {

    const FavoritesCtx = useContext(FavoritesContext)
    const { totalFavorites } = FavoritesCtx

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Meetups</div>
            <nav>
                <ul>
                    <li><Link to='/'>Meetups</Link></li>
                    <li><Link to='/new-meetup'>New Meetups</Link></li>
                    <li><Link to='/favorites'>Favorites<span className={classes.badge}>{totalFavorites}</span></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation