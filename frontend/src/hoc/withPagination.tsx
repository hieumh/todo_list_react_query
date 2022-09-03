import { useState } from "react";

function withPagination(Component) {
  const [page, setPage] = useState(1);

  return function (props) {
    return (
      <div>
        <Component page={page} {...props} />
      </div>
    )
  }
}

export default withPagination;