

class api_fetch_fun {

  async register(obj) {
    try {
      const response = await fetch("/api/user/registration", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      return true
    } catch (e) {
      return false
    }

  }
  async login(obj) {
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      return response.json()
    } catch (e) {
      return false
    }
  }
  async create(obj) {
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      return response.json()
    } catch (e) {
      return false
    }
  }
  async get_single(api) {
    try {
      const response = await fetch(api);
      console.log(response);
      return response.json()
    } catch (e) {
      return false
    }
  }
  async update(api, obj) {
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      return response.json()
    } catch (e) {
      return false
    }
  }



}

const client_api = new api_fetch_fun()

export default client_api