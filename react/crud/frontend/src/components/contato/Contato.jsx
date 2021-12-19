import React, { Component } from "react";
import Main from "../template/Main";

const headerProps = {
    icon: 'users',
    title: 'contato',
    subtitle: 'Informações de contato'
}

export default class Contato extends Component {
    render() {
        return (
            <Main {...headerProps}>
               Informações de contato
            </Main>
        )
    }
}