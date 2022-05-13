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

function initializedEventListeners() {
  let deleteButtons = document.querySelectorAll('.deletePostBtn');

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', delButtonHandler);
  }
}

initializedEventListeners();
