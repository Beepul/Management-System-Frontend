import React, { useEffect } from 'react'
import { notesApiSlice } from '../notes/notesApiSlice'
import { Outlet } from 'react-router-dom'
import { usersApiSlice } from '../users/usersApiSlice'
import {store} from '../../app/store'

const Prefetch = () => {
 useEffect(() => {
    console.log('Subscribing')
    const notes = store.dispatch(notesApiSlice.endpoints.getNotes.initiate())
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())

    return () => {
        console.log('unsubscribing')
        notes.unsubscribe()
        users.unsubscribe()
    }
 },[])
 return <Outlet />
}

export default Prefetch