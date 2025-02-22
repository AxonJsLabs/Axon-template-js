/**
 * 
 * @param {import("@axonlabs/core").Request} req 
 * @param {import("@axonlabs/core").Response} res 
 * @param {import("@axonlabs/core").nextFn} next 
 * 
 * or you can use just Middleware type
 * 
 * @type {import("@axonlabs/core").Middleware}
 */
const helloWorld = async (req, res, next) => {
    console.log("middleware: Hello, World!");
    next();
}

export default {
    helloWorld
};