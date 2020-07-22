import React from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import { Switch, Route, NavLink } from 'react-router-dom'
import Home from './components/Home/Home'
import Notes from './containers/Notes/Notes'

function App({ t }) {

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/notes">Notes</NavLink>
        </nav>
        <div className="lang-switch">
          <button onClick={() => changeLanguage("cs")}>cs</button>
          <button onClick={() => changeLanguage("en")}>en</button>
        </div>
      </header>

      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/notes" component={Notes} />
        </Switch>
      </main>
    </>
  )
}

export default withTranslation()(App);