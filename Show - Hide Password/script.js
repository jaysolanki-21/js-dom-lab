// Select the elements
const passwordField = document.getElementById('password');
const togglePasswordIcon = document.getElementById('toggle-password');

togglePasswordIcon.addEventListener('click', () => {
  const currentType = passwordField.type;
 
  if (currentType === 'password') {
    passwordField.type = 'text';  
    togglePasswordIcon.textContent = '🙈';  
  } else {
    passwordField.type = 'password';  
    togglePasswordIcon.textContent = '👁️';  
  }
});
