
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-Ic1FmWrIQDcn34iN9FAik3XS",
    apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

export const sendAiRequest = async(request: string, max_tokens: number = 16) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: request,
        max_tokens: max_tokens,
        temperature: 0.8,
      });
      console.log(response.data.choices[0].text)
    return response.data.choices[0].text;
}
