import { RouteProps } from "react-router-dom"

import ListTask from "./page/ListTask"
import NewTask from "./page/NewTask"
import Statistic from "./page/Statistic"
import MyTask from "./page/MyTask"
import MyDay from "./page/MyDay"

export const routes: RouteProps[] = [
  {
    path: "/task",
    element: <MyTask />,
    index: true,
  },
  {
    path: "/list-task",
    element: <ListTask />,
    index: true,
  },
  {
    path: '/statistic',
    element: <Statistic />,
    index: true,
  },
  {
    path: "/new-task",
    element: <NewTask />,
    index: true,
  },
  {
    path: "/",
    element: <MyDay />,
    index: true,
  }
]
