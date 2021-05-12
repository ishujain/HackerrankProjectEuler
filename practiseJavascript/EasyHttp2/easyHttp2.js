class EasyHttp {
  //HTTP get method
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => resolve(res.json()))
        // .then(data => data)
        .catch(err => reject(err))
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)
      })
        .then(res => resolve(res.json()))
        .then(data => data)
        .catch(err => reject(err))
    });
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)
      })
        .then(res => resolve(res.json()))
        .then(data => data)
        .catch(err => reject(err))
    });
  }



}