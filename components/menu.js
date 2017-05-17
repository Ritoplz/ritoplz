'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { colors, phone } from './ui/theme'
import { UiLink } from './ui'
import MenuUser from './menu-user'

const Menu = ({ logged, user, t }) => {
  let showUser
  if (logged) {
    showUser = (
      <ul>
        <li>
          <Link prefetch href="/rankings">
            <a>Rankings</a>
          </Link>
        </li>

        <li>
          <Link prefetch href="/my-summoners">
            <a>{t('My summoners')}</a>
          </Link>
        </li>

        <li>
          <Link prefetch href="/settings">
            <a>{t('Settings')}</a>
          </Link>
        </li>

        <MenuUser user={user} />

        <style jsx>{`
          ul {
            display: flex;
          }

          li {
            margin-left: 30px;
            font-size: 14px;
          }

          a {
            color: ${colors.gray};
            display: block;
            transition: .15s ease-in-out;
          }

          a:hover {
            color: ${colors.grayDark};
          }

          @media ${phone} {
            li {
              margin-left: 5px;
            }
          }
        `}</style>
      </ul>
    )
  } else {
    showUser = (
      <ul>
        <li>
          <Link prefetch href="/rankings">
            <a>Rankings</a>
          </Link>
        </li>

        <div>
          <UiLink href="/login" ui="primary small">{t('Login')}</UiLink>
        </div>

        <style jsx>{`
          ul {
            display: flex;
          }

          li {
            margin-left: 30px;
            font-size: 14px;
          }

          a {
            color: ${colors.gray};
            display: block;
            transition: .15s ease-in-out;
          }

          a:hover {
            color: ${colors.grayDark};
          }

          div {
            margin-left: 30px;
          }
        `}</style>
      </ul>
    )
  }

  return (
    <div>
      {showUser}
    </div>
  )
}

Menu.propTypes = {
  logged: PropTypes.bool,
  user: PropTypes.object,
  t: PropTypes.func
}

export default translate(['common'])(Menu)
