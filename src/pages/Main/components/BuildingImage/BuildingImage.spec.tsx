import React from 'react';
import { render } from '@testing-library/react';
import { BuildImage } from '.';

describe('Biulding Image Test', () => {
  it('should render building image', () => {
    const { container } = render(<BuildImage cover="build.jpg" />);
    expect(container).toMatchSnapshot();
  });

  // shoudl render building image with cover is null
  it('should render building image with cover is null', () => {
    const { container } = render(<BuildImage cover={''} />);
    expect(container).toMatchSnapshot();
  });
});