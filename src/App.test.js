import { render, screen } from '@testing-library/react';
import SamuraiApp from './App';
import { unmountComponentAtNode } from 'react-dom';
// test('renders learn react link', () => {
//    render(
//       <SamuraiApp />
//    );
//    const linkElement = screen.getByText(/learn react/i);
//    expect(linkElement).toBeInTheDocument();
// });

test('renders without crashing', () => {
   const div = document.createElement('div');
   render(<SamuraiApp />, div);
   unmountComponentAtNode(div)
});
