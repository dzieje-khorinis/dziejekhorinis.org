import React, { useEffect } from "react"

const NotFoundPage = () => {
  useEffect(() => {
    window.location.href= '/recruitment';
  }, []);

  return (
    <div />
  );
}

export default NotFoundPage
