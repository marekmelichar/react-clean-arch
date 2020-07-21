import React from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import NotesList from './containers/NotesList/NotesList';

function App({ t } : { t:any }) {

  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <p>{t('notes')}: </p>
      <NotesList />
      <button onClick={() => changeLanguage("cs")}>cs</button>
      <button onClick={() => changeLanguage("en")}>en</button>
    </>
  )
}

export default withTranslation()(App);