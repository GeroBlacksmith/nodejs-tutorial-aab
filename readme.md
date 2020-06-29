# APP ENGINE SETUP

WORKS WITH NODEJS12

App engine provides you with a server in the cloud that scales automatically based on the upcoming traffic of your app

To set up yoou need a google cloud platform account and also the google cloud command line tools.

Then you need to add a app.yaml file with the next configuration

```yaml
runtime: nodejs12
```

App engine will run your code by looking in the package.json for a start script.

From there we can run in the console:

`gcloud app deploy`

If all comes fine you will have an URL available at your google cloud account to you app deployed
