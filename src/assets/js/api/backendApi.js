import Api from '@/assets/js/api/api.js';

class BackendApi extends Api {
  static async getData({ page, city, startDt, endDt }) {
    const params = {
      page, city, startDt, endDt
    }
    const res = await this.callAxios('POST', '/data', params, null, null);
    return res;
  }

  static async getCityList() {
    const res = await this.callAxios('GET', '/cityList', null, null, null);
    return res;
  }
}
export default BackendApi;