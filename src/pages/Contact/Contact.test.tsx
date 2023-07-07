import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Contact } from './Contact';

describe('Contact', () => {
    it('should display error message if the email address is invalid', async () => {
      render(<Contact />);
  
      const emailInput = screen.getByLabelText(/email address/i);
      const messageInput = screen.getByRole('textbox', { name: ''});
      const submitButton = screen.getByRole('button', { name: /send message/i });
  
      fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
      fireEvent.change(messageInput, { target: { value: 'Test message' } });
      fireEvent.click(submitButton);
  
      await waitFor(() => {
        expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
      });
    });   
});      