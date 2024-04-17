import express from 'express';
import { createTour, deleteTour, getAllTour, getFeaturedTours, getOneTour, getTourBySearch, getTourCount, updateTour } from '../controllers/toursController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// create new tour
// verifyAdmin will check if connected user is authenticated as admin
router.post('/new', verifyAdmin, createTour);

// update new tour
router.put('/:id', verifyAdmin, updateTour);

// delete a tour
router.delete('/:id', verifyAdmin, deleteTour);

// get a single tour
router.get('/:id', getOneTour);

// get all tours
router.get('/', getAllTour);

// get tours by search
router.get('/search/result', getTourBySearch);
router.get('/search/featuredTours', getFeaturedTours);
router.get('/search/tourCount', getTourCount);

export default router;