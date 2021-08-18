import AccessDeniedIndicator from "components/AccessDeniedIndicator";
import Page from "components/Pages/Games/Game";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import React, { FC } from "react";
import ISession from "types/session";

const game = {
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
  };

interface IProps {
  session: ISession;
}

const GamesPage: FC<IProps> = ({ session }) => {
  if (!session) {
    return <AccessDeniedIndicator />;
  }

  return (
    <>
      <Head>
        <title>Games Page</title>
      </Head>
      <Page game={game}/>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  return {
    props: {
      session,
    },
  };
};

export default GamesPage;
