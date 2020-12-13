import React from 'react';
import { Box } from './box';
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs';

export default {
    title: 'Box Design',
    component: Box
}

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const simple = () => <Box children={text('text', loremIpsum)}/>;

export const roundedRectangle = () => (
    <Box 
        className={'rounded'}
        children={text('text', loremIpsum)}
    />
);

export const background = () => <Box className={'background'} children={text('text', loremIpsum)} />;
export const horizontalBorder = () => <Box className={'horizontal-border'} children={text('text', loremIpsum)} />;
export const double = () => <Box className={'double'} children={text('text', loremIpsum)} />;
export const dashed = () => <Box className={'dashed'} children={text('text', loremIpsum)} />;
export const verticalBorder = () => <Box className={'vertical-border'} children={text('text', loremIpsum)} />;
export const sticky = () => <Box className={'sticky'} children={text('text', loremIpsum)} />;
export const labelTop = () => <Box className={'label-top'} children={text('text', loremIpsum)} />;
export const shadow = () => <Box className={'shadow'} children={text('text', loremIpsum)} />;
export const smart = () => <Box className={'smart'} children={text('text', loremIpsum)} />;
export const board = () => <Box className={'board'} children={text('text', loremIpsum)} />;
export const boardShadow = () => <Box className={'board-shadow'} children={text('text', loremIpsum)} />;

