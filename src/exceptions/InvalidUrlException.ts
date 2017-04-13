export default class InvalidUrlException extends Error {
    constructor() {
        super("The url format is invalid");
    }
}
