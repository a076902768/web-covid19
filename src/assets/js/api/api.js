import axios from 'axios';

class Api {
  static SERVER = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

  static async callAxios(method, url, params, contentType, auth) {
    const headers = {};
    const responseTypeText = 'json';
    headers['Content-Type'] = contentType || 'application/json';

    if (auth) {
      const { token } = window.$nuxt.$store.state.user;

      headers.Authorization = `Bearer ${token}`;
    }

    try {
      const { status, data } = await axios({
        headers,
        method,
        url: this.SERVER + url,
        data: params,
        responseType: responseTypeText
      });

      return new Promise((resolve, reject) => {
        if (status === 200) {
          resolve(data);
        } else {
          reject(new Error(''));
          // this.$message.error(data.message);
        }
      });
    } catch (error) {
      return error;
    }
  }

}

export default Api;