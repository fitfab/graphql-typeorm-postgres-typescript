import { User } from "../entity/User";

export default {
  Query: {
    users: async (_: any, args: any) => {
      console.log(_, args);
      return await User.find();
    }
  }
};
