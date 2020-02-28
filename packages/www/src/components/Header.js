/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useContext } from 'react'

import { store } from '../store.js'
import Nav from './Nav'
import MobileNav from './MobileNav'
import MaxWidth from './MaxWidth'
import Wordmark from './Wordmark'

export default () => {
  const { state } = useContext(store)
  const { showMobileNav } = state

  return (
    <header sx={{
      display: 'flex',
      justifyContent: 'center',
      padding: '40px 0',
      position: 'fixed',
      zIndex: 3,
      width: '100vw'
    }}>
      <MaxWidth>
        <div sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'lightPurple',
          borderRadius: '10px',
          padding: '8px 20px',
          height: '56px',
          boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.15)'
        }}>
          <Wordmark />
          <Nav />
        </div>
      </MaxWidth>
      <MaxWidth sx={{
        position: 'absolute',
        top: '110px',
        transition: 'opacity 175ms ease-out',
        opacity: showMobileNav ? 1 : 0
      }}>
        <div sx={{
          backgroundColor: 'lightPurple',
          padding: '8px 20px',
          borderRadius: '10px',
          boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.15)'
        }}>
          <MobileNav />
        </div>
      </MaxWidth>
    </header>
  )
}