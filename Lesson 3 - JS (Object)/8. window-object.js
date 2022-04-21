// 0. Tạo var msg để hiển thị text trên web
// 1. winner.innerWidth để tìm chiều rộng của cửa sổ (window), và đặt vào trong biến msg
var msg = '<h2>browser window</h2><p>width: </p>' + window.innerWidth + '</p>';

// 2. Tương tự với đoạn dưới, đối với chiều cao của cửa sổ (innerHeight)
msg += '<p>height: ' + window.innerHeight + '</p>';

// 3. Tìm ra số items của cửa sổ (chưa rõ item gồm những gì, có đặc điểm gì khác so với element)
msg += '<h2>history</h2><p>items: ' + window.history.length + '</p>';
// (2 dòng dưới) tìm ra chiều rộng, chiều cao của màn hình máy tính và gắn vào var msg tương ứng
msg += '<h2>screen</h2><p>width: ' + window.screen.width + '</p>';

msg += '<p>height: ' + window.screen.height + '</p>';

var el=document.getElementById('info'); //Tạo var el để lấy element với id=info
el.innerHTML = msg; //Hiển thị message đối với element đó
alert('Current page: ' + window.location);
// TÌm địa chỉ trang hiện tại (trên cửa sổ - window.location) và hiển thị trên thông báo cảnh báo