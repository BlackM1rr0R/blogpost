import About from "./pages/about";
import Home from "./pages/home";
import NewWindow from "./pages/newWindow";
import NotFound from "./pages/notFound";
const routeItem = (id, title, path, component) => {
  return {
    id,
    title,
    path,
    component,
  };
};

const routes = {
  home: routeItem(1, 'home', "/", Home),
  about: routeItem(2, 'about', "/about", About),
  notFound: routeItem(3, 'notFound', "*", NotFound),
  newWindow: routeItem(4, 'newWindow', "/about/post/:id", NewWindow),

};

const routeArr = Object.values(routes);

export { routes, routeArr };
