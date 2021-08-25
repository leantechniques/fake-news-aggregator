import { getTweets } from "./tweets-service";
import nock from 'nock';

it('should get a tweet from the backend', async () => {
    const expected = {
        id: 1,
        tweet: "Some tweet",
        author: "some author"
    };
    nock('http://localhost:3001').defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true' 
      }).get("/").reply(200, expected)
    const actual = await getTweets();
    expect(actual).toEqual(expected);
})