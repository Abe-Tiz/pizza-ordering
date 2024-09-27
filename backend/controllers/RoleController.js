
const { addRole } = require("../models/RoleModel");
const { ZodError } = require("zod");
const { roleSchema } = require("../zod/Validation");

// create permission
const createRole = async (req, res) => {
  try {
    // Validate request body
    const validatedData = roleSchema.parse(req.body);

    const { name, permission } = validatedData;
    const newRole = await addRole(name, permission);
    res.status(201).json(newRole);
  } catch (error) {
    if (error instanceof ZodError) {
      // Handle validation errors
      res
        .status(400)
        .json({ error: "Validation error", details: error.errors });
    } else {
      // Handle other errors
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }
};

module.exports = {
  createRole,
};
