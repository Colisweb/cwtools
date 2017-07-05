/**
 *
 */
import TaskList from 'listr'
import exec from 'execa'
import getTasks from '../code-tasks'

/**
 *
 */
const runTasks = options => new TaskList(getTasks(options), { renderer: 'silent' }).run()

/**
 *
 */
describe('TaskRunner', () => {
  afterEach(() => jest.clearAllMocks())

  it('skips linting', async () => {
    await runTasks()
    expect(exec).toHaveBeenCalledTimes(1)
  })

  it('skips testing', async () => {
    await runTasks({ options: { skipTest: true } })
    expect(exec).toHaveBeenCalledTimes(0)
  })

  it('runs linting', async () => {
    await runTasks({ pkg: { scripts: { lint: 'echo "linting"' } } })
    expect(exec).toHaveBeenCalledTimes(2)
  })
})
