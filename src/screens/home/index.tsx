import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Button } from '@material-ui/core';

const Home = () => {
  const { t } = useTranslation('common');
  return (
    <div>
      <h1>Testing Next.js With Jest and React Testing Library</h1>
      <div>hello worsdfdsld</div>
      <Button color="primary">hwohoh</Button>
      <p>{t('one')}</p>
    </div>
  );
};

export default Home;
