import { Box, Stack } from "@chakra-ui/react";
import Loader from "components/Loader";
// import Game from "components/Pages/Games/Game";
// import { useFetchGamesSubscription } from "generated-graphql";
import React from "react";
import IGame from "types/game";
import Game from "./Game";

const GamesPageComponent = () => {
  // const { games } = useFetchGamesSubscription();

  const games = [
    {
      "id": "72ad01dc-9c5e-4844-a60d-6b653c75a363",
      "image": "https://brisasparanoia.s3.us-east-2.amazonaws.com/game-1.jpg",
      "name": "Dune: imperium",
      "players": "1-4",
      "released_at": "2020",
      "games_likes": [
        {
          "user": {
            "id": "72ad01dc-9c5e-4844-a60d-6b653c75a363",
            "image": "https://brisasparanoia.s3.us-east-2.amazonaws.com/avatar_1.jpg",
            "name": "John Doe"
          }
        }
      ],
      "creator": "John Doe",
      "description": "influence, intrigue, and combat in the universe of Dune.",
      "duration": "60 - 120 min",
      "age": "14+"
    },
    {
      "id": "72ad22dc-9c5e-4844-a60d-6b653c75a363",
      "image": "https://brisasparanoia.s3.us-east-2.amazonaws.com/game-2.jpg",
      "name": "Exploding Kittens",
      "players": "2-5",
      "released_at": "2020",
      "games_likes": [],
      "creator": "Matthew Inman and Elan Lee",
      "description": "is a card game where you trick your friends into blowing up. The last player left alive, wins.",
      "duration": "+15 min",
      "age": "7+"
    },
    {
      "id": "22ad01dc-9c5e-4844-a60d-6b653c75a363",
      "image": "https://brisasparanoia.s3.us-east-2.amazonaws.com/game-3.jpg",
      "name": "Dungeons & Dragons",
      "players": "2-4",
      "released_at": "1983",
      "games_likes": [],
      "creator": "Gary Gygax and Dave Arneson",
      "description": "Dungeons & Dragons is a fantasy tabletop role-playing game originally designed by Gary Gygax and Dave Arneson. It was first published in 1974 by Tactical Studies Rules, Inc. It has been published by Wizards of the Coast since 1997.",
      "duration": "60 - 120 min",
      "age": "10+"
    },
    {
      "id": "33ad01dc-9c5e-4844-a60d-6b653c75a363",
      "image": "https://brisasparanoia.s3.us-east-2.amazonaws.com/game-4.jpg",
      "name": "The game of Life",
      "players": "2-",
      "released_at": "2020",
      "games_likes": [],
      "creator": "John Doe",
      "description": "The Game of Life, also known simply as Life, is a board game \noriginally created as The Checkered Game of Life and was Americas first popular parlour game.",
      "duration": "60 - 80 min",
      "age": "8+"
    },
    {
      "id": "54ad01dc-9c5e-4844-a60d-6b653c75a363",
      "image": "https://brisasparanoia.s3.us-east-2.amazonaws.com/game-5.jpg",
      "name": "Catan",
      "players": "3-4",
      "released_at": "1995",
      "games_likes": [],
      "creator": "John Doe",
      "description": "Catan, previously known as The Settlers of Catan or simply Settlers, is a german strategy board game in witch \nafter a long voyage of great deprivation, your ships have finally reached the coast of an uncharted island. \nThe players in the game represent settlers establishing settlements on the island of Catan.",
      "duration": "60 - 120 min",
      "age": "14+"
    }
  ]

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

export default GamesPageComponent;
