import axios from "axios";
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
    token: any;
    async setToken(token: string) {
        this.token = token;
        if(!this.token) throw new Error('Provide a token')
        axios.get('https://bestlist.online/api/bots/', {
            headers: { Authorization: this.token }
        }).then((res) => {
            if(res.status != 200) {
                throw new Error('Invalid token, set a token with: <client>.setToken(\"bestlist token here\")')
              } else {
               return true
             }
        }).catch((e) => {
            throw new Error('Invalid token, set a token with: <client>.setToken(\"bestlist token here\")')
        })
    }
    /**
    * Get a botlist bot.
    * @exports client/getBot
    * @async
    * @method
    * @param {String} id - Bot id
    * @returns {Bot} The bot object
    */
    async getBot(botId: string) {
        if (!this.token) {
            throw new Error("No token set, set a token with: <client>.setToken(\"bestlist token here\")");
        }
        return await axios.get(`https://bestlist.online/api/bots/${botId}`, {
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
    async getUser(userId: string) {
        if (!this.token) {
            throw new Error("No token set, set a token with: <client>.setToken(\"bestlist token here\")");
        }
        return await axios.get(`https://bestlist.online/api/users/${userId}`, {
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
    async getUserVoted(userId: string) {
        if (!this.token) {
            throw new Error("No token set, set a token with: <client>.setToken(\"bestlist token here\")");
        }
        return await axios.get(`https://bestlist.online/api/users/voted/${userId}`, {
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
    async getUserReviewed(userId: string) {
        if (!this.token) {
            throw new Error("No token set, set a token with: <client>.setToken(\"bestlist token here\")");
        }
        return await axios.get(`https://bestlist.online/api/users/reviewed/${userId}`, {
            headers: { Authorization: this.token }
        }).then(res => res.data);
    }
}

export = BestListWrapper;
