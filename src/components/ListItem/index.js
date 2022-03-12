import PropTypes from 'prop-types';

import * as S from './styles';

export default function ListItem({ list, ...rest }) {
  return (
    <S.Container {...rest}>
      The steps are:
      {list.map((item, index) => (
        <li key={index}>
          <span>{index + 1} - </span>
          {item}
        </li>
      ))}
    </S.Container>
  );
}

ListItem.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};
