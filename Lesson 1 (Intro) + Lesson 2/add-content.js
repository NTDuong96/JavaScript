var today = new Date();
// Tạo var today, lấy giá trị ngày (new Date())

var hourNow = today.getHours();
// var hourNow nhận giá trị getHours
// today.getHours() = lấy giờ hiện tại của ngày hôm nay

var greeting;
// var greeting sẽ nhận các giá trị ở dưới, với các điều kiện khác nhau của if
if (hourNow > 18) {
    greeting = 'Good evening!';
    // Nếu >18h => Chào buổi tối (こんばんわ！）
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
    // Giờ từ 12h->18h => Good afternoon!
} else if (hourNow > 0) {
    greeting = 'Good morning!';
    // Giờ từ 0->12h => Chào buổi sáng (おはようございます。）
} else {
    greeting = 'Welcome!';
    // Nếu không có giờ cụ thể, lời chào là Welcome (いらっしゃいませ！）
}
document.write('<h3>' + greeting + '</h3>');
// document.write('<h3> ahihi </h3>');