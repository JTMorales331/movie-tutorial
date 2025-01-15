import { Menu } from "@headlessui/react"
import React from "react"

export default function MyDropDown() {
  return (
    <Menu>
      <Menu.Button className="btn">Button</Menu.Button>
      <Menu.Items className="menu rounded-box bg-base-200 w-52">
        <Menu.Item>
          <li>
            <a href="/link">Item 1</a>
          </li>
        </Menu.Item>
        <Menu.Item>
          <li>
            <a href="/link">Item 2</a>
          </li>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}