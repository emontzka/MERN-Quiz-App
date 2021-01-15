import React from "react";
import { Button } from "semantic-ui-react";
import { vPad } from "../utilities/style";

function QuizFilters() {
  return (
    <div style={vPad(2)}>
      <Button>Filter Questions</Button>
      <div className='filter-section'>{/* category buttons */}</div>
    </div>
  );
}

export default QuizFilters;
