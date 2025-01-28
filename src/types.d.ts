import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        user_id?: string; // Inclua isso se `user_id` for necessário
        [key: string]: any; // Permite propriedades adicionais
      };
    }
  }
}

