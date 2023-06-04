function handleInput(event) {
  event.preventDefault(); 

  const authorInput = document.getElementById('author');
  const emailInput = document.getElementById('email');
  const titleInput = document.getElementById('title');
  const passwordInput = document.getElementById('password');
  const contentInput = document.getElementById('content');

  const authorValue = authorInput.value;
  const emailValue = emailInput.value;
  const titleValue = titleInput.value;
  const passwordValue = passwordInput.value;
  const contentValue = contentInput.value;

  if (authorValue.trim() === '') {
    alert('작성자를 입력해주세요.');
    return;
  }

  if (emailValue.trim() === '') {
    alert('이메일을 입력해주세요.');
    return;
  }

  if (titleValue.trim() === '') {
    alert('제목을 입력해주세요.');
    return;
  }

  if (passwordValue.trim() === '') {
    alert('비밀번호를 입력해주세요.');
    return;
  }

  if (contentValue.trim() === '') {
    alert('내용을 입력해주세요.');
    return;
  }

  const newEntry = {
    author: authorValue,
    email: emailValue,
    date: new Date().toISOString(),
    title: titleValue,
    password: passwordValue,
    content: contentValue
  };

  const guestbookData = JSON.parse(localStorage.getItem('guestbookData')) || [];

  guestbookData.push(newEntry);

  localStorage.setItem('guestbookData', JSON.stringify(guestbookData));

  authorInput.value = '';
  emailInput.value = '';
  titleInput.value = '';
  passwordInput.value = '';
  contentInput.value = '';

  alert('방명록이 등록되었습니다.');
}

function handleCancel() {
  document.getElementById('author').value = '';
  document.getElementById('email').value = '';
  document.getElementById('title').value = '';
  document.getElementById('password').value = '';
  document.getElementById('content').value = '';
}

function navigateToList() {
  location.href = 'guestbook_list.html';
}

window.onload = function() {
  const guestbookForm = document.getElementById('guestbookForm');
  guestbookForm.addEventListener('submit', handleInput);
};
