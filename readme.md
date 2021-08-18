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

There are a lot of little challenges we do applying for developer position. This repo come from one of those that want a production style code in a simple task.

What is important in production:
* Test your code! (Agile is already 20 y.o.)
* Document: let's communicate well
* If want to be SOLID, refact it using DDD and clean thinking and smile! :smile:

For this challenge there feature required some Business Rules.

* should return a string with the path of unordered travels

For me it is always important that your System require error handling, here showed throwing error if invalid input or inconclusive output.


### Built With

This repo is built using JavaScript for Node and tested using Mocha (Chai Assert). (Too Vanilla?)

* [Node](https://nodejs.org/en/)
* [Chai](https://www.chaijs.com)



<!-- GETTING STARTED -->
## Getting Started

To check this code, clone it and use as a Service or Util file or check it using  TDD (Test Driven Development) principle: you can easily run the test script and start seeing how the repo was thought.

### Prerequisites

To use JavaScript out of the browser NODE.JS is the popular form. I recommend it but you can also recommend check Deno, a new JS V8 runner (keep it on track at least).

* [Node](https://nodejs.org/en/)
* [Deno](https://deno.land)

## Other interesting repositories

1. [Hasura Next.js boilerplate](https://nirmalyaghosh.com/guides/nextjs-hasura-boilerplate)


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

<!-- ROADMAP -->
## Testing

To test your code is very easy once the is a script test that runs mocha on the terminal.

```sh
   npm test
   ```

   ```sh
   yarn test
   ```



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

