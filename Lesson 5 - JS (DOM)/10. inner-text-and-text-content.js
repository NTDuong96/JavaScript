var firstItem=document.getElementById('one'); // Tìm item đầu tiên trong list
var showTextContent=firstItem.textContent; //Lấy giá trị textContent của item đó
var showInnerText=firstItem.innerText; //Lấy giá trị của innerText

var msg = '<p>textContent: ' + showTextContent + '</p>';
    msg += '<p>innerText: ' + showInnerText + '</p>';
var el=document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'sourdough bread'; // Cập nhật content cho item đầu tiên

// Đã hiểu TextContent, lệnh này trỏ đến cụm text 'Fresh figs'. Cùng với dòng cuối, dòng text này sẽ chuyển thành bread
// [?] Nhưng tại sao InnerText lại chỉ hiện figs?