# TODO 🚧

The site __Admin__ page allows the user to clear the database of votes–but only if a valid key is provided. This is a simplified example of auth that checks if the user entered key matches the one in the `.env`.

## Setting up your admin key

To set your app up to allow clearing the history:

* In your `.env` file, find the variable named `ADMIN_KEY` and give it a text string as a value.
* With the __Admin__ page open in the preview, enter the same value and hit the __Clear log history__ button–this time it should allow you to clear the history.

See the `reset` endpoint in `server.js` to learn how this works.

## Keep going! 🚀

Your new site is all yours so it doesn't matter if you break it! Try making an edit.

Follow the steps to allow the user to view the results without first submitting a vote:

The homepage shows votes cast so far when the user completes the poll, but you can allow them to see the chart straight away.

1. Add a link to `src/pages/index.hbs` after the form, which will send a query parameter to the server script:

```
<p>
 <a href="/?results=true">Show results</a>
</p>
```

2. Extend the `server.js` `GET` endpoint `/` to send a flag if the user requested the results:

```
// User requested results
params.results = request.query.results;
```

Click the __Show results__ link to see the results without voting!

_Tip: If you just cleared the log, make sure you vote again so that there are some results to show._ 🙈
