# TS-Merge-Supported-Component-Syntax

UXPin Merge is a revolutionary technology that lets users import (and keep in sync) coded React.js components from GIT repositories to UXPin editor (https://uxpin.com).

To make the first steps in the world of Merge easy, we've prepared this TypeScript boilerplate repository with examples of supported component syntax. This is still in the process of being updated with many more examples to be added and has several work in progress components.

## Installation

This boilerplate needs node and npm installed to run. Once you're ready clone the repository and install all the dependencies (`yarn install`).

## What is Merge Experimental Mode

![alt text](https://preview.ibb.co/fsq20L/merge-exp.png)

Merge Experimental Mode let's you render your React.js components in a dev version of UXPin Design Editor directly from your local environment. You can test your components and see how they're going to behave in UXPin Design Editor!

## Useful Commands:

### Expeimental Mode 
Among the dependencies of this boilerplate you'll find `uxpin-merge` this tool prepares components for integration with UXPin. It has a built in development server that you can use to see the rendered components in the browser. To start the dev server we call experimental mode use the following command:

```bash
npx uxpin-merge --disable-tunneling
```

### Merge Project Meta Data Terminal Dump
To dump the meta data of the components that is sent to UXPin Merge to the terminal you can use the following commamnd

```bash
npx uxpin-merge dump
```