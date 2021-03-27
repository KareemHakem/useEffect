/* eslint-disable import/no-anonymous-default-export */
let Instance = null;

export default class {
  /**
   * For single ton
   */
  static getInstance() {
    if (Instance == null) {
      Instance = new this();
    }

    return Instance;
  }

  constructor() {
    this._successCallback = null;
    this._failCallback = null;
  }

  /**
   * Set success callback
   *
   * @param {Function} callback
   */
  set successCallback(callback) {
    if (typeof callback === "function") {
      this._successCallback = callback;
    }
  }

  /**
   * Get success callback
   *
   * @returns {null|Function}
   */
  get successCallback() {
    return this._successCallback;
  }

  /**
   * Set fail callback
   *
   * @param {Function} callback
   */
  set failCallback(callback) {
    if (typeof callback === "function") {
      this._failCallback = callback;
    }
  }

  /**
   * Get fail callback
   *
   * @returns {null|Function}
   */
  get failCallback() {
    return this._failCallback;
  }

  /**
   * KFP
   */
  kfp(callback = null) {
    let sessionPromise;
    try {
      sessionPromise = window.kfp.login_start(
        "33789",   
        "login"
      );
    } catch (q) {
      console.log(q);
      sessionPromise = new Promise((resolve) => resolve(""));
    }
    sessionPromise
      .then((ksid) => {
        if (callback !== null) {
          return callback(ksid); 
        }

        // store ksid and proceed with login
        if (this.successCallback !== null) {
          return this.successCallback(ksid);
        }
      })
      .catch((e) => {
        // proceed without sessionId
        if (this.failCallback !== null) {
          return this.failCallback(e);
        }
      });
  }
}
