/** Class representing a BestListWrapper. */
declare class BestListWrapper {
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
    setToken(token: string): Promise<boolean>;
    /**
    * Get a botlist bot.
    * @exports client/getBot
    * @async
    * @method
    * @param {String} id - Bot id
    * @returns {Bot} The bot object
    */
    getBot(botId: string): Promise<any>;
    /**
    * Get a botlist user.
    * @exports client/getUser
    * @async
    * @method
    * @param {String} id - User id
    * @returns {User} The user object
    */
    getUser(userId: string): Promise<any>;
    /**
    * Get if the user has already voted for a bot today.
    * @exports client/getUserVoted
    * @async
    * @method
    * @param {String} id - User id
    * @returns {User} The user object
    */
    getUserVoted(userId: string): Promise<any>;
    /**
    * Get if the user has already reviewed for a bot today.
    * @exports client/getUserReviewed
    * @async
    * @method
    * @param {String} id - User id
    * @returns {User} The user object
    */
    getUserReviewed(userId: string): Promise<any>;
}
export = BestListWrapper;
