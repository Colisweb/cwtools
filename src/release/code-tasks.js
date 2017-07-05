/**
 *
 */
import remove from 'del'
import { execObservable } from './utils'

/**
 *
 */
export default function getCodeTasks(props = {}) {
  const { pkg = {}, options = {} } = props
  const skipTest = options.skipTest
  const skipCleanup = skipTest || options.skipCleanup
  const skipLint = skipTest || !pkg.scripts || !pkg.scripts.lint

  return [
    {
      title: 'Linting code',
      skip: () => skipLint,
      task: () => execObservable('npm', ['run', 'lint'])
    },
    {
      title: 'Running tests',
      skip: () => skipTest,
      task: () => execObservable('npm', ['test'])
    }
  ]
}
