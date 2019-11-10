import React, { FunctionComponent } from 'react';

export type Props = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
};

export type StateProps = {
  defaultSrc: string;
};

class Img extends React.Component<Props, StateProps> {
  state = {
    defaultSrc: ''
  };

  handleError() {
    this.setState({
      defaultSrc: '/images/no-image.png'
    });
  }

  render() {
    const { src, ...others } = this.props;
    const { defaultSrc } = this.state;

    return (
      <img
        src={defaultSrc || src}
        onError={this.handleError.bind(this)}
        {...others}
      />
    );
  }
}

export default Img;
