import { CalendarIcon, ChatIcon, CheckIcon, NotAllowedIcon, StarIcon, TimeIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, HStack, Img, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
import IGame from "types/game";

interface IProps {
  game: IGame;
}

const Game: FC<IProps> = ({ game }) => {
  const gameCard = () => {
    return (
      <Link href={`/games/${game.id}`}>
      <Stack
        spacing={4}
        isInline
        alignItems="center"
        p={4}
        borderBottomWidth={1}
      >
        <Img width="300px"
          height="300px"
          src={game.image}
          alt={game.name}
          borderRadius="20px" />
          <Stack alignItems="center">
            <Text fontWeight="bold">{game.name}</Text>
            <Text >by: <strong>{game.creator}</strong></Text>
            <HStack justifyContent="space-around" borderTopWidth={1} width="220px">
              <CalendarIcon /> <Text fontWeight="bold" fontSize="xl">{game.released_at}</Text>
              <ChatIcon /><Text fontWeight="bold" fontSize="xl">{game.players}</Text>
            </HStack>
          <HStack alignItems="center" justifyContent="space-between" borderBottomWidth={1} width="220px">
            <NotAllowedIcon /><Text fontWeight="bold" fontSize="xl">{game.age}</Text>
            <TimeIcon /><Text fontWeight="bold" fontSize="xl">{game.duration}</Text>
          </HStack>
          
          <Text fontSize="md" p={4}textAlign="center" >
            {game.description}
          </Text>
          <HStack>
          <Button><CheckIcon /></Button>
          <Button><StarIcon /></Button>
          <Button><TriangleUpIcon /></Button>
          </HStack>
          </Stack>
          
      </Stack>
      </Link>
    );
  };

  return (
    <Box shadow="lg" rounded="lg">
      <Stack spacing={0}>
        {gameCard()}
      </Stack>
    </Box>
  );
};

export default Game;
