 document.querySelectorAll('.product-option').forEach(option => {
     option.addEventListener('click', () => {
         const id = option.getAttribute('data-id');

         // Select the radio input
         option.querySelector('input[type="radio"]').checked = true;

         // Hide all expandable sections and remove active class
         document.querySelectorAll('.expandable').forEach(el => el.style.display = 'none');
         document.querySelectorAll('.product-option').forEach(el => el.classList.remove('active'));

         // Show the selected one and highlight it
         const expandable = document.getElementById(`expandable-${id}`);
         if (expandable) expandable.style.display = 'block';
         option.classList.add('active');
     });
 });