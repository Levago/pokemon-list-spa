import { Link, Outlet } from "react-router-dom";

export function Layout(){
    return(
     <main>
        <nav>
          <Link to='/pokemons'>Home</Link> | {""}
          <Link to='/Matricula'>Matricula</Link> | {""}
        </nav> 
        <section>
            <Outlet />
        </section>
      </main>
    );
    
}