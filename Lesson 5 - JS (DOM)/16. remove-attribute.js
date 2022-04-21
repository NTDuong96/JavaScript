var firstItem=document.getElementById('one'); // Gắp item đầu list
if (firstItem.hasAttribute('class')) { // Nếu item đầu tiên có thuộc tính class, mở lệnh trong { }
    // if đúng (id='one' và class='hot')
    firstItem.removeAttribute('class'); // Xóa thuộc tính cho item đó
}

// Sau khi xóa, tag của item đã chuyển thành màu khác, nhưng class của item này đã bay màu