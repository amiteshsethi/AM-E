import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { configureOPenAI } from "../config/openAiConfig.js";
import { ChatCompletionRequestMessage, OpenAIApi } from "openai";

export const generateChatCompleteion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { message } = req.body;
    const user = await User.findById(res.locals.jwtData.id);

    if (!user) {
      return res.status(401).send("User not registered OR Token malfunctioned");
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permissions didn't match");
    }

    //grab chat and send along with old chats
    //grabbing old chats of user
    const chats = user.chats.map(({ role, content }) => ({
      role,
      content,
    })) as ChatCompletionRequestMessage[];

    // adding latest chat 
    chats.push({ content: message, role: "user" });
    user.chats.push({ content: message, role: "user" });

    // getting openai config
    const config = configureOPenAI();

    //calling the open-ai-api's 
    const openai = new OpenAIApi(config);
    const chatResponses = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: chats,
    });

    //saving the new response from open-ai into user's chats 
    user.chats.push(chatResponses.data.choices[0].message);
    // save the user with latest chats into dB an return response to frnt-end
    await user.save();
    return res.status(200).json({ chats: user.chats });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
