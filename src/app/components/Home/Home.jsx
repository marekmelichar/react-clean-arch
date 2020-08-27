import React from 'react';
import { withTranslation } from 'react-i18next';
import axios from 'axios';

const Home = ({ t }) => {
  const getRowData = async () => {
    const res = await axios.get(
      'https://inventory.ixperta.net/api/barcode/4220072421',
      {
        // Axios looks for the `auth` option, and, if it is set, formats a
        // basic auth header for you automatically.
        auth: {
          username: 'Ixperta',
          password: 'Ixperta*1',
        },
      }
    );

    console.log('res', res);
  };
  return (
    <div>
      <h1>{t('homepage')}</h1>
      <button onClick={getRowData}>CLICK ME</button>
    </div>
  );
};

export default withTranslation()(Home);
