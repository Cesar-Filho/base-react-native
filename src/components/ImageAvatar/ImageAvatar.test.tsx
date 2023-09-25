import React from 'react';
import {StyleSheet} from 'react-native';

import {ImageAvatar} from '@components/ImageAvatar';
import {render} from '@utils/test-utils';

describe('Render ImageAvatar', () => {
  it('should render correctly', () => {
    const expectedStyles = StyleSheet.create({
      container: {
        borderWidth: StyleSheet.hairlineWidth * 4,
        height: 180,
        width: 180,
        borderRadius: 90,
        alignSelf: 'center',
        marginVertical: 8,
      },
    });

    const {getByTestId} = render(
      <ImageAvatar uri="https://example.com/avatar.jpg" />,
    );
    const avatar = getByTestId('image-avatar');

    expect(avatar).toBeTruthy();
    expect(avatar).toHaveStyle(expectedStyles.container);
  });
});
