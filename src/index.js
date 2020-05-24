import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './MainApp';
import * as serviceWorker from './serviceWorker';
import {AppProvider} from "@shopify/polaris";

ReactDOM.render(
  <React.StrictMode>
      <AppProvider
          i18n={{
              Polaris: {
                  ResourceList: {
                      sortingLabel: 'Sort by',
                      defaultItemSingular: 'item',
                      defaultItemPlural: 'items',
                      showing: 'Showing {itemsCount} {resource}',
                      Item: {
                          viewItem: 'View details for {itemName}',
                      },
                  },
                  Common: {
                      checkbox: 'checkbox',
                  },
              },
          }}
      >
    <MainApp />
      </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
