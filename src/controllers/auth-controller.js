import { asyncWrapper } from "../utils/async-wrapper.js";

export class AuthController {

    constructor(authService){
        this.authService = authService;
    }

    registerControll = asyncWrapper(async(req, res) => {

        const data = req.body;

        const newUser = await this.authService.register(data);

        res.status(201).json({ user: newUser });

    });

    loginControll = asyncWrapper(async(req, res) => {

        const data = req.body;

        const result = await this.authService.login(data);

        res.status(200).json(result);

    });

}