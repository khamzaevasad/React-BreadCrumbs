import { NavLink } from 'react-router-dom';

function PagesNotFound() {
  return (
    <div className="pageNotFound-container">
      <h1>Page Not Found</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
        ducimus quasi illum quos distinctio est sapiente illo. Voluptatem
        ratione ad, ipsam doloribus autem aut. Nesciunt quasi voluptatibus at
        deleniti tempore nobis id temporibus delectus quae maiores ratione ex,
        ipsum nihil adipisci dicta? Minima tempora, maiores et alias officia
        ipsam maxime?
      </p>
      <NavLink to="/">Home Page</NavLink>
    </div>
  );
}

export default PagesNotFound;
