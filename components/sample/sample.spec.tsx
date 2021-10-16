import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Sample } from './sample';

describe('Sample', () => {
  beforeEach(() => {
    render(<Sample />);
  });
  it('should show Cities control', () => {
    expect(screen.getByText('Sample text')).toBeTruthy();
  });
});
