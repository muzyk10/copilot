// TODO: use a checkbox

const classNames = require('classnames');
const React = require('react');
const styles = require('./style.css');

const Avatar = ({
  color,
  image,
  name,
  className,
  style
}) => {

  const cn = classNames(
    className,
    styles.avatar
  );

  style = {
    ...style,
    background: color
  }

  const fill = () => {
    if ( image ) {
      return (
        <img
          alt={name}
          className={styles.picture}
          src={image}
          style={style}
        />
      );
    } else {
      const letter = name.split('')[0];
      return (
        <p
          className={styles.letter}
          style={style}
        >
        {letter}
      </p>
      );
    }
  }

  return (
    <div className={cn} style={style}>
      {fill()}
    </div>
  );
};

Avatar.propTypes = {
  className: React.PropTypes.string,
  color: React.PropTypes.string,
  image: React.PropTypes.string,
  name: React.PropTypes.string,
  style: React.PropTypes.object
};

module.exports = Avatar;