import { RouteProps } from "react-router-dom"

import ListTask from "./page/ListTask"
import Statistic from "./page/Statistic"
import MyDay from "./page/MyDay"

export const routes: RouteProps[] = [
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
    path: "/",
    element: <MyDay />,
    index: true,
  }
]
