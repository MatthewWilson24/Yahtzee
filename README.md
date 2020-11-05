# Yahtzee

A multiplayer Yahtzee web app.

## How to continue working on Yahtzee

1. Fork the repository (click the "fork" button in the top-left of the repository main page on Github)

2. Find the url of your forked repository (on your repo's main page, click the green "Code" button and copy the url you see)

3. In your local repository, run: `git remote set-url origin <url-of-your-cloned-repo>`

4. You can now push & pull to your own version of the code.

## How to live deploy your own version of Yahtzee

1. Set up a free heroku account (https://signup.heroku.com/)

2. Create a new app.

3. Install the heroku command-line interface (https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

4. Login on the command line by running `heroku login`

5. Run `heroku authorizations:create` to generate an API key. Make a note of the `token`.

6. In your github repo, go to settings > secrets and add a new secret called `HEROKU_API_KEY` and give it the value of your token.

7. In the file .github/workflows/deploy.yml, find the "Deploy to Heroku" step and change the text `softwire-yahtzee` to the name of your app.

8. When you push to git, the app should now automatically deploy to your heroku app url.
