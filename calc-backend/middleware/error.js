import express from "express";



export const errorHandler = (err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ Error: 'Internal Server Error'});
}

