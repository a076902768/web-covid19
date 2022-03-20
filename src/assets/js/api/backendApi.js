import Api from '@/assets/js/api/api.js';

class BackendApi extends Api {
  static async getData({ page, city }) {
    const params = {
      page, city
    }
    console.log(params);
    const res = await this.callAxios('POST', '/data', params, null, null);
    return res;
  }

  static async getCityList() {
    const res = await this.callAxios('GET', '/cityList', null, null, null);
    return res;
  }
}
export default BackendApi;