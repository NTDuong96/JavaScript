var firstItem=document.getElementById('one'); // Lấy item đầu của list
if(firstItem.hasAttribute('class')) { //Nếu item đó (id='one') có thuộc tính class trong tag mở, thực hiện lệnh trong { };
    // if đúng, Fresh figs có 2 attribute (id='one' và class='hot' trong tag mở)
    var attr = firstItem.getAttribute('class'); // Lấy thuộc tính của item đầu

    // Sau khi lấy thuộc tính xong, 2 dòng dưới hiển thị thuộc tính ('hot') của id='one'
    // Kết quả hiển thị tại 'scriptResults' (sau khi demo có phần trắng dưới item cuối cùng)
    var el=document.getElementById('scriptResults');
    el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';
}