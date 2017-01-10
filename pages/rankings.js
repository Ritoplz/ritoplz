'use strict'

import React, { Component } from 'react'
import { style } from 'next/css'
import { Provider } from 'react-redux'

import Meta from '../components/meta'
import Header from './../components/header'
import RankingUser from './../components/ranking-user'
import RankingsList from './../containers/rankings-list'
import configureStore from '../store/configureStore'
import Footer from '../components/footer'
import { isLogged } from './../services/auth'

const store = configureStore()

const styles = {
  row: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',

    '@media (max-width: 750px)': {
      paddingLeft: '20px',
      paddingRight: '20px'
    }
  }
}

class Rankings extends Component {
  constructor() {
    super()

    store.subscribe(() => store.getState())
  }

  render () {
    let items = []

    if (isLogged()) {
      const item = {name: 'Profile', link: 'profile', type: 'button'}
      items.push(item)
    } else {
      const item = {name: 'Profile', link: 'profile', type: 'button'}
      items.push(item)
    }

    return (
      <Provider store={store}>
        <div>
          <Meta />

          <Header items={items} />

          <section className={style(styles.row)}>
            <RankingsList />
          </section>

          <Footer />
        </div>
      </Provider>
    )
  }
}

export default Rankings
