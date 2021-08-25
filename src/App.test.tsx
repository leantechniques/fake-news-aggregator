import { render, screen } from '@testing-library/react';
import App from './App';
import { getTweets } from './services/tweets-service';
jest.mock('./services/tweets-service');
const mockGetTweets = getTweets as jest.MockedFunction<typeof getTweets>;

it('Should render a tweet', async () => {
    const tweet = 'This is a tweet';
    mockGetTweets.mockResolvedValue({
        id: 1,
        tweet: tweet,
        author: 'Nate Johnson',
    });
    render(<App />);
    const tweetText = await screen.findByText(tweet);
    expect(tweetText).toBeInTheDocument();
});
