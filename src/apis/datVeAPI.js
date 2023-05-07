import axiosClient from "./axiosClient";

export const getDataTicket = async (movieID) => {
  const { data } = await axiosClient.get(
    "/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu={movieID}",
    {
      params: {
        maNhom: "GP04 ",
      },
    }
  );
  return data;
};
