import * as React from 'react';
import Input from '../input';
import Button from '../button';

interface CounterProps {}
interface CounterState {
  count: number | undefined;
}

class Counter extends React.Component<CounterProps, CounterState> {
  state = {
    count: 0,
  }
  increment = () => {
    this.setState({ count: (this.state.count || 0)+1 });
  }
  handleInputChange = (value: string) => {
    if (!isNaN(Number(value))) {
      this.setState({ count: value === '' ? undefined : Number(value) });
    }
  }
  componentDidMount() {}

  render() {
    return (
      <div className="counter">
        <Input value={String(this.state.count || '')} onChange={this.handleInputChange} />
        <Button text="Increment" type="success" onClick={this.increment} />
      </div>
    );
  }
}

export default Counter;
export type { CounterProps };
