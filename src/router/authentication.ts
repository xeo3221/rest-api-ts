import { login, register } from "../controllers/authentication";
import express, { Request, Response, RequestHandler } from "express";

export default (router: express.Router) => {
  router.post("/auth/register", register);
  router.post("/auth/login", login);
};
