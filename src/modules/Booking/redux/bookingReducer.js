const initialState = {
  seatSelected: [],
  seatList: [
    {
      hang: "A",
      danhSachGhe: [
        { soGhe: "A1", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "A2", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "A3", loai: "normal", gia: 75000, daDat: false },
        {
          soGhe: "A4",
          loai: "normal",
          loai: "normal",
          gia: 75000,
          daDat: false,
        },
        { soGhe: "A5", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "A6", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "A7", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "A8", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "A9", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "A10", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "A11", loai: "normal", gia: 0, daDat: true },
        { soGhe: "A12", loai: "normal", gia: 0, daDat: true },
        { soGhe: "A13", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "A14", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "A15", loai: "normal", gia: 0, daDat: true },
        { soGhe: "A16", loai: "normal", gia: 0, daDat: true },
      ],
    },
    {
      loai: "normal",
      hang: "B",
      danhSachGhe: [
        { soGhe: "B1", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "B2", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "B3", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "B4", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "B5", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "B6", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "B7", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "B8", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "B9", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "B10", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "B11", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "B12", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "B13", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "B14", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "B15", loai: "normal", gia: 75000, daDat: false },
        {
          soGhe: "B16",
          loai: "normal",
          loai: "normal",
          gia: 75000,
          daDat: false,
        },
      ],
    },
    {
      hang: "C",
      danhSachGhe: [
        { soGhe: "C1", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "C2", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "C3", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "C4", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "C5", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "C6", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "C7", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "C8", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "C9", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "C10", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "C11", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "C12", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "C13", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "C14", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "C15", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "C16", loai: "normal", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "D",
      danhSachGhe: [
        { soGhe: "D1", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "D2", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "D3", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "D4", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "D5", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "D6", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "D7", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "D8", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "D9", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "D10", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "D11", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "D12", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "D13", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "D14", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "D15", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "D16", loai: "normal", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "E",
      loai: "normal",
      danhSachGhe: [
        { soGhe: "E1", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "E2", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "E3", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "E4", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "E5", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "E6", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "E7", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "E8", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "E9", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "E10", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "E11", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "E12", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "E13", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "E14", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "E15", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "E16", loai: "normal", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "F",
      danhSachGhe: [
        { soGhe: "F1", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "F2", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "F3", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "F4", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "F5", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "F6", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "F7", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "F8", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "F9", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "F10", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "F11", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "F12", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "F13", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "F14", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "F15", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "F16", loai: "normal", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "G",
      danhSachGhe: [
        { soGhe: "G1", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "G2", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "G3", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "G4", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "G5", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "G6", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "G7", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "G8", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "G9", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "G10", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "G11", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "G12", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "G13", loai: "vip", gia: 100000, daDat: false },
        { soGhe: "G14", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "G15", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "G16", loai: "normal", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "H",
      danhSachGhe: [
        { soGhe: "H1", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "H2", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "H3", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "H4", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "H5", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "H6", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "H7", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "H8", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "H9", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "H10", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "H11", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "H12", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "H13", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "H14", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "H15", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "H16", loai: "normal", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "I",
      danhSachGhe: [
        { soGhe: "I1", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "I2", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "I3", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "I4", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "I5", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "I6", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "I7", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "I8", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "I9", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "I10", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "I11", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "I12", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "I13", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "I14", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "I15", loai: "normal", gia: 75000, daDat: false },
        { soGhe: "I16", loai: "normal", gia: 75000, daDat: false },
      ],
    },
  ],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GHE_DANG_CHON": {
      // tìm index của hàng được chọn
      const indexHang = state.seatList.findIndex(
        (item) => item.hang === action.hang
      );

      // tạo mảng danhSachGhe mới
      const danhSachGhe = state.seatList[indexHang].danhSachGhe.map((item) => {
        if (item.soGhe === action.soGhe) {
          if (!item.selected) {
            return { ...item, selected: true };
          } else {
            return { ...item, selected: false };
          }
        }
        return item;
      });

      // tạo mảng seatList mới
      const seatList = state.seatList.map((item) => {
        if (item.hang === action.hang) {
          return { ...item, danhSachGhe: danhSachGhe };
        }
        return item;
      });

      // tìm ghế đang được chọn
      const seatBooking = seatList[indexHang].danhSachGhe.find((item) => {
        return item.soGhe === action.soGhe;
      });

      const seatSelected = [...state.seatSelected];

      if (seatBooking.selected) {
        seatSelected.push(seatBooking);
      } else {
        const index = seatSelected.findIndex(
          (item) => item.soGhe === seatBooking.soGhe
        );
        seatSelected.splice(index, 1);
      }
      console.log(seatSelected);

      return { ...state, seatSelected, seatList };
    }
    case "DAT_GHE": {
      const seatList = state.seatList.map((item) => {
        const danhSachGhe = item.danhSachGhe.map((item) => {
          if (item.selected) {
            return { ...item, daDat: true, selected: false };
          }
          return item;
        });
        return { ...item, danhSachGhe };
      });
      return { ...state, seatList, seatSelected: [] };
    }
    case "HUY_GHE": {
      const seatList = state.seatList.map((item) => {
        const danhSachGhe = item.danhSachGhe.map((item) => {
          if (item.soGhe === action.soGhe) {
            return { ...item, selected: false };
          }
          return item;
        });
        return { ...item, danhSachGhe };
      });
      const seatSelected = [...state.seatSelected];
      const index = seatSelected.findIndex(
        (item) => item.soGhe === action.soGhe
      );
      seatSelected.splice(index, 1);
      return { ...state, seatList, seatSelected };
    }

    default:
      return state;
  }
};
export default movieReducer;
