import React from "react";

const Error404 = () => {
  console.log("Error 404, Page not found");
  return (
    <main className="error_404">
      <div className="card">
        <h1>404</h1>
        <h3>~ Page not found ~</h3>
        <h4>Sorry, the page you are looking for does not exist :(</h4>
      </div>
    </main>
  );
};

export default Error404;
