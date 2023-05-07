import axiosClient from "./axiosClient";

export const getDataTicket = async () => {
  const { data } = await axiosClient.get(
    "/api/QuanLyDatVe/LayDanhSachPhongVe?",
    {
      params: {
        maNhom: "GP04 ",
      },
    }
  );
  return data;
};
