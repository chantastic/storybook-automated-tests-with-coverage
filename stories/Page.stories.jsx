import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Page {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};

export const SignUp = Template.bind({});
SignUp.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const signUpButton = await canvas.getByRole('button', { name: /Sign up/i });
  await userEvent.click(signUpButton);
};

export const LoggedInThenLogOut = Template.bind({});
LoggedInThenLogOut.play = async (context) => {
  await LoggedIn.play(context)
  const canvas = within(context.canvasElement);
  const logoutButton = await canvas.getByRole('button', { name: /Log out/i });
  await userEvent.click(logoutButton);
};
