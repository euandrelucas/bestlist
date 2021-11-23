"use strict";
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
class BestListWrapper {
    /**
    * Set the api token.
    * @exports client/setToken
    * @async
    * @method
    * @param {string} token - Api token
    * @returns {True} Sucessfully set token
    */
    /** this token: bestlist token */
    token;
    async setToken(token) {
        this.token = token;
        axios_1.default.get('https://bestlist.online/api/bots/', {
            headers: { Authorization: this.token }
        }).then((res) => {
            if (res.status != 200) {
                throw new Error('Invalid token, set a token with: <client>.setToken(\"bestlist token here\")');
            }
            else {
                return true;
            }
        }).catch((e) => {
            throw new Error('Invalid token, set a token with: <client>.setToken(\"bestlist token here\")');
        });
    }
    /**
    * Get a botlist bot.
    * @exports client/getBot
    * @async
    * @method
    * @param {String} id - Bot id
    * @returns {Bot} The bot object
    */
    async getBot(botId) {
        if (!this.token) {
            throw new Error("No token set, set a token with: <client>.setToken(\"bestlist token here\")");
        }
        return await axios_1.default.get(`https://bestlist.online/api/bots/${botId}`, {
            headers: { Authorization: this.token }
        }).then(res => res.data);
    }
    /**
    * Get a botlist user.
    * @exports client/getUser
    * @async
    * @method
    * @param {String} id - User id
    * @returns {User} The user object
    */
    async getUser(userId) {
        if (!this.token) {
            throw new Error("No token set, set a token with: <client>.setToken(\"bestlist token here\")");
        }
        return await axios_1.default.get(`https://bestlist.online/api/users/${userId}`, {
            headers: { Authorization: this.token }
        }).then(res => res.data);
    }
    /**
    * Get if the user has already voted for a bot today.
    * @exports client/getUserVoted
    * @async
    * @method
    * @param {String} id - User id
    * @returns {User} The user object
    */
    async getUserVoted(userId) {
        if (!this.token) {
            throw new Error("No token set, set a token with: <client>.setToken(\"bestlist token here\")");
        }
        return await axios_1.default.get(`https://bestlist.online/api/users/voted/${userId}`, {
            headers: { Authorization: this.token }
        }).then(res => res.data);
    }
    /**
    * Get if the user has already reviewed for a bot today.
    * @exports client/getUserReviewed
    * @async
    * @method
    * @param {String} id - User id
    * @returns {User} The user object
    */
    async getUserReviewed(userId) {
        if (!this.token) {
            throw new Error("No token set, set a token with: <client>.setToken(\"bestlist token here\")");
        }
        return await axios_1.default.get(`https://bestlist.online/api/users/reviewed/${userId}`, {
            headers: { Authorization: this.token }
        }).then(res => res.data);
    }
}
module.exports = BestListWrapper;
