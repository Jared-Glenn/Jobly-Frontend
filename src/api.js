import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res;
  }

  static async getCompanies(name="") {
    let res;
    if (name !== "") {
      res = await this.request(`companies?name=${ name }`);
    }
    else {
      res = await this.request(`companies/`);
    }
    return res;
  }

  // Call to get a list of jobs
  static async getJobs(title="") {
    let res;
    if (title !== "") {
      res = await this.request(`jobs?title=${ title }`);
    }
    else {
      res = await this.request("jobs/")
    }
    return res;
  }

  // Register as a user
  static async registerUser(username, password, firstName, lastName, email) {
    const isAdmin = false;
    const data = { username, password, firstName, lastName, email, isAdmin }
    const res = await this.request('auth/register/', data, "post");
    return res;
  }

  // Login as a user
  static async loginUser(username, password) {
    const data = { username, password }
    const res = await this.request(`auth/token`, data, "post");
    return res;
  }

  // Get user info
  static async getUserInfo(username) {
    const res = await this.request(`users/${username}`)
    return res;
  }

  // Update user info
  static async updateUserInfo(username, firstName, lastName, email) {
    const data = { firstName, lastName, email };
    const res = await this.request(`users/${username}`, data, "patch");
    return res;
  }

  static async applyUserForJob(username, jobId) {
    const res = await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
    return res;
  }
}


export default JoblyApi;