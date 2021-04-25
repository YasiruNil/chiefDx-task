import "./userList.css"
import { Card } from "antd"
import { connect } from "react-redux"
import EditUserData from "./editUserData"
import { fetchUsers } from "../../actions/index"
import { photoBaseUrl } from "../../util/config"
import HeartColorChange from "./heartColorChange"
import React, { useState, useEffect } from "react"
import {
  MailOutlined,
  EditOutlined,
  PhoneOutlined,
  GlobalOutlined,
  DeleteOutlined,
} from "@ant-design/icons"

const UserList = (props) => {
  const { Meta } = Card
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false)
  const [selectedUser, setSelectedUser] = useState({})
 
  useEffect(() => {
    props.fetchUsers()
    setLoading(true)
  }, [])
  useEffect(() => {
    var newValue = [...props.usersList]
    for (let key in newValue) {
      newValue[key].clicked = false
    }
    setUsers(newValue)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [props.usersList])

  const onCreate = (values) => {
    var index = users.findIndex((el) => el.id === values.id)
    var newValue = [...users]
    const { name, email, phone, website } = values
    newValue[index].name = name
    newValue[index].email = email
    newValue[index].phone = phone
    newValue[index].website = website
    setUsers(newValue)
    setVisible(false)
  }

  const handleDelete = async (selectedUserName) => {
    var index = users.findIndex((el) => el.name === selectedUserName)
    const value = [...users]
    await value.splice(index, 1)
    await setUsers(value)
  }

  const userData = () => {
    return (
      <>
        <div className='row'>
          {users &&
            users.map((user, i) => (
              <div
                key={i}
                className='col-md-4 mt-3 d-flex justify-content-center'>
                <Card
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt='example'
                      src={`${photoBaseUrl}v2/avataaars/${user.name}.svg?options[mood][]=happy`}
                    />
                  }
                  actions={[
                    <HeartColorChange
                      key={i}
                      user={user}
                    />,
                    <EditOutlined
                      key={i}
                      onClick={() => {
                        setVisible(true)
                        setSelectedUser(user)
                      }}
                    />,
                    <DeleteOutlined
                      key={i}
                      onClick={() => handleDelete(user.name)}
                    />,
                  ]}>
                  <Meta title={user.name} style={{ marginBottom: "8px" }} />
                  <div className='d-flex align-items-center'>
                    <MailOutlined />
                    <span style={{ marginLeft: "8px" }}>{user.email}</span>
                  </div>
                  <div className='d-flex align-items-center'>
                    <PhoneOutlined />
                    <span style={{ marginLeft: "8px" }}>{user.phone}</span>
                  </div>
                  <div className='d-flex align-items-center'>
                    <GlobalOutlined />
                    <span style={{ marginLeft: "8px" }}>{user.website}</span>
                  </div>
                </Card>
              </div>
            ))}
          <EditUserData
            visible={visible}
            onCreate={onCreate}
            onCancel={() => {
              setVisible(false)
            }}
            selectedUser={selectedUser}
          />
        </div>
      </>
    )
  }

  return (
    <>
      <div className='container mt-5'>
        {loading === true ? (
          <div className=' spinner__position'>
            <div className='spinner'>
              <div className='rect1'></div>
              <div className='rect2'></div>
              <div className='rect3'></div>
              <div className='rect4'></div>
              <div className='rect5'></div>
            </div>
          </div>
        ) : (
          userData()
        )}
      </div>
    </>
  )
}

const mapStateToProps = ({ userList }) => ({
  usersList: userList.users,
})
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList)
