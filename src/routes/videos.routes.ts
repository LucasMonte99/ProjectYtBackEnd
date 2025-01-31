import { Router } from "express";
import { VideoRepository } from "../modules/videos/repositories/VideosRepository";
import { login } from "../middleware/login";


const videosRoutes = Router();
const videoRepository = new VideoRepository();

videosRoutes.post("/create-video/:user_id", login, (request, response) =>{
    const { user_id } = request.params; 

    if (!user_id) {
        return response.status(400).json({ error: "O parâmetro 'user_id' é obrigatório." });
    }

    request.body.user_id = user_id;
videoRepository.create(request, response);
});

videosRoutes.get("/get-videos/:user_id", login, (request, response) => {
videoRepository.getVideos(request, response)
});

videosRoutes.get("/search", (request, response) =>{
videoRepository.searchVideos(request, response);
});


export { videosRoutes };