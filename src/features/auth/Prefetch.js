import React, { useEffect } from 'react'
import { notesApiSlice } from '../notes/notesApiSlice'
import { Outlet } from 'react-router-dom'
import { usersApiSlice } from '../users/usersApiSlice'
import {store} from '../../app/store'

const Prefetch = () => {
 useEffect(() => {
    store.dispatch(notesApiSlice.util.prefetch('getNotes','notesList',{force: true}))
    store.dispatch(usersApiSlice.util.prefetch('getUsers','usersList',{force: true}))
 },[])
 return <Outlet />
}

export default Prefetch