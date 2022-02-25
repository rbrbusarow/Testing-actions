# Gradle Project Template

This is still a work-in-progress

### Features

- Automatic [Dependabot] updates
- Automatic merging via [Kodiak](https://kodiakhq.com)
- Docusaurus website
- Automatic website deployment after updates to `main`
- CI invokes Detekt, KTLint with automatic formatting, and `testJvm` (all JVM unit tests)
- If KTLint generates changes, those changes are automatically pushed into the PR and CI is restarted
- CI automatically cancels stale jobs
- Automatic release draft updates using [Release Drafter](https://github.com/release-drafter/release-drafter)

### Setup

1. set up docusaurus

  ```shell
cd website
npm install
cd ..
  ```

2. search and replace **all files** (not just `*.kt*`):

- `TEMPLATE_PROJECT_NAME` -> project's GitHub name
- `TEMPLATE_DOMAIN` -> project's domain
- `TEMPLATE_GITHUB_USER` -> GitHub username
- `TEMPLATE_AUTHOR_NAME` -> author name, like "John Smith"

3. create a GitHub secret for GH Actions named `PERSONAL_ACCESS_TOKEN`
4. install Kodiak
5. create labels for `automerge` and `dependencies`
6. set a branch protection

### TODO

- [ ] handle search and replace with a shell script







[Dependabot]: https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates
