import 'styled-components';
import primary from './primary';

type Primary = typeof primary

declare module 'styled-components' {
  export interface DefaultTheme extends Primary { }
}

export { primary };
