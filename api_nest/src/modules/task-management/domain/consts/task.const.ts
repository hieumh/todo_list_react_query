import * as Joi from 'joi';

export const taskSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  start: Joi.string().required(),
  end: Joi.string().required(),
  description: Joi.string(),
});
