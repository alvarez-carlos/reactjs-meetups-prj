import { createContext, useState } from 'react'


// initial context value
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorites:  (newFavoriteMeetup) => {},
    removeFavorites: (meetupId) => {},
    isFavorite: (meetupId) => {}
})


export const FavoritesContextProvider = ({ children }) => {
    // This component will be a regular React component but it will have the job of providing the context to all the components that are interested in listening to the values or need values from the context. 
    // It will be responsible for updating the Object "FavoritesContext" context values.

    const [userFavoritesMeetups, setUserFavoritesMeetups] = useState([])

    // current context value. this will be affected due to the interaction with the componenets that are listening and affecting the context. after affected it will be passed to the context provider in the prop value={currentContext} to update the FavoritesContext and reflect the changes on the rest of the components listening in the application
    const currentContext = {
        favorites: userFavoritesMeetups,
        totalFavorites: userFavoritesMeetups.length,
        addFavorites: (newFavoriteMeetup) => addFavoritesHandler(newFavoriteMeetup),
        removeFavorites: (meetupId) => removeFavoritesHandler(meetupId),
        isFavorite: (meetupId) => itemIsFavoriteHandler(meetupId)
    }

    const addFavoritesHandler = (newFavoriteMeetup) => {
        // setUserFavoritesMeetups(userFavoritesMeetups.concat(newFavoriteMeetup))  //could work but it not goo practice because the status is not updates inmediatly.

        //Best practice. This is we make sure we are reflecting on the latest status or context of our object FavoritesContext
        setUserFavoritesMeetups((prevUserFavoritesMeetups) => { 
            return prevUserFavoritesMeetups.concat(newFavoriteMeetup)
            
        })             
    }

    const removeFavoritesHandler = (meetupId) => {
        setUserFavoritesMeetups((prevUserFavoritesMeetups) => {
            return prevUserFavoritesMeetups.filter(meetup => meetup.id !== meetupId)

        })
    }

    const itemIsFavoriteHandler = (meetupId) => {
        return userFavoritesMeetups.some(meetup => meetup.id === meetupId)
    }

    // we return the constant's Provider. This provider needs to wrap around all the components that are interestind on interacting with the that context or need to consume data from that conext. Normally we wrap the <App /> in the index.js file so that all the components have access to the context.
    return (
        <FavoritesContext.Provider value={currentContext}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext