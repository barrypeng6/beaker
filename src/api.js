const fakeAuth = {
    isAuthenticated: false,
    async getStoreList() {
      let headers = new Headers({
        "Content-Type": "application/json",
        'x-meepshop-domain': 'admin.stage.meepcloud.com'
      });
      let res = await fetch('https://api.stage.meepcloud.com/graphql', {
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
        const data = await res.json();
        console.log(data);
        this.isAuthenticated = true;
      } else {
        console.log('error')
        this.isAuthenticated = false;
      }
    },
    async authenticate(cb) {
      let headers = new Headers({
        "Content-Type": "application/json",
        'x-meepshop-domain': 'admin.stage.meepcloud.com'
      });
      let res = await fetch('https://api.stage.meepcloud.com/auth/login', {
        method: 'POST',
        headers: headers,
        credentials: 'include',
        body: JSON.stringify({email: "annie@meepshop.com", password: "123456"})
      });
      if(res.status < 400) {
        const data = await res.json();
        console.log(data);
        if(data.code === 404) {
          alert(data.error);
          this.isAuthenticated = false;
        } else {
          console.log('successful')
          this.isAuthenticated = true;
          cb(data)
        }
      } else {
        alert('error')
        this.isAuthenticated = false;
      }
    },
    async signout(cb) {
      let headers = new Headers({
        "Content-Type": "application/json",
        'x-meepshop-domain': 'admin.stage.meepcloud.com'
      });
      await fetch('https://api.stage.meepcloud.com/auth/logout', {
        method: 'GET',
        headers: headers,
        credentials: 'include',
        body: {}
      });
      this.isAuthenticated = false;
      cb();
    }
  }

  export default fakeAuth;