import { sampleService } from "../services/sample.service.js";

/**
 * 
 * @param {import("@axonlabs/core").Request} req 
 * @param {import("@axonlabs/core").Response} res 
 * @param {import("@axonlabs/core").nextFn} next 
 * 
 * or you can use just Controller type
 * 
 * @type {import("@axonlabs/core").Controller}
 */
const helloWorld = async (req, res) => {
    const msg = sampleService();

    return res.status(200).body({
        message: msg
    });
}

export default {
    helloWorld
};