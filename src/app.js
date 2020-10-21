import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import './app.css';
import { getData } from "./api";

import Header from './components/Header';
import Lib from './components/Lib';
import Home from './components/Home';

export default function App() {
  const [data, setData] = useState([]);
  const [oldData, setOldData] = useState([]);
  const [focus, setFocus] = useState({ focusHome: true, focusInfo: false });

  useEffect(() => {
    getData().then(setData);
    getData().then(setOldData);
  }, []);

  return (
    <Layout >
      <BrowserRouter >
        <Header focus={focus} />
        <Switch>
          <Route path="/lib">
            <Lib data={data} setFocus={setFocus} setData={setData} oldData={oldData} setOldData={setOldData}/>
          </Route>
          <Route path="/">
            <Home setFocus={setFocus} />
          </Route>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}
