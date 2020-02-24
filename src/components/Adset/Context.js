import React from 'react';

const defaultValue = {
  selectedTag: 'all',
  selectedType: 'all',
  selectedPrice: null,
};

export const Context = React.createContext(defaultValue);
