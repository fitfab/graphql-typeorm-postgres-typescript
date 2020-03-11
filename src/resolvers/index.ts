import { User } from "../entity/User";

export default {
  Query: {
    users: async (_: any, args: any) => {
      const users = await User.find();
      console.log("users: ", _, args, users);
      return users;
    }
  }
};
