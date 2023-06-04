window.onload = function() {
  displayGuestbookEntries();
};

function displayGuestbookEntries() {
  var guestbookData = JSON.parse(localStorage.getItem('guestbookData')) || [];

  var tableBody = document.querySelector('#guestbookTableBody');
  tableBody.innerHTML = '';

  for (var i = 0; i < guestbookData.length; i++) {
    var entry = guestbookData[i];
    var date = new Date(entry.date).toISOString().slice(0, 10);
    var row = document.createElement('tr');
    row.innerHTML = '<td>' + (i + 1) + '</td>' +
                    '<td>' + entry.author + '</td>' +
                    '<td>' + entry.email + '</td>' +
                    '<td>' + date + '</td>' +
                    '<td>' + entry.title + '</td>';
    tableBody.appendChild(row);
  }
}

function handleTitleClick(index) {
  var guestbookData = JSON.parse(localStorage.getItem('guestbookData')) || [];
  var entry = guestbookData[index];

  localStorage.setItem('editIndex', index);

  location.href = 'guestbook_edit.html';
}
function navigateToInput() {
  location.href = 'guestbook.html';
}

function deleteEntry(index) {
  var guestbookData = JSON.parse(localStorage.getItem('guestbookData')) || [];

  if (index >= 0 && index < guestbookData.length) {
    guestbookData.splice(index, 1);
    localStorage.setItem('guestbookData', JSON.stringify(guestbookData));
    displayGuestbookEntries(); 
  }
}
