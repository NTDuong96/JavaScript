var removeEl = document.getElementsByTagName('li')[3];
// Lưu element cần xóa vào var removeEl
// El cần xóa là <li> thứ 4 trong list <ul> (là vinegar)

var containerEl=document.getElementsByTagName('ul')[0];
// Tìm một element khác (<li> đầu tiên của <ul>) để chứa El cần xóa (?)

containerEl.removeChild(removeEl);
// Xóa element (<li> thứ 4 trong <ul>)
// Demo được ví dụ, nhưng tại sao cần có item chứa el cần xóa...?