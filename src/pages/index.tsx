import * as React from "react";

function Index() {
  // Redirect to /docs/sdk

  React.useEffect(() => {
    window.location.href = "/intro";
  }, []);
  return null;
}

export default Index;
