import express from 'express';
import { protect } from '../middleware/authMiddleware';
import * as factory from '../controllers/factoryController';
import MenuItem from '../models/MenuItem';
import Event from '../models/Event';
import Gallery from '../models/Gallery';
import Review from '../models/Review';
import Reservation from '../models/Reservation';
import Contact from '../models/Contact';
import HeroSlide from '../models/HeroSlide';
import BusinessDetails from '../models/BusinessDetails';

const createRouter = (model: any, options: { protected?: boolean; publicPost?: boolean } = {}) => {
  const router = express.Router();

  router.get('/', factory.getAll(model));
  router.get('/:id', factory.getOne(model));

  if (options.protected) {
    router.post('/', protect, factory.createOne(model));
    router.patch('/:id', protect, factory.updateOne(model));
    router.delete('/:id', protect, factory.deleteOne(model));
  } else if (options.publicPost) {
    router.post('/', factory.createOne(model));
    router.patch('/:id', protect, factory.updateOne(model));
    router.delete('/:id', protect, factory.deleteOne(model));
  } else {
    router.post('/', factory.createOne(model));
    router.patch('/:id', factory.updateOne(model));
    router.delete('/:id', factory.deleteOne(model));
  }

  return router;
};

const router = express.Router();

router.use('/menu', createRouter(MenuItem, { protected: true }));
router.use('/events', createRouter(Event, { protected: true }));
router.use('/gallery', createRouter(Gallery, { protected: true }));
router.use('/reviews', createRouter(Review, { publicPost: true })); // Public can post reviews, admin manages
router.use('/reservations', createRouter(Reservation, { publicPost: true })); // Public can book
router.use('/contact', createRouter(Contact, { publicPost: true })); // Public can contact
router.use('/hero', createRouter(HeroSlide, { protected: true }));
router.use('/business', createRouter(BusinessDetails, { protected: true }));

export default router;
