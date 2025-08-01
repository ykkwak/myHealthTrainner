
import React from 'react';
import {render} from '@testing-library/react-native';
import ProfileScreen from '../src/ProfileScreen';

describe('ProfileScreen', () => {
  it('renders correctly', () => {
    const {getByText} = render(<ProfileScreen />);
    const titleElement = getByText('Profile Screen');
    expect(titleElement).not.toBeNull();
  });
});
