class EasyHttp {
  //HTTP get method
  async get(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  }

  async post(url, data) {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    return json;
  }

  async put(url, data) {
    const res = await fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    })
    const json = await res.json();
    return json;
  }

  async delete(url) {
    const res = await fetch(url, {
      method: 'DELETE'
    });
    const json = await 'Resource is deleted...'
    return json
  }

}