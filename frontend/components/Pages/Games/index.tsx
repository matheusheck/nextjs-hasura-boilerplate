import { Box, Stack } from "@chakra-ui/react";
import Loader from "components/Loader";
import Game from "components/Pages/Games/Game";
import { useFetchFeedsSubscription } from "generated-graphql";
import React from "react";
import IGame from "types/game";

const FeedsPageComponent = () => {
  //  const { games } = useFetchFeedsSubscription();

  const games = [{
    id: "72ad01dc-9c5e-4844-a60d-6b653c75a363",
    image: "https://brisasparanoia.s3.us-east-2.amazonaws.com/game-1.jpg",
    name: "Dune: imperium",
    players: "1-4",
    released_at: "2020",
    age: "14+",
    duration: "60-120 min",
    description: "influence, intrigue, and combat in the universe of Dune.",
    games_likes: [
      {
        "user": {
          "id": "72ad01dc-9c5e-4844-a60d-6b653c75a363",
          "image": "https://brisasparanoia.s3.us-east-2.amazonaws.com/avatar_1.jpg",
          "name": "John Doe"
        }
      }
    ],
    "creator": "John Doe"
  }];

  if (!games) {
    return <Loader />;
  }

  return (
    <Stack spacing={8}>
      {games.map((game: IGame) => {
        return (
          <Box key={game.id}>
            <Game game={game} />
          </Box>
        );
      })}
    </Stack>
  );
};

export default FeedsPageComponent;
