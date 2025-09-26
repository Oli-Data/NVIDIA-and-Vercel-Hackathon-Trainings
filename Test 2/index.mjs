import 'dotenv/config';
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.NVIDIA_API_KEY,
    baseURL: process.env.NVIDIA_BASE_URL,
});

async function main() {
    try{
        const resp = await client.chat.completions.create({
        model: process.env.NVIDIA_MODEL,
        messages: [
            { role: "user", content: "Give me one fun fact about hackathons." }
         ],
        temperature: 0.5,
        max_tokens: 1024, 
        stream: false,
        extra_body:{
            max_thinking_tokens: 256
        }
    });

    console.log("RAW:", JSON.stringify(resp, null, 2));
    console.log("Nemotron says:", resp.choices[0]?.message?.content ?? "(no content)");
    } 
    
    catch (err){
        console.error("Error:", err);
    }
}

main();