# Aspiration Test

You can find this app running as well at [https://aspiration.netlify.app/](https://aspiration.netlify.app/)

## Scripts

#### `yarn install` - Installs all your dependencies
#### `yarn start` - Runs your app locally at http://localhost:3000 
#### `yarn test` - Runs all app tests

## Dev Notes

I used the following libraries for this project:
- Apollo Client - Library used to connect to GitHub GraphQL API
- Material UI - Used to build components faster
- Enzyme & Jest - Used for testing

## How to run the app locally

Follow these steps:

1. Git Clone this repo.
2. Create a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with your GitHub account with the following scopes:
```
repo
repo_deployment
read:packages
read:org
read:public_key
read:repo_hook
user
read:discussion
read:enterprise
read:gpg_key
```
3. Create and `.env` file at the project root with the following code:
```
REACT_APP_GITHUB_TOKEN=<your_token>
``` 
4. Using your terminal, run `yarn install` or simply `yarn ` at your project root to install all dependencies.
5. Run `yarn start` to start your app. You should be able to see your app running at [http://localhost:3000](http://localhost:3000)
6. Feel free to play around with the app, typing different topics and watching results.


## Improvements

### Additional Features:

Some nice-to-have in the future would be:
- Seeing the actual repos for each topic with all their info
- Sorting of these repos
- Starring repos through a mutation.
- Lots of more features...