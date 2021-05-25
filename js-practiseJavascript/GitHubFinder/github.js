class Github {
  constructor() {
    //register app and get client id and client secret
    this.client_id = 'f38f9226364117dea940';
    this.client_secret = '18f279660659e8860edba1ad9d32d53fc6c51018';
    this.repo_count = 5;
    this.repo_sort = 'created:asc'
  }

  async getUsers(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    console.log('profile :>> ', profile);
    return { profile, repos };
  }
}