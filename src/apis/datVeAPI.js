import axiosClient from "./axiosClient";

export const getDataTicket = async () => {
  const { data } = await axiosClient.get(
    "/api/QuanLyDatVe/LayDanhSachPhongVe",
    {
      params: {
        maNhom: "GP01",
      },
    }
  );
  return data;
};
