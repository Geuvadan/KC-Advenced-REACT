import React from 'react';

const defaultValue = {
  selectedTag: null,
  selectedType: null,
  selectedPrice: null,
};

export const Context = React.createContext(defaultValue);
