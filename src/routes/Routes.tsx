import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Home from 'pages/Home';
import Details from 'pages/Details';
import Favorites from 'pages/Favorites';

const Routes: RouteObject[] = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/details",
		element: <Details />,
	},
	{
		path: "/favorites",
		element: <Favorites />,
	},
];

export default createBrowserRouter(Routes);