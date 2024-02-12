import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { setUsersList, setEditUser } from "../redux/reducers/userListReducer";
import { useDispatch, useSelector } from "react-redux";

const FormData = ({ closed, record }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { list, editUser } = useSelector((state) => state.users);

  useEffect(() => {
    console.log(record)
    record !== null ? form.setFieldsValue(record) : form.resetFields();
  }, [record]);
  
  const handleAdd = (values) => {
    if (record === null) {
      dispatch(setUsersList([...list, values]));
    } else {
      dispatch(setEditUser(values));
    }
    closed();
  };

  return (
    <Form form={form} onFinish={handleAdd}>
      <Form.Item name="firstName" label="نام">
        <Input placeholder="نام" type="text" />
      </Form.Item>
      <Form.Item name="lastName" label="نام خانوادگی">
        <Input placeholder="نام خانوادگی" type="text" />
      </Form.Item>
      <Form.Item name="nationalCode" label="کد ملی ">
        <Input placeholder="کد ملی" type="text" />
      </Form.Item>
      <Form.Item name="phoneNumber" label="شماره تماس">
        <Input placeholder="شماره تماس" type="text" />
      </Form.Item>
      <Form.Item name="insurance" label="بیمه">
        <Input placeholder="بیمه" type="text" />
      </Form.Item>
      <Button type="primary" htmlType="submit" className="bg-blue-900 ml-4">
        {!record ? "افزودن به جدول" : "ویرایش"}
      </Button>
    </Form>
  );
};

export default FormData;

