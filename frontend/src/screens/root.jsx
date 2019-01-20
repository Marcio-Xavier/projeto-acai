import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
//import { Router } from 'react-router';
import PaginaInicial from "../components/Inicial/inicial";
import ScreenVendaForm from "../screens/Venda/form";
import ScreenVendaList from "../screens/Venda/list";
import ScreenProdutoList from "../screens/Produto/list";
import ScreenProdutoForm from "../screens/Produto/form";
import ScreenUsuarioForm from "../screens/Usuario/form";
import ScreenUsuarioList from "../screens/Usuario/list";
import ScreenAbout from "../screens/About/about";

import NotFound from "../components/UI/notFound";

const Root = () => (
  <React.Fragment>
    <Switch>
      <Route path="/home" component={PaginaInicial} />
      <Route path="/venda/inserir" component={ScreenVendaForm} />
      <Route path="/venda/listar" component={ScreenVendaList} />
      <Route path="/produto/inserir" component={ScreenProdutoForm} />
      <Route path="/produto/listar" component={ScreenProdutoList} />
      <Route path="/usuario/inserir" component={ScreenUsuarioForm} />
      <Route path="/usuario/listar" component={ScreenUsuarioList} />
      <Route path="/sobre" component={ScreenAbout} />

      <Redirect from="/" exact to="/home" />
      <Route path="/inexistente" component={NotFound} />
      <Redirect to="/inexistente" />
    </Switch>
  </React.Fragment>
);

export default Root;
