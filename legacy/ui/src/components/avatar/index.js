import styled from 'styled-components';
import { remcalc } from '../../shared/functions';
import React from 'react';

import {
  verticallyAlignCenter,
  Baseline,
  typography
} from '../../shared/composers';

const Picture = styled.img`
  ${verticallyAlignCenter};

  max-width: 100%;
`;

const Letter = styled.p`
  ${verticallyAlignCenter};

  max-width: 100%;
  margin: 0 0 0 0 !important;
  color: #FFFFFF;

  font-size: ${remcalc(13)};
  ${typography.semibold};
`;

const Container = styled.div`
  border-radius: 100%;
  display: inline-block;
  overflow: hidden;
  position: relative;
  text-align: center;
`;

const Avatar = ({
  alt,
  className,
  color = '#ACC014',
  crossorigin,
  height = remcalc(42),
  longdesc,
  name = '',
  sizes,
  src,
  srcset,
  style,
  width = remcalc(42)
}) => {
  const _style = {
    ...style,
    background: color,
    width,
    height
  };

  const letter = name[0];
  const av = src ? (
    <Picture
      alt={alt || name}
      crossOrigin={crossorigin}
      longdesc={longdesc}
      sizes={sizes}
      src={src}
      srcSet={srcset}
    />
  ) : (
    <Letter>
      {letter}
    </Letter>
  );

  return (
    <Container className={className} style={_style}>
      {av}
    </Container>
  );
};

Avatar.propTypes = {
  alt: React.PropTypes.string,
  className: React.PropTypes.string,
  color: React.PropTypes.string,
  crossorigin: React.PropTypes.string,
  height: React.PropTypes.string,
  longdesc: React.PropTypes.string,
  name: React.PropTypes.string,
  sizes: React.PropTypes.string,
  src: React.PropTypes.string,
  srcset: React.PropTypes.string,
  style: React.PropTypes.object,
  width: React.PropTypes.string
};

export default Baseline(
  Avatar
);