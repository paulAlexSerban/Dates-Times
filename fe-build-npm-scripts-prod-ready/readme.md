## Pre and Post Scripts

`npm` supports `pre` and `post` scripts. `pre` scripts run before a specific script while `post` scripts run afterward. You can create pre and post scripts for any script, just prefix "pre" or "post" to your script name.

For example, below are pretest and posttest scripts that will run before and after the test script respectively.

```json
{
  "scripts": {
    "pretest": "npm run lint",
    "test": "jest",
    "posttest": "npm run build"
  }
}
```

## Running Multiple npm Scripts

You can run multiple npm scripts in two ways:

- Sequentially
- In Parallel

To run multiple npm scripts sequentially use &&, for example:

```bash
npm run start && npm test
```

To run multiple npm scripts in parallel use &, for example:

- **npm run server & npm run client**

In non-UNIX environments, you can use the npm-run-all command or the concurrently npm package.

Using npm-run-all:

```bash
npm-run-all --parallel server client
```

Using concurrently:

```json
"scripts": {
    "dev": "concurrently \\"npm run server\\" \\"npm run client\\"",
}
```

## Using Environment Variables in npm Scripts

Environment variables allow you to pass information without hard coding it. To use environment variables in an npm script, you can use the cross-env npm package. This tool helps you set an environmental variable in any environment.

Begin by running this command on the terminal to install it as a dev dependency:

```bash
npm i save -D cross-env
```

Then use it in your script like this:

```json
{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack"
  }
}
```

## Notes

- NPM makes all your dependencies' binaries available in the scripts. So you can access them directly as if they were referenced in your PATH. Let's see it in an example:

Instead of doing this:

```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint ."
  }
}
```

You can do this:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

- You can also run `npm run`, without specifying a script, to get a list of all available scripts

  - `npm run` prints both the name and the actual script for each script added to the package.json

- Run scripts silently or loudly

  - Use npm run `<script> --silent` to reduce logs and to prevent the script from throwing an error.
    - The `--silent` flag (short for `--loglevel silent`) can be helpful when you want to run a script that you know may fail, but you don't want it to throw an error. Maybe in a CI pipeline, you want your whole pipeline to keep running even when the test command fails

- Referencing scripts from files
  - You can execute scripts from files. This can be useful for especially complex scripts that would be hard to read in the package.json file. However, it doesn't add much value if your script is short and straightforward.

Consider this example:

```json
{
  "scripts": {
    "hello:js": "node scripts/helloworld.js",
    "hello:bash": "bash scripts/helloworld.sh",
    "hello:cmd": "cd scripts && helloworld.cmd"
  }
}
```

- use `node <script-path.js>` to execute JS files and bash `<script-path.sh> `to execute bash files.

  - NOTE: you can't just call scripts/helloworld.cmd for CMD and BAT files - you'll need to navigate to the folder using cd first. Otherwise, you'll get an error from NPM.
  - Another advantage of executing scripts from files is that, if the script is complex, it'll be easier to maintain in a separate file than in a single line inside the package.json file.

- Configuration parameters are put in the environment using the npm*config* prefix. Here are a few examples:

```json
{
  "scripts": {
    "config:loglevel": "echo \"Loglevel: $npm_config_loglevel\"",
    "config:editor": "echo \"Editor: $npm_config_editor\"",
    "config:useragent": "echo \"User Agent: $npm_config_user_agent\""
  }
}
```

Example:

```bash
npm run config:loglevel
# Output: "Loglevel: notice"

npm run config:editor
# Output: "Editor: notepad.exe"

npm run config:useragent
# Output: "User Agent: npm/6.13.4 node/v12.14.1 win32 x64"
```

ℹ️ You can also run `npm config ls -l` to get a list of all the configuration parameters available.

- package.json fields, such as version and main, are included with the npm*package* prefix. Let's see a few examples:

```json
{
  "scripts": {
    "package:main": "echo \"Main: $npm_package_main\"",
    "package:name": "echo \"Name: $npm_package_name\"",
    "package:version": "echo \"Version: $npm_package_version\""
  }
}
```

The results from these commands will be something like this:

```bash
npm run package:main
# Output: "Main: app.js"

npm run package:name
# Output: "Name: npm-scripts-demo"

npm run package:version
# Output: "Version: 1.0.0"
```

Finally, you can add your own environment variables using the config field in your package.json file. The values setup there will be added as environment variables using the npm_package_config prefix.

```json
{
  "config": {
    "my-var": "Some value",
    "port": 1234
  },
  "script": {
    "packageconfig:port": "echo \"Port: $npm_package_config_port\"",
    "packageconfig:myvar": "echo \"My var: $npm_package_config_my_var\""
  }
}
```

- Passing arguments
  - In some cases, you may want to pass some arguments to your script. You can achieve that using -- that the end of the command, like so: npm run <script> -- --argument="value".

```json
{
  "scripts": {
    "lint": "eslint .",
    "test": "jest ./test"
  }
}
```

```bash
npm run test -- --onlyChanged
npm run lint -- --output-file lint-result.txt
```

- Arguments as environment variables
  - Another way of passing arguments is through environment variables. Any key-value pairs we add to our script will be translated into an environment variable with the npm_config prefix.

```json
{
  "scripts": {
    "hello": "echo \"Hello $npm_config_firstname!\""
  }
}
```

```bash
npm run hello --firstname=Paula
# Output: "Hello Paula"
```

## Naming conventions

There are no specific guidelines about how to name your scripts, but there are a few things we can keep in mind to make our scripts easier to pick up by other developers.

Here's my take on the subject, based on my research:

- Keep it short: If you take a look at Svelte's NPM Scripts, you'll notice that most script names are one word only. If we can manage to keep our script names short, it'll be easier to remember them when we need them.
- Be consistent: You may need to use more than one word to name your script. In that case, choose a naming style and stick to it. It can be camelCase, kebab-case, or anything you prefer. But avoid mixing them.
- Prefixes - One convention that you may have seen is using a prefix and a colon to group scripts, for example, `build:prod`. This is simply a naming convention. It doesn't affect your scripts' behavior but can be helpful to create groups of scripts that are easier to identify by their prefixes.

```json
{
  "scripts": {
    "lint:check": "eslint .",
    "lint:fix": "eslint . --fix",
    "build:dev": "...",
    "build:prod": "..."
  }
}
```

## Documentation

Consider adding documentation for your scripts so other people can easily understand how and when to use them. I like to add a few lines explaining each script on my Readme file.

The documentation for each available script should include:

- Script name
- Description
- Accepted arguments (optional)
- Links to other documentation (optional): For example, if your script runs `tsc --build`, you may want to include a link to Typescript docs.

## Conclussion

- npm scripts are a powerful way of automating tasks in JavaScript projects. They can improve your workflow and save you time by providing you with consistent commands to run multiple tasks.

## Resources

- https://css-tricks.com/why-npm-scripts/
- https://www.makeuseof.com/npm-scripts-javascript-how-run/
- https://dev.to/paulasantamaria/mastering-npm-scripts-2chd
- https://deliciousbrains.com/npm-build-script/
