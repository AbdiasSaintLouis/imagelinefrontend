'use client'

import { useAuth } from '@/resources'
import LoginPage from './login/page'
import { GaleriaPage as GaleryPage } from './galery/page'

export default function Home() {

  const auth = useAuth();
  const user = auth.getUserSession();

  if(!user){
    return <LoginPage />
  }

  return (
    <GaleryPage />
  )
}