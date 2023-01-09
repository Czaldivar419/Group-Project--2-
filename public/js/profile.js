const newFormHandler = async (event) => {
  event.preventDefault();

  const plate = document.querySelector('#driver-plate').value.trim();
  const make = document.querySelector('#driver-make').value.trim();
  const model = document.querySelector('#driver-model').value.trim();
  const incident = document.querySelector('#driver-incident').value.trim();

  if (plate && make && model && incident) {
    const response = await fetch(`/api/driver`, {
      method: 'POST',
      body: JSON.stringify({ plate, make, model, incident }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/driver/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-driver-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.report-list')
  .addEventListener('click', delButtonHandler);
