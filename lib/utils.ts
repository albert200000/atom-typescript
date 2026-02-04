export function handlePromise(promise: Promise<any> | undefined): void {
  if (promise === undefined) return
  if (typeof promise.catch !== "function") {
    atom.notifications.addFatalError(
      "pulsar-typescript: non-promise passed to handlePromise. Please report this.",
      {
        stack: new Error().stack,
        dismissable: true,
      },
    )
    return
  }
  promise.catch((err: Error) => {
    atom.notifications.addFatalError(`pulsar-typescript error: ${err.message}`, {
      detail: err.toString(),
      stack: err.stack,
      dismissable: true,
    })
  })
}
