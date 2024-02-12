import React, { useState, useEffect } from "react";
import { Table, Button, Modal } from "antd";
import FormData from "./form";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  setUsersList
} from "../redux/reducers/userListReducer";
import { useDispatch, useSelector } from "react-redux";
import { getUsersInfo } from "../redux/middleware/getUsersInfo";

const UserList = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const { list } = useSelector((state) => state.users);
  const [selected, setSelected] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersInfo());
  }, []);

  const handleClose = () => {
    setVisibleModal(false);
    setSelected(null);
  };

  const showModal = () => {
    setVisibleModal(true);
  };
  const columns = [
    {
      title: "ردیف",
      dataIndex: "_id",
      align: "center",
      key: "_id",
      render: (_text, _record, index) => index + 1,
    },
    {
      title: "نام",
      dataIndex: "firstName",
      key: "firstName",
      align: "center",
    },
    {
      title: "نام خانوادگی",
      dataIndex: "lastName",
      key: "lastName",
      align: "center",
    },
    {
      title: "کدملی",
      dataIndex: "nationalCode",
      key: "nationalCode",
      align: "center",
    },
    {
      title: "شماره تماس",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      align: "center",
    },
    {
      title: "بیمه",
      dataIndex: "insurance",
      key: "insurance",
      align: "center",
    },
    {
      title: "عملیات",
      dataIndex: "operation",
      key: "operation",
      width: 60,
      render: (_, _record) => {
        return (
          <div className="flex w-25 gap-x-1">
            <div
              className="px-2 mx-auto bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300"
              style={{ width: "fit-content" }}
              onClick={() =>
                dispatch(setUsersList(list.filter((item) => item !== _record)))
              }
            >
              <DeleteOutlined />
            </div>
            <div
              className="px-2 mx-auto bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300"
              style={{ width: "fit-content" }}
              onClick={() => {
                setVisibleModal(true), setSelected(_record);
              }}
            >
              <EditOutlined />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="center-pagination flex flex-col ">
      <Button
        type="dash"
        className=" text-white font-bold rounded mb-5 mr-auto
                    w-fit items-end bg-gray-900"
        onClick={showModal}
      >
        افزودن اطلاعات
      </Button>
      <Modal
        title={!selected ? "افزودن کاربران" : "ویرایش"}
        open={visibleModal}
        onCancel={handleClose}
        footer={null}
        width="800px"
      >
        <FormData record={selected} closed={handleClose} />
      </Modal>
      <Table columns={columns} dataSource={list} bordered rowKey="id" />
    </div>
  );
};
export default UserList;