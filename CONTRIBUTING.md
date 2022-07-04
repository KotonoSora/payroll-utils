# Contributing

## Welcome

Welcome to CONTRIBUTING zone. If you are reading this, you probably want to contribute to Open Source projects. That's great! Contributing to an open source project is a great opportunity to learn, sharpen your skills and help others. Luckily, payroll-utils is a free and open source project and we always welcome new contributors. Its mission is to help people deal salary when apply new job.

payroll-utils aims to be a community-driven project. So we hope to see your contributions to make payroll-utils a favorite library for developers when it comes to testing.

## What can I contribute?

We appreciated any help. There is not a thing as a small contribution. If you see a typo, send us a PR. If you experience a bug, please open an issue. If you have a suggestion, let us know. Below are some ways you can contribute to payroll-utils:

- **Submit bugs or issues**: Software is full of bugs. payroll-utils is no exception. If you use payroll-utils and find a bug, please open an issue at [payroll-utils's issues](https://github.com/KotonoSora/payroll-utils/issues)
- **Docs**: We have a documentation site at [here](https://github.com/KotonoSora/payroll-utils/wiki), it's very easier to contribute to the documentation by using `Edit this page` button at the bottom of each page. If you see a typo, an unclear page or incorrect grammar, please send us a PR.
- **Fix bugs**: We are tracking bugs at [Issues](https://github.com/KotonoSora/payroll-utils/issues). Please [claim an issue](#claim-issues) then open a PR to fix a bug.
- **Add new features**: Do you use payroll-utils for your projects and find out payroll-utils is missing a feature? Please open an issue to discuss it. And it's great if you can help to implement that feature.
- **Answer questions and discussions on GitHub and Discord**: [GitHub discussions](https://github.com/KotonoSora/payroll-utils/discussions) and [Discord](https://discord.gg/fsdVgKYG5j)

If not sure what to contribute, but you still want to contribute something, let us know in [Discord](https://discord.gg/fsdVgKYG5j) (channel #contributors)

## Claim issues

There are some labels worth looking at for a new contributor:

- [good first issue](https://github.com/KotonoSora/payroll-utils/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22): Some issues to help you get your feet wet with payroll-utils
- [help wanted](https://github.com/KotonoSora/payroll-utils/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22): If you have specific knowledge in one domain, working on these issues can make your expertise shine.

If you want to work on any of these issues, just drop a message such as "I'd like to work on this". Depending on the difficulty of the issue, it can take a few days or a week to implement the feature/ bug fix. It's great if you can send a PR within seven days. If you need more time on a specific issue, please let us know. After that, we can delegate the issue to someone else if you are not available.

## npm scripts

payroll-utils repository has some npm scripts to help you develop efficiently.

- `npm install`: install all dependencies
- `npm run build.watch`: build `payroll-utils` and rebuild it when changes are made
- `npm run types`: emit types, usually only need to run only once
- `npm run test`: run Jest at `__tests__/index.test.ts` (you will work with this file most of the time)

## Run locally

Install dependencies:

```bash
npm install
```

Run the real demo app:

```bash
npm run dev
```

Run jest tests and payroll-utils server simultaneously:

```bash
npm run test
```

However, it's recommended to run jest tests and payroll-utils server separately:

```bash
npm run test # Run jest
```

## Repository architecture

Following are brief descriptions of the repository architecture:

- [src](https://github.com/KotonoSora/payroll-utils/tree/main/src/): contains most of the code of payroll-utils such as `getKeyMonthFromToDate` function, `getPageMonth` function, all types, etc.S
- [dist](https://github.com/KotonoSora/payroll-utils/tree/main/dist/): Distribution code, which is bundled and processed by Rollup (previously: Vite Library Mode).

## Submit a PR

So you have decided to contribute code back to upstream by opening a pull request. You've invested a good chunk of time, and we appreciate it. We will do our best to work with you and get the PR looked at.

There are a few things when you open a PR:

1. Make sure CI passes
2. Prefer atomic commits
3. Prefer rebase over merge: If you create a new branch from `master` and work on it for a while. There is a chance that `master` will be updated and there will be a conflict between `master` and your branch. We would love to have you rebase your branch on top of `master` instead of merging it when your PR is ready.

## Closing

We would love to have you on the list of contributors and thank you for your contribution. Happy coding!
