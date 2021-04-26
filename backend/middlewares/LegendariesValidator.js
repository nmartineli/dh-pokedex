/*function validator(req, res, next) {
	const { description } = req.body;

	if (!description) {
		return res.status(400).json({ error: 'Description is required' });
	}
	next();
}

module.exports = validator;*/
/*
 Express Validator:
const { check, validationResult, body } = require('express-validator');

const validationList = [
	body('name', 'Name is required').notEmpty(),
	body('description', 'Description length must be greater than 10').isLength({ min: 10 }),
	body('type', 'Type is required').notEmpty(),
];

module.exports = validationList;
*/

const yup = require('yup');

function validator(req, res, next) {
	const schema = yup.object().shape({
		name: yup
			.string()
			.typeError('Name must be a string')
			.required('Name is required')
			.min(2, 'Name must have at least 10 characters'),
		type: yup
			.string()
			.typeError('Type must be a string')
			.required('Type is required')
			.min(2, 'Type must have at least 10 characters'),
		description: yup
			.string()
			.typeError('Description must be a string')
			.required('Description is required')
			.min(10, 'Description must have at least 10 characters'),
		healthPoints: yup.string().typeError('Health Points must be a string').required('Health Points is required'),
		specialAttack: yup.string().typeError('Special Attack must be a string').required('Special Attack is required'),
		defense: yup.string().typeError('Defense must be a string').required('Defense is required'),
		attack: yup.string().typeError('Attack must be a string').required('Attack is required'),
		experience: yup.string().typeError('Experience must be a string').required('Experience is required'),
		specialDefense: yup.string().typeError('Special Defense must be a string').required('Special Defense is required'),
		img: yup.string().typeError('Image must be a valid URL').required('Image is required'),
	});

	if (!schema.isValidSync(req.body)) {
		schema
			.strict()
			.validate(req.body, { abortEarly: false })
			.catch((errors) => {
				return res.status(400).json({ errors: errors.errors });
			});
	} else {
		next();
	}
}

module.exports = validator;
