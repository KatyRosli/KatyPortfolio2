import { render, screen, fireEvent } from '@testing-library/react';
import { Footer } from './Footer';
import userEvent from '@testing-library/user-event';
import useAnalyticsEventTracker from '../useAnalyticsEventTracker';

jest.mock('../useAnalyticsEventTracker', () => {
    const originalModule = jest.requireActual('../useAnalyticsEventTracker');
    return {
      __esModule: true,
      default: jest.fn(originalModule.default),
    };
  });

describe('Footer', () => {
    it('should render the social media icons', () => {
        render(<Footer />);
     
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
    expect(screen.getByTestId('github-icon')).toBeInTheDocument();
    expect(screen.getByTestId('behance-icon')).toBeInTheDocument();
    expect(screen.getByTestId('instagram-icon')).toBeInTheDocument();       
    });

    it('should call the analytics event tracker when a social media icon is clicked', () => {
        const mockEventTracker = jest.fn();
        (useAnalyticsEventTracker as jest.Mock).mockReturnValue(mockEventTracker);

        render(<Footer />);

        fireEvent.click(screen.getByTestId('linkedin-icon'));
        expect(mockEventTracker).toHaveBeenCalledWith('buttonClick', 'Visit LinkedIn');

        fireEvent.click(screen.getByTestId('github-icon'));
        expect(mockEventTracker).toHaveBeenCalledWith('buttonClick', 'Visit Github');

        fireEvent.click(screen.getByTestId('behance-icon'));
        expect(mockEventTracker).toHaveBeenCalledWith('buttonClick', 'Visit Behance');

        fireEvent.click(screen.getByTestId('instagram-icon'));
        expect(mockEventTracker).toHaveBeenCalledWith('buttonClick', 'Visit Instagram');
    });

/*      it('should open social media links in a new tab when clicked', () => {
        const mockOpenNewTab = jest.fn();
        jest.spyOn(window, 'open').mockImplementation(mockOpenNewTab);

        render(<Footer />);

        fireEvent.click(screen.getByTestId('linkedin-icon'));
        expect(mockOpenNewTab).toHaveBeenCalledWith(
          'https://www.linkedin.com/in/katy-rosli-761b70185/',
          '_blank',
          'noreferrer'
        );
    
        fireEvent.click(screen.getByTestId('github-icon'));
        expect(mockOpenNewTab).toHaveBeenCalledWith(
          'https://github.com/KatyRosli',
          '_blank',
          'noreferrer'
        );
    
        fireEvent.click(screen.getByTestId('behance-icon'));
        expect(mockOpenNewTab).toHaveBeenCalledWith(
          'https://www.behance.net/KatyLii',
          '_blank',
          'noreferrer'
        );
    
        fireEvent.click(screen.getByTestId('instagram-icon'));
        expect(mockOpenNewTab).toHaveBeenCalledWith(
          'https://www.instagram.com/katy.rosli/',
          '_blank',
          'noreferrer'
        );

        afterEach(() => {
        window.open.mockRestore();
        });

    }); */

    it('should render the correct copyright text', () => {
        render(<Footer />);

        const copyrightText = screen.getByText((content, element) => {
            return content.startsWith('© 2023 Katy Rosli');
        });
        expect(copyrightText).toBeInTheDocument();
    })
});