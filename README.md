# Aspiration Test

You can find this app running as well at [https://aspiration.netlify.app/](https://aspiration.netlify.app/)

## Dev Notes

I used the following libraries for this project:
- Apollo Client - Library used to connect to Github GraphQL API
- Material UI - Used to build components faster

## How to run the app locally

Follow these steps:

1. Git Clone this repo.
2. Create and `.env` file at the project root with the following code (ask me for the token):
```
REACT_APP_GITHUB_TOKEN=<token>
``` 

3. Using your terminal, run `yarn install` at your project root to install all dependencies.
4. Run `yarn start` to start your app. You should be able to see your app running at [http://localhost:3000](http://localhost:3000)
5. Feel free to play around with the app typing different topics and watching results.


## Improvements

### Additional Features:

Some nice-to-have in the future would be:
- Seeing the actual repos for each topic with all their info
- Sorting of these repos
- Starring repos through a mutation.
- Lots of more features...