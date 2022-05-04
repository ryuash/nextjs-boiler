import React from 'react';
import renderer from 'react-test-renderer';
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
    const component = renderer.create(<Component />);

    // await wait();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
