import React from 'react';

import {LineText} from '@components/LineText';
import {render} from '@utils/test-utils';
import {typography} from '@theme/index';

describe('LineText Component', () => {
  it('should render correctly', () => {
    const {getByText} = render(<LineText label="label" value="value" />);
    const componentLabel = getByText('label:');
    const componentValue = getByText('value');

    expect(componentLabel).toBeTruthy();
    expect(componentValue).toBeTruthy();
    expect(componentLabel).toHaveStyle(typography.subtitle);
    expect(componentValue).toHaveStyle(typography.subtitle);
  });
});
