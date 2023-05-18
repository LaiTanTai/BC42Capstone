import axiosClient from "./axiosClient";

export const apiSignin = async (values) => {
  const { data } = await axiosClient.post("/QuanLyNguoiDung/DangNhap", values);
  return data;
};

export const apiSignup = async (values) => {
  const payload = { ...values, maNhom: "GP01" };

  const { data } = await axiosClient.post("/QuanLyNguoiDung/DangKy", payload);
  return data;
};

export const apiListUser = async () => {
  const payload = { MaNhom: "GP04" };

  const { data } = await axiosClient.get(
    "/QuanLyNguoiDung/LayDanhSachNguoiDung",
    payload
  );
  return data;
};