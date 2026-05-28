import { Request, Response } from 'express';
import CommunitySettings from '../models/CommunitySettings';
import * as factory from './factoryController';

export const getCommunitySettings = factory.getAll(CommunitySettings);
export const getOneCommunitySettings = factory.getOne(CommunitySettings);
export const createCommunitySettings = factory.createOne(CommunitySettings);
export const updateCommunitySettings = factory.updateOne(CommunitySettings);
export const deleteCommunitySettings = factory.deleteOne(CommunitySettings);
