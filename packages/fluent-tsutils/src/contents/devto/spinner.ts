import Debug, {Debugger} from 'debug';
import ora from 'ora';

const debug = Debug('spinner');

export function createSpinner(debugFunc: Debugger) {
  if (debug.enabled) {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const noop = () => {};
    return {
      get text(): string {
        return '';
      },
      set text(string: string) {
        debugFunc(string);
      },
      start: noop,
      stop: noop
    };
  }

  return ora({color: 'green', spinner: 'point'});
}
