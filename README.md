![build status](https://img.shields.io/github/actions/workflow/status/benwainwright/post-turtle/main.yaml)
![License](https://img.shields.io/npm/l/post-turtle)

# post-turtle 🐢

`post-turtle` is a simple shell based [Postman](https://www.postman.com/) alternative written in TypeScript. It is designed to help developers make quick API requests on the fly without having to use something as heavy as Postman

## Install

`npm install -g post-turtle`

## Features

### Interactive Mode

`pt` called without any arguments will trigger an interactive command line
interface. You can use this interface to create, update or delete existing
requests, as well as triggering ones that have been created.

![Screen recording of a request being created and triggered
interactively](./images/pt-interactive-create.gif)

### Non-interactive Mode

Requests that have been created using interactive mode are stored in your home
directory in a file called `.post-turtle-request`. Once you have created some
requests, these requests will be available to call
non-interactively using `pt call <slug>`

### Parameters

All request fields can contain 'parameters' by using a simplified handlebars syntax. If a
request contains parameters in the form `{{ name : description }}`, it will have the following effect

- Triggering the request via interactive mode will produce an input field for
  each parameter
- The command generated by `pt call` will also include a required `--option` for
  that parameter

![Screen recording of a request with params being created and triggered in
interactive mode](./images/params-interactive.gif)

## About This Package

This package is written in TypeScript using a combination of [ink](https://github.com/vadimdemedes/ink) to allow me to write a great responsive CLI experience using my React skills and [commander.js](https://www.npmjs.com/package/commander) to provide a nice non-interactive CLI setup
