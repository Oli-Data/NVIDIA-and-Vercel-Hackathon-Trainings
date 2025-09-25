const apiKey = process.env.NVIDIA_API_KEY;
const baseURL = process.env.NVIDIA_BASE_URL;
const model = process.env.NVIDIA_MODEL || "nvidia-nemotron-nano-9b-v2";

if(!apiKey || !baseURL){
    console.error("Missing NVIDIA_API_KEY or NVIDIA_BASE_URL.");
    process.exit(1);
}

const body = {
    model,
    messages: [{role: "user", content: "Say hello in one short sentence."}],
    temperature: 0.3
};

const resp = await fetch('${baseURL}/chat/completions',{
    method: "POST",
    headers: {
        "Authorization": 'Bearer ${apiKey}',
        "Content-Type": "applications/json"
    },
    body :JSON.stringify(body)
});

if(!resp.ok){
    console.error("Request failed:" resp.status, await resp.text());
    process.exit(1);
}

const data = await resp.json();
console.log("Reply:", data.choices?.[0]?.message?.content ?? "(no content)");
