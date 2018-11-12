import * as React from 'react';

const ExamplePresentation = (props) => {
  if (props.toggler) {
    return (
            <>
              <h1>{props.text}</h1>
            </>
    );
  }
  return false;
};

export default ExamplePresentation;
