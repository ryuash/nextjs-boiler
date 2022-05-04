import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};

jest.mock('next-translate/useTranslation', () => () => mockI18n);

// ==================================
// unit tests
// ==================================
describe('Dummy Test', () => {
  it('matches snapshot', async () => {
    const { asFragment } = render(<Component />);
    expect(screen.getByText(
      /Testing Next.js With Jest and React Testing Library/i,
    )).toBeInTheDocument();
    expect(screen.getByText(
      /hwohoh/i,
    )).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
