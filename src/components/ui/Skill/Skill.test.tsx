import { render, screen } from '@testing-library/react';
import Skill from './Skill';

describe('Skill ui component', () => {
  it('should render component with children', () => {
    render(<Skill>test</Skill>);

    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('should render component with class', () => {
    render(<Skill>test</Skill>);

    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('test')).toHaveClass('skill');
  });
});
