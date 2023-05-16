import React from 'react';
import { action } from '@storybook/addon-actions';
import Header from '../components/Header';

export default {
    title: 'Header',
    component: Header,
    parameters: {
        docs: {
            description: {
                component: `
          # MyTravelApp
          Цей проект - це туристичний додаток, який допоможе вам знайти найкращі подорожі.

          ## Ліцензія
          Цей проект знаходиться під MIT ліцензією.
        `,
            },
        },
    },
};

export const Default = () => (
    <Header
        title="MyTravelApp"
        logo="logo.png"
        navLinks={[{ url: "#", text: "Home" }, { url: "#", text: "Trips" }]}
        user="John Doe"
        onLogout={
            action('Logged out')}
    />
);
