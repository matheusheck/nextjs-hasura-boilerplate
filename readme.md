<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/matheusheck/replay-board-game">
    <img src="https://brisasparanoia.s3.us-east-2.amazonaws.com/logo-replay.png" alt="Logo" width="300" height="120">
  </a>

  <h3 align="center">Replay: board game SPA</h3>

  <p align="center">
    This monorepo is a Web app to curate board games using Hasura for backend, postgre for database and Next.js as frontend. This application has been built using Chakra UI (including dark mode), NextAuth.js and Apollo (it's time for GraphQL).
    <br />
    ·
    <a href="https://github.com/matheusheck/replay-board-game/issues">Report Bug</a>
  </p>
</p>





<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

There are a lot of little challenges we do applying for developer position. This repo come from one of those greats that you really want to see in production.

This challenge required features for a great Board Games tracking. Something between 9GAG, Reddit or Product Hunt.
As propose, follow the business rules (written like tests).

- It should show a list of games provided by Hasura
- It should use Sever Side Render provided by Next.JS to correct SEO indexation
- It should catch user data about games: Likes, game owners and who wish with the game

* This project runs containerized on Docker

Feel free to run it! If you like, please help me maintain! :smile:


### Built With

This repo is built using TypeScript for Next on Front and Backend by Hasura.

* [Next.JS](https://nextjs.org/)
* [Hasura](https://hasura.io/)



<!-- GETTING STARTED -->
## Getting Started

To check this code, clone it and use as you need: you can easily run yarn dev script and start seeing how the repo was thought.

### Prerequisites

To use TS/JavaScript out of the browser NODE.JS is the popular form and use Docker to compose this images and run within the planned environment. 

* [Docker](https://nodejs.org/en/)
* [Node](https://nodejs.org/en/)

## Other interesting repositories

This repo is a fork of a really nice Boilerplate, take a look. And about TS/JS, I recommend using node and this ecosystem but you can also recommend check Deno, a new JS V8 runner also developed by Ryan Dahl 10 years after Node initial release.

1. [Hasura Next.js boilerplate](https://nirmalyaghosh.com/guides/nextjs-hasura-boilerplate)
2. [Deno](https://deno.land)


### Coding and Testing

1. Clone the repo
   ```sh
   git clone https://github.com/matheusheck/replay-board-game
   ```
2. Run the bootstrap script by running the following command from the root of your project:
   ```sh
   cd nextjs-hasura-boilerplate && yarn bootstrap
   ```

3. Create a Google OAuth Client from
  https://console.developers.google.com/apis/credentials/oauthclient and copy the credentials to GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in your .env file inside the frontend directory.

4. Start Docker and run both the applications by running the following command from the root of your project:
   ```sh
   yarn dev
   ```
  We need to start Docker and then run the above command (with at least 4gb dedicated). The Hasura console will be available at http://localhost:8080/console. The Hasura GraphQL endpoint will be up and running on http://localhost:8080/v1/graphql. The Next.js application will be available at http://localhost:3000/.

<!-- Troubleshooting -->
## Troubleshooting

- Hasura docker crash and restart with "Exit 137" error
    - Increase ram to at least 4gb for ex.

- Hasura docker crash and restart with "Exit 137" error
    - Increase ram to at least 4gb for ex.

- Hasura docker crash and restart with "Exit 137" error
    - Increase ram to at least 4gb for ex.
    
- Hasura docker crash and restart with "Exit 137" error
    - Increase ram to at least 4gb for ex.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
(Sorry for committed on master, it was a 'gambiarra' to develop alone faster...)

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Matheus - matheus@conduite.tv

Project Link: [https://github.com/matheusheck/replay-board-game](https://github.com/matheusheck/replay-board-game)

