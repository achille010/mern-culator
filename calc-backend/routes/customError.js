import express from "express"

const router = express.Router();

router.get('/', (res, req) => {
    throw new Error("This is a mockup error");
});

export default router;