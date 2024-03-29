import React from 'react';

import ContentItem from '../ContenItem';
import Typography from '../Typography';
import Buttons from '../Buttons';
import Forms from '../Forms';


import './Content.sass';

const Content = () => {
  return (
    <div className="content">
      <div className="name-project" >UI Kit +Object</div>

      <ContentItem name="Типографика" id="Типографика">
        <Typography />
      </ContentItem>

      <ContentItem name="Кнопки и ссылки" id="Кнопки и ссылки">
        <Buttons />
      </ContentItem>

      <ContentItem name="Формы" id="Формы">
        <Forms />
      </ContentItem>

    </div>
  );
};

export default Content;