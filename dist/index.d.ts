/** Class representing a BestListWrapper. */
declare class BestListWrapper {
    token: any;
    /**
    * Set the api token.
    * @async
    * @method
    * @param {string} token - Api token
    * @returns {True} Sucessfully set token
    */
    setToken(token: string): Promise<boolean>;
    /**
    * Get a botlist bot.
    * @async
    * @method
    * @param {String} id - Bot id
    * @returns {Bot} The bot object
    */
    getBot(botId: string): Promise<any>;
    /**
    * Get a botlist user.
    * @async
    * @method
    * @param {String} id - User id
    * @returns {User} The user object
    */
    getUser(userId: string): Promise<any>;
    /**
    * Get if the user has already voted for a bot today.
    * @async
    * @method
    * @param {String} id - User id
    * @returns {User} The user object
    */
    getUserVoted(userId: string): Promise<any>;
    /**
    * Get if the user has already reviewed for a bot today.
    * @async
    * @method
    * @param {String} id - User id
    * @returns {User} The user object
    */
    getUserReviewed(userId: string): Promise<any>;
}
export = BestListWrapper;
