import Icon from '../../Icons';

import style from './customDropIndicator.module.css';

function CustomDropIndicator({ up }) {
  return (
    <div>
      <Icon
        id={up ? 'vector-up-icon' : 'vector-down-icon'}
        className={style.icon}
      />
    </div>
  );
}

export default CustomDropIndicator;
