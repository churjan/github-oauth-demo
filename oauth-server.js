const clientID = 'c5ac07d323f9705000ca';
const clientSecret = 'd6b90672155785b4a03a8ce1f467cd770efdbc85';

const Koa = require('koa');
const Router = require('koa-router');
const axios = require('axios');

const app = new Koa();

const router = new Router();
router.get('/oauth/redirect', async (ctx) => {
  const requestToken = ctx.request.query.code;
  console.log('authorization code:', requestToken);
  const tokenResponse = await axios({
    method: 'post',
    url:
      'https://github.com/login/oauth/access_token?' +
      `client_id=${clientID}&` +
      `client_secret=${clientSecret}&` +
      `code=${requestToken}`,
    headers: {
      accept: 'application/json',
    },
  });

  const accessToken = tokenResponse.data.access_token;
  console.log(`access token: ${accessToken}`);
  ctx.cookies.set('token', accessToken, {
    domain: 'localhost',
    httpOnly: false,
  });

  ctx.response.redirect(`http://localhost:8080`);
});

app.use(router.routes());
app.listen(3000);
