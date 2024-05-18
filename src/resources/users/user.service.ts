import * as userRepo from './user.memory.repository';

const getAll = (): Promise<any[]> => userRepo.getAll();

export { getAll };
