import React from 'react';
import { action } from '@storybook/addon-actions';
import TripCard from '../components/TripCard';

export default {
    title: 'TripCard',
    component: TripCard,
    parameters: {
        docs: {
            description: {
                component: `
           # TripCard
          Компонент TripCard використовується для відображення інформації про подорож.
        `,
            },
        },
    },
};

export const Paris = () => (
    <TripCard
        destination="Paris"
        image="eiffel_tower.jpg"
        date="2023-05-30"
        price={500}
        onClick={action('Card clicked')}
    />
);
