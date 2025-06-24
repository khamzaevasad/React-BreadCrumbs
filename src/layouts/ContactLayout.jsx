import { NavLink, Outlet } from 'react-router-dom';

function ContactLayout() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        temporibus ex nobis quidem animi hic modi obcaecati illum odit,
        asperiores magnam quis aliquid, autem quibusdam non corrupti voluptas
        tempore amet deleniti sit dolor omnis ad? Dicta consequatur aperiam quis
        soluta ut ratione, dignissimos voluptates distinctio laborum voluptatem
        aspernatur quod atque.
      </p>
      <nav>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="form">Form</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default ContactLayout;
