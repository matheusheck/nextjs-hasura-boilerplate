import IUser from "types/user";

export default interface IGame {
  id: string;
  name: string;
  creator: string;
  image: string;
  released_at: string;
  players: string;
  age: string;
  duration: string;
  description: string;
  games_likes: IUser[];
}
