import { Response } from "express";

export class ErrorHandler {
  parseError(msg: string, res: Response) {
    //   "[codigo de error], mensaje de error"

    if (msg.indexOf("[") != -1) {
      let msgSplited: Array<string> = msg.split(","); // ["[codigo de error], "mensaje de error""]
      let codeStr: string = msgSplited[0].replace("[", "").replace("]", ""); //"codigo de error"
      return res.status(+codeStr).send({ msg: msgSplited[1] });
    } else {
      return res.status(500).send({ msg });
    }
  }
}
