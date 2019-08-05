import React from 'react';
import { Redirect } from 'react-router-dom'
import tokenService from '../../router/token'
import { Dashboard as DahsboardView } from '../../view';

const Dashboard = ({ match }) => {
    const { email } = tokenService.get().token;
    if (tokenService.get()) {
        return (
            (
                <DahsboardView
                    email={email}
                    path={match.url}
                />
            )
        )
    } else return (
        <Redirect to="/entra" />
    )
}

export default Dashboard