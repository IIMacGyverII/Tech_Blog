// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#project-name').value.trim();
//   const needed_funding = document.querySelector('#project-funding').value.trim();
//   const description = document.querySelector('#project-desc').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/projects`, {
//       method: 'POST',
//       body: JSON.stringify({ name, needed_funding, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create project');
//     }
//   }
// };

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

const EditPostBtnHandler = async (event) => {
  const id = event.target.getAttribute('data-id');

  await document.location.replace(`/post/${id}/edit`);
  
};

function initializedEventListeners() {
  let deleteButtons = document.querySelectorAll('.deletePostBtn');

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", delButtonHandler);
  }

  let editButtons = document.querySelectorAll('.editPostBtn');

  for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener("click", EditPostBtnHandler);
  }


}

initializedEventListeners();
