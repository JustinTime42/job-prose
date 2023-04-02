import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useContext } from 'react'
import { UserContext } from "../contexts/user.context"
import Layout from '@/components/layout'
import Login from './auth/Login'
import Home from './Home'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  const { currentUser } = useContext(UserContext);

  if (currentUser) {
    return (
      <Layout>
        <Home />
      </Layout>
    )
  } else {
    return (
      <Login />
    )
  }
}
  