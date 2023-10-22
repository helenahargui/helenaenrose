const progress = document.querySelector('.progress-bar');
const testimonialsConatiner = document.querySelector('.testimonial  -container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

// Example testimonial data
const testimonials = [
    {
      name: "John Doe",
      position: "CEO",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "I'm very impressed with the product. It has greatly improved our business."
    },
    {
      name: "Jane Smith",
      position: "Marketing Manager",
      photo: "https://randomuser.me/api/portraits/women/2.jpg",
      text: "The service provided by this company is top-notch. I'm a loyal customer."
    },
    // Add more testimonials here
  ];

  let idx = 0;

  function updateTestimonial() {
      const { name, position, photo, text } = testimonials[idx];

      testimonial.innerHTML = text;
      userImage.src = photo;
      username.innerHTML = name;
      role.innerHTML = position;

      idx++;

      if(idx > testimonials.length - 1) {
          idx = 0;
      }
  }

    setInterval(updateTestimonial, 10000);
  


     