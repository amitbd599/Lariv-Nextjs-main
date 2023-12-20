

class api_fetch_fun{

    async post_method (api) {
        try{
            const rawResponse = await fetch(api, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: "a@a.com", password: "admin" }),
          });

          return true
        }catch(e){
            return false
        }
        
    }
    async get_method (api) {
        const rawResponse = await fetch(api, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: "a@a.com", password: "admin" }),
          });

          return rawResponse
    }
    async delete_method (api) {
        const rawResponse = await fetch(api, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: "a@a.com", password: "admin" }),
          });

          return rawResponse
    }

}


export const {post_method, get_method, delete_method} = new  api_fetch_fun()