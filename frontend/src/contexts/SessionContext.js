import {
    createContext, useCallback, useContext, useEffect, useState,
} from 'react'
import { useMutation, useLazyQuery } from '@apollo/client'
import { useCookies } from 'react-cookie'

import { ME_QUERY } from '../graphql/meQuery'
import { LOGIN_MUTATION } from '../graphql/loginMutation'
import { useHistory } from 'react-router'
const SessionContext = createContext()

export const SessionProvider = (props) => {
    const { children } = props
    const history = useHistory()
    const [user, setUser] = useState(null)
    const [cookie, setCookie, removeCookie] = useCookies(['token','user'])
    const token = cookie.token
    const userData = cookie.user
    const [loadMe, { loading, data }] = useLazyQuery(ME_QUERY, { fetchPolicy: 'network-only' })
    const [login] = useMutation(LOGIN_MUTATION)
    const handleLogin = useCallback(
        async (username, password) => {
            try {
                const res = await login({ variables: { username, password }})
                if (res?.data?.login?.token) {
                    setCookie('token', res?.data?.login?.token, { maxAge: 86400, path: '/', })
                    setCookie('user', res?.data?.login?.user, { maxAge: 86400, path: '/', })
                    setUser(res?.data?.login?.user)
                    history.push('/')
                }
            } catch (err) {
                removeCookie('token', { maxAge: 86400 })
                removeCookie('user', { maxAge: 86400 })
                throw new Error(`username or password is not correct!`)
            }
        },
        [login, removeCookie, setCookie, history],
    )

    useEffect(() => {
        if (userData) {
            setUser(userData)
        }
        return () => {}
    }, [cookie])

    const handleLogout = useCallback(
        () => {
            setUser(null)
            removeCookie('token', { maxAge: 86400 })
            removeCookie('user', { maxAge: 86400 })
        },
        [removeCookie],
    )
    useEffect(
        () => {
            if (data?.user) {
                setUser(data?.user)
            }
        },
        [data],
    )
    useEffect(
        () => {
            const loadData = async () => {
                try {
                    const id = userData?._id ?? "0"
                    const res = await loadMe()
                    // await loadMe()
                } catch (err) {
                    removeCookie('token', { maxAge: 86400 })
                    removeCookie('user', { maxAge: 86400 })
                }
            }
            loadData()
        },
        [loadMe, removeCookie],
    )
    return (
        <SessionContext.Provider
            value={{
                loading, user, login: handleLogin, logout: handleLogout, userCookie: userData, token: token
            }}
        >
            {children}
        </SessionContext.Provider>
    )
}

export const useSession = () => useContext(SessionContext)

export default SessionContext
