import { loginUser } from './login-service';
import nock from 'nock';

it('should validate user credentials', async () => {
    const expected = true;
    const inputs = { username: 'nate', password: 'nate' };

    nock('http://localhost:3001')
        .defaultReplyHeaders({
            'access-control-allow-origin': '*',
            'access-control-allow-credentials': 'true',
        })
        .post('/loginUser', inputs)
        .reply(200, expected);
    const actual = await loginUser(inputs);
    expect(actual).toEqual(expected);
});
