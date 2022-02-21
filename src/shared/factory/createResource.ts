import { Model } from "mongoose";

export const createResource = (ResourceModel: Model<any>) => async <T>(resource: T): Promise<T> => {
  const newResource = new ResourceModel(resource);
  return await newResource.save();
}