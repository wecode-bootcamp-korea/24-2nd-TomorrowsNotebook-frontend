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
};

export const iconBoxDefault = css`
  cursor: pointer;
  margin: 5px;
`;
