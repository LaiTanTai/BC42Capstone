### Thư viện 
- Routing : react-router-dom
- Redux : @reduxjs/toolkit, react-redux
- API:axios
- UI: react-bootstrap,material UI  
### Cấu trúc của một project

-src/
    -components/
     -chứa các presentational component (các component thuần về giao diện và tái sử dụng nhiều lần)
     -các component này thường sẽ chỉ có local state và nhận vào props để hiển thị giao diện , thường không chứa logicc nghiệp vụ ứng dụng 
    -module/
     -Chứa các component đại diện cho một chức năng hoặc 1 trang cụ thể trong ứng dụng 
     -Các components này thường sẽ chứa logic nghiệp vụ của ứng dụng (call API ,redux)

- APIS/
 - Chứa phần setup các phương thcuws gọi api (axios)
 - Chứa các hàm gọi API      