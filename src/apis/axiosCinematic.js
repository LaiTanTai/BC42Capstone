import axiosClient from "./axiosClient";
export const getCinematicdata = async()=>{
    const {data} = await axiosClient.get("/QuanLyRap/LayThongTinHeThongRap");
    return data;
}
export const getCinematicBySystem = async(cinemaID)=>{
    const {data} = await axiosClient.get("/QuanLyRap/LayThongTinCumRapTheoHeThong",{
        params:{
            maHeThongRap:cinemaID
        }
    })
    return data
}
export const getCinematicByFilm = async(cinemaID)=>{
    const {data} = await axiosClient.get("/QuanLyRap/LayThongTinLichChieuHeThongRap",{
        params:{
            maHeThongRap:cinemaID,
            maNhom:"GP01"
        }
    })
    return data;
}