export const validate = (schema) => (req, res, next) => {
    try {
    // validate input if it's safe and in the correct format
    req.body = schema.safeParseAsync(req.body);
    next(); // proceed if valid
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: "Validation error",
            errors: err.issues.map((e) => e.message), // here err.errors id an array of errors in ZodError Object
        });
    }
};

