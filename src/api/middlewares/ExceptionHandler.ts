import { ExpressErrorMiddlewareInterface, Middleware } from 'routing-controllers';
import * as express from 'express';
import { Service } from 'typedi';

@Service()
@Middleware({ type: 'after' })
export class ExceptionHandler implements ExpressErrorMiddlewareInterface {
  public error(error: any, _req: express.Request, res: express.Response, _next: express.NextFunction) {
    const status = error.httpCode || 500;
    const responseObj: any = { message: error.message || '' };

    if (status === 400) {
      // Class Validator Handler
      if (typeof error === 'object' && error.hasOwnProperty('errors')) {
        const validatorErrors = {} as any;
        error.errors.forEach((element: any) => {
          if (element.property && element.constraints) {
            validatorErrors[element.property] = Object.values(element.constraints);
          }
        });
        responseObj.fields = validatorErrors;
      }
    }

    res.status(status);
    res.json(responseObj);
  }
}
