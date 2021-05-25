const github = new Github();
const ui = new UI();
const input = document.getElementById('searchUser');
input.addEventListener('keyup', searchUser);

function searchUser(e) {
  const user = e.target.value;
  if (e.target.value !== '') {
    github.getUsers(user)
      .then((data) => {
        if (data.profile.message === 'Not Found') {
          //show aler
          ui.showAlert('User not Found', 'alert alert-danger');
        } else {
          //show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })

  } else {
    //clear profile
    ui.clearProfile();
  }
}