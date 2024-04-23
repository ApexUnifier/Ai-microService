import RunAi from "../../Helpers/AiHelper/ai-helper.js";

export const RunAiController = async (req, res) => {
    const { message } = req.body;
    try {
        const response = await RunAi(message);
        console.log(response);
        res.json(response[0].message);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
