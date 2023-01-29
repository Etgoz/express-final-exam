import type { NextFunction, Request, Response } from 'express';

/**
 * The middleware should check if the payload valid
 * @param req
 * @param res
 * @param next
 */
export default function validator(req: Request, res: Response, next: NextFunction) {
	// TODO implement me
	if (!req.params && !req.body) {
		res.status(400).send({ message: 'no params sent' });
	}
	if (req.query && !req.body) {
		if (!req.query.weight || !req.query.height || !req.query.weightUnit || !req.query.heightUnit) {
			res.status(400).send({ message: 'invalid query input' });
		}
	} else if (req.body && !req.query) {
		if (!req.body.weight || !req.body.height || !req.body.weightUnit || !req.body.heightUnit) {
			res.status(400).send({ message: 'invalid request body' });
		}
	}
	next();
}
