import User from '@/lib/models/user.model';

import { connect } from '@/lib/mongodb/mongoose';

export interface createOrUpdateUserParams {
  id: string;
  email:string;
  first_name: string;
  last_name: string;
  image_url: string;
  username: string;
}

export async function createOrUpdateUser(user: createOrUpdateUserParams) {
  try {
    await connect();
    const result = await User.findOneAndUpdate(
      { clerkId: user.id },
      {
        $set: {
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          avatar: user.image_url,
          username: user.username,
        },
      },
      { new: true, upsert: true }
    );

    return result;
  } catch (error) {
    console.log('Error creating/updating user', error);
  }
}

export async function deleteUser(id: string) {
  try {
    await connect();
    const user = await User.findOneAndDelete({ clerkId: id });

    return user;
  } catch (error) {
    console.log('Error deleting user');
  }
}
