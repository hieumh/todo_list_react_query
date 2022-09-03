import {
  CheckSquareOutlined,
  HighlightOutlined,
  OrderedListOutlined,
  PlusOutlined,
  UserOutlined
} from "@ant-design/icons"
import { Layout, Menu } from "antd"
import { Content } from "antd/lib/layout/layout"
import Sider from "antd/lib/layout/Sider"
import { ItemType } from "antd/lib/menu/hooks/useItems"
import { ReactNode, useMemo } from "react"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"

import Header from "./component/Layout/Header"

const MenuStyle = styled.div`
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: white;
  }
`

type LayoutAppProps = {
  children: ReactNode
}

const items = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: <Link to="/">My day</Link>
  },
  {
    key: "2",
    icon: <OrderedListOutlined />,
    label: <Link to="/list-task">Tasks management</Link>
  }
]

export default function LayoutApp({ children }: LayoutAppProps) {
  return (
    <Layout className="flex flex-row">
      <Sider className="pl-6 h-screen" theme="light" width={"20%"}>
        <Header title=".todoApp" />
        <MenuStyle>
          <Menu
            className=""
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </MenuStyle>
      </Sider>

      <Layout className="inline-block p-4 bg-white w-[80%] h-screen overflow-auto">
        <Content className="site-layout-background relative">
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
