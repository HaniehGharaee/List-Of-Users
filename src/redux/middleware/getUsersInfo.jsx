import { setUsersList } from "../reducers/userListReducer";
//import apiServices from "../../services/apiServices";
//import endpoints from "../../services/endpoints";

export const getUsersInfo = () => async (dispatch) => {
  //dispatch(setUsersLoading(true));
  //const result = await apiServices.get(endpoints.usersInfo);
  //dispatch(setUsersLoading(false));

  //if (result.isSuccess) {
    dispatch(setUsersList( 
      [{
      id : '1', 
      firstName: "حانیه",
      insurance: 'تامین',
      lastName: "قرایی",
      nationalCode: "0020000000",
      phoneNumber: "09360000000",
    },
    {
      id : '2', 
      firstName: "سارا",
      insurance: 'ساخد',
      lastName: "کمال پور",
      nationalCode: "0030000000",
      phoneNumber: "09120000000",
    },
    {
      id : '3', 
      firstName: "حنانه",
      insurance: 'سلامت',
      lastName: "قرایی",
      nationalCode: "0040000000",
      phoneNumber: "09190000000",
    },]
    ));
  //}
};
