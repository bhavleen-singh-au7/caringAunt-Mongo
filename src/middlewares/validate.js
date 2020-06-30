import { check, validationResult } from 'express-validator';

export const signUpValidate = [
    check('name', 'Type key as name').exists(),
    check('name', 'Name cannot be empty').not().isEmpty(),
    check('name', 'Name must have only alphabetical characters').matches(/[\D]/, "i"),
    check('name', 'Name should have atleast 4 char').isLength({ min: 4 }),
    check('email', 'Type key as email').exists(),
    check('email', 'Email id shouldn\'t be empty').not().isEmpty(),
    check('email', 'Email id should be in correct format').matches(/[\D\d]{4}@[\D]{4}.[\D]{3}/, "i"),
    check('password', 'Type key as password').exists(),
    check('password', 'Password shouldn\'t be empty').not().isEmpty(),
    check('password', 'Password should have atleast 8 char').isLength({ min: 8 }),
    check('contact', 'Type key as contact').exists(),
    check('contact', 'Contact number shouldn\'t be empty').not().isEmpty(),
    check('contact', 'Please provide a valid contact number').optional().isNumeric(),
    check('contact', 'Contact number should contain 10 digits').isLength({ min: 10, max: 10 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({  // 422 -> Unprocessable Entity
                error: errors.array()[0].msg
            });
        }
        next();
    }
];

export const logInValidate = [
    check('email', 'Type key as email').exists(),
    check('email', 'Email id shouldn\'t be empty').not().isEmpty(),
    check('email', 'Email should be in correct format').isEmail(),
    check('password', 'Type key as password').exists(),
    check('password', 'Password shouldn\'t be empty').not().isEmpty(),
    check('password', 'Password should be atleast 8 char').isLength({ min: 8 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                error: errors.array()[0].msg
            });
        }
        next();
    }
];

export const menstvalidate = [
    check('pastPeriodDate', 'Type key as pastPeriodDate').exists(),
    check('pastPeriodDate', 'Past period date shouldn\'t be empty').not().isEmpty(),
    check('pastPeriodDate', 'Please provide \'YYYY-MM-DD\' format for date').matches(/^(20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/, "i"),
    check('menstrualCycleLength', 'Type key as menstrualCycleLength').exists(),
    check('menstrualCycleLength', 'Menstrual cycle length shouldn\'t be empty').not().isEmpty(),
    check('menstrualCycleLength', 'In Menstrual-Cycle-Length only numeric values are allowed').optional().isNumeric(),
    check('menstrualCycleLength', 'Menstrual-Cycle-Length must be between 26 and 30').matches(/^[2][6-9]|[3][0-1]/, "i"),
    check('periodLength', 'Type key as periodLength').exists(),
    check('periodLength', 'Period length shouldn\'t be empty').not().isEmpty(),
    check('periodLength', 'In Period-Length only numeric values are allowed').isNumeric(),
    check('periodLength', 'Period length must be between 4 and 8').matches(/^[4-8]/, "i"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                error: errors.array()[0].msg
            });
        }
        next();
    }
];