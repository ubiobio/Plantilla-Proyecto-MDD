
const Error404 = () => {
  console.log("Error 404, Page not found");
  return (
    <main className="error_404">
      <div className="card">
        <h1>404</h1>
        <h3>~ Página no encontrada ~</h3>
        <h4>Lo sentimos, la página que estás buscando no existe :(</h4>
      </div>
    </main>
  );
};

export default Error404;
