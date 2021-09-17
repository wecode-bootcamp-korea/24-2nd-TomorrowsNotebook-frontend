import { css } from 'styled-components';

export const Icons = {
  AngleDown: props => (
    <i {...props} className={'fas fa-angle-down ' + props.className} />
  ),
  Search: props => (
    <i {...props} className={'fas fa-search ' + props.className} />
  ),
  TimesCircle: props => (
    <i {...props} className={'fas fa-times-circle ' + props.className} />
  ),
  Book: props => (
    <i {...props} className={'fas fa-book-open ' + props.className} />
  ),
  Settings: props => (
    <i {...props} className={'fas fa-cog ' + props.className} />
  ),
  Redo: props => <i {...props} className={'fas fa-redo ' + props.className} />,
  Alert: props => <i {...props} className={'fas fa-bell ' + props.className} />,
  AngleL: props => (
    <i {...props} className={'fas fa-angle-left ' + props.className} />
  ),
  AngleR: props => (
    <i {...props} className={'fas fa-angle-right ' + props.className} />
  ),
};

export const iconBoxDefault = css`
  cursor: pointer;
  margin: 5px;
`;
