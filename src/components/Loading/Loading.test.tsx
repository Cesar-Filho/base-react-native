import React from 'react';

import {Loading} from '@components/Loading';
import {render} from '@utils/test-utils';

describe('Loading Component', () => {
  it('should render correctly', () => {
    const {getByTestId} = render(<Loading />);
    const componentLoading = getByTestId('Loading');

    expect(componentLoading).toBeTruthy();
  });
});
