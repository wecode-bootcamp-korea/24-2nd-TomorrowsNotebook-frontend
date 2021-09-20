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
  AngleL: props => (
    <i {...props} className={'fas fa-angle-left ' + props.className} />
  ),
  AngleR: props => (
    <i {...props} className={'fas fa-angle-right ' + props.className} />
  ),
  UserProfile: props => (
    <i {...props} className={'fas fa-user-circle ' + props.className} />
  ),
  CommentIcon: props => (
    <i {...props} className={'far fa-comment-alt ' + props.className} />
  ),
  Post: props => <i {...props} className={'far fa-edit ' + props.className} />,

  Archive: props => (
    <i {...props} className={'fas fa-archive ' + props.className} />
  ),

  Star: props => <i {...props} className={'far fa-star ' + props.className} />,

  ArrowDown: props => (
    <i {...props} className={'fas fa-chevron-down ' + props.className} />
  ),

  ArrowUp: props => (
    <i {...props} className={'fas fa-chevron-up ' + props.className} />
  ),

  Heart: props => (
    <i {...props} className={'far fa-heart ' + props.className} />
  ),

  FilledHeart: props => (
    <i {...props} className={'fas fa-heart ' + props.className} />
  ),

  Ellipsis: props => (
    <i {...props} className={'fas fa-ellipsis-v ' + props.className} />
  ),
};

export const iconBoxDefault = css`
  cursor: pointer;
  margin: 5px;
`;
