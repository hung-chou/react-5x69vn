import * as React from 'react';
    
    export class SampleBase extends React.PureComponent {
        rendereComplete() {
            /**custom render complete function */
        }
        componentDidMount() {
            console.log("componentDidMount")
            setTimeout(() => {
                this.rendereComplete();
            });
          }
        }
    