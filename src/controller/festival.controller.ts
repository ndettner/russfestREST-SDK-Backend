import { Request, Response, Router } from "express";
import { FestivalService } from "../service/festival.service";

export class FestivalController {
    public router: Router;
    private festivalService: FestivalService;

    constructor() {
        this.router = Router();
        this.routes()
        // this.connectWebSocket();
        this.festivalService = new FestivalService();
    }


    private routes() {
        this.router.get("/testFestival", this.testFestival)
    }

    private testFestival = async (req: Request, res: Response) => {
        try {
            res.send("Festival works!");

        } catch (error) {
            res.send(error);
        }

    }
}