#!/usr/bin/env node

/**
 *
 */
import createCli from 'meow'
import readPkgUp from 'read-pkg-up'
import getReleaseTaskRunner from './release'

/**
 *
 */
const cli = createCli(
  `
  Usage
    $ cwtools <command> <options>

  Commands
    release <version>

      Version can be:
        patch | minor | major | prepatch | preminor | premajor | prerelease | 1.2.3

      Options
        --any-branch       Allow publishing from any branch
        --skip-test        Skip cleanup and testing
        --changelog-preset Use \`conventional-changelog\`
        --tag              Publish under a given dist-tag

  Examples
    $ cwtools release patch
    $ cwtools release 1.0.2
    $ cwtools release 1.0.2-beta.3 --tag=beta
`,
  {
    boolean: ['any-branch', 'skip-cleanup', 'skip-test']
  }
)

/**
 *
 */
async function runProgram() {
  try {
    const command = cli.input[0]
    if (command === 'release') {
      const version = cli.input[1]
      const taskRunner = await getReleaseTaskRunner(cli.input[1], cli.flags)
      await taskRunner.run()
      const { pkg } = await readPkgUp()
      console.log(`\n ${pkg.name} ${pkg.version} published`)
    } else {
      cli.showHelp()
    }
  } catch (error) {
    console.log(`\n${error.message}`)
    process.exit(1)
  }
}

/**
 *
 */
if (!module.parent) {
  runProgram()
}
