import React from 'react';
import Home from '../assets/svg/HomeSvg';
import Mode from '../assets/svg/ModeSvg';
import PlayList from '../assets/svg/PlayList';
import Music from '../assets/svg/MusicSvg';
import Menu from '../assets/svg/MenuSvg';

const components = {
  Home,
  Mode,
  Menu,
  PlayList,
  Music,
};

const IconGenerator = ({tagName, ...props}) => {
  const TagName = components[tagName];

  if (TagName) {
    return <TagName {...props} />;
  } else {
    return null;
  }
};

export default IconGenerator;
