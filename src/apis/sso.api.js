import { get } from './base';

export function getUserInfo(accessToken) {
  return get('https://api.github.com/user', {
    isShowToast: false,
    headers: {
      accept: 'application/json',
      Authorization: `token ${accessToken}`,
    },
  });
}
