import React from 'react';
import { Button } from "@myob/myob-widgets";

class SelectButtons extends React.Component {

  render() {

    return (
      <div>
        <Button className="margin-right-20" type="secondary">Cancel</Button>
        <Button type="primary">Copy timeslots</Button>
      </div>
    );
  }

}

export default SelectButtons;