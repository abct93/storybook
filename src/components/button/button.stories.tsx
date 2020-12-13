import React from "react";
import { Button } from './button';
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions'

export default {
  title: 'Button',
  component: Button,
}

export const simple = () => (
  <Button onClick={action('clicked')} children={text('text', 'Button')}/>
);

export const cancel  = () => (
  <Button onClick={action('cancel')} children={text('text', 'キャンセル')} cancel />
)