import React, { useState } from "react"
import { HeartFilled, HeartOutlined } from "@ant-design/icons"

const HeartColorChange = ({ user }) => {
  const [select, setSelect] = useState(false)

  const handleHeartColorChange = () => {
    user.clicked = true
    setSelect(true)
  }
  const handleHeartColorUnChange = () => {
    user.clicked = false
    setSelect(false)
  }
  return user && user.clicked === false && select === false ? (
    <HeartOutlined
      style={{ color: "red" }}
      onClick={() => handleHeartColorChange()}
    />
  ) : (
    <HeartFilled
      style={{ color: "red" }}
      onClick={() => handleHeartColorUnChange()}
    />
  )
}
export default HeartColorChange
