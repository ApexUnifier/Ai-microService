import RunAi from "../../Helpers/AiHelper/ai-helper.js";


export const RunAiController = async (req,res)=>{
    const {message} = req.body;
    let response = await RunAi(message).then(console.log).catch(console.error);
    res.json(response);
}