// Tạo một tập hợp các object là hotel
// Hàm tạo constructor
function Hotel(name,rooms,booked){
    this.name=name;
    this.rooms=rooms;
    this.booked=booked;
    this.checkAvailability=function(){
        return this.rooms - this.booked;
    };
};
//Tất cả các thành phần trong hàm đều gán this với tham số tương ứng trong khai báo Hotel

var quayHotel=new Hotel('Quay',40,25);
var parkHotel=new Hotel('Park',120,77);
// Tạo 2 object hotels bằng cách gán cho hàm Hotel ở trên, trong ngoặc là các thuộc tính (tên-số phòng-số phòng đầy)
// Chú ý dấu cách giữa new và Hotel

var details1 = quayHotel.name + ' rooms: ';
    details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent=details1;

var details2 = parkHotel.name + ' rooms: ';
    details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent=details2;
// Dấu cách trong phần text hiển thị (ở cụm var đầu tiên) cũng sẽ hiện trên web
// [?] Chưa hiểu rõ tại sao details1 (dòng 2) lại có += (?)
