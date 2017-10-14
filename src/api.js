
const headers = new Headers({
  "Content-Type": "application/json",
  'x-meepshop-domain': 'admin.stage.meepcloud.com'
});

export const callApiCheckLogin = async () => {
  const res = await fetch('https://api.stage.meepcloud.com/graphql', {
    method: 'POST',
    headers: headers,
    credentials: 'include',
    body: JSON.stringify({
    query: `
      query Root($search: searchInputObjectType) {
      getStoreList (search: $search) {
          data {
            id
          }
        }
      }`
    })
  });
  if(res.status < 400) {
    return {isLogin: true};
  } else {
    return {isLogin: false};
  }
};

export const callApiLoginFlow = async ({email, password}) => {
  const res = await fetch('https://api.stage.meepcloud.com/auth/login', {
    method: 'POST',
    headers: headers,
    credentials: 'include',
    body: JSON.stringify({email, password})
  });
  if(res.status < 400) {
    return res.json();
  } else {
    return {error: 'network error'};
  }
}

export const callApiLogout = async () => {
  return await fetch('https://api.stage.meepcloud.com/auth/logout', {
    method: 'GET',
    headers: headers,
    credentials: 'include',
    body: {}
  });
}