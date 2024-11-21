export class UmamiApiClient {
  endpoint = import.meta.env.UMAMI_ENDPOINT;
  websiteId = import.meta.env.UMAMI_WEBSITE_ID;
  authToken: string = '';

  static #instance: UmamiApiClient;

  static async getInstance(): Promise<UmamiApiClient> {
    if (!this.#instance) {
      this.#instance = new UmamiApiClient();
      await this.#instance.retriveAuthToken();
    }
    return this.#instance;
  }

  async retriveAuthToken() {
    return
    const resUser = await fetch(this.endpoint + `/auth/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: import.meta.env.UMAMI_USERNAME,
        password: import.meta.env.UMAMI_PASSWORD,
      })
    });
    const user = await resUser.json();
    console.log(user, "<- umami user")
    this.authToken = user.token;
  }

  async getPageView(path: string): Promise<number> {
    return 0
    const url = new URL(this.endpoint + `/websites/${this.websiteId}/metrics`)

    url.searchParams.append('startAt', new Date("2023").getTime().toString())
    url.searchParams.append('endAt', new Date().getTime().toString())
    url.searchParams.append('type', 'url')
    url.searchParams.append('url', path)
    const res = await fetch(url.toString(), {
      headers: {
        'Authorization': `Bearer ${this.authToken}`
      }
    });
    if (!res.ok) {
      return 0
    }
    const metrics = await res.json();
    return metrics[0].y ?? 0;
  }
}
