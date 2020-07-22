import React from 'react'
import { withTranslation } from 'react-i18next'

const Home = ({ t }) => {
  return (
    <div>
      <h1>{t('homepage')}</h1>
    </div>
  )
}

export default withTranslation()(Home)