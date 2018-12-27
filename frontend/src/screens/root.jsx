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
      <Route path="/inserir-venda" component={ScreenVendaForm} />
      <Route path="/listar-venda" component={ScreenVendaList} />
      <Route path="/inserir-produto" component={ScreenProdutoForm} />
      <Route path="/listar-produto" component={ScreenProdutoList} />
      <Route path="/inserir-usuario" component={ScreenUsuarioForm} />
      <Route path="/listar-usuario" component={ScreenUsuarioList} />
      <Route path="/sobre" component={ScreenAbout} />

      <Redirect from="/" exact to="/home" />
      <Route path="/nao-encontrado" component={NotFound} />
      <Redirect to="/nao-encontrado" />
    </Switch>
  </React.Fragment>
);

export default Root;
