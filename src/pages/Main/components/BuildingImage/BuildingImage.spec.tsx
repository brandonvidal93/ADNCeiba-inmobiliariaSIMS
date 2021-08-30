import React from 'react';
import { render } from '@testing-library/react';
import { BuildImage } from '.';

describe('Biulding Image Test', () => {
  it('should render building image', () => {
    const { container } = render(<BuildImage cover="build.jpg" />);
    expect(container).toMatchSnapshot();
  });
});