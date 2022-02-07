const fragment = document.createDocumentFragment();

// MAKE TEMPLATE SERVICES 
const templateService = (SERVICES, templateContainer) => {
   const templateService = document.querySelector('#templateServices').content; //template
   SERVICES.forEach(({image, title, description}) => {
      templateService.querySelector('#serviceImage').src = image;
      templateService.querySelector('#serviceImage').alt = title;
      templateService.querySelector('#serviceTitle').textContent = title;
      templateService.querySelector('#serviceText').textContent = description;

      const clone = templateService.cloneNode(true);
      fragment.appendChild(clone);
   });
   templateContainer.appendChild(fragment);
}


//MAKE TEMPLATE GALLERY
const templateGallery = (GALLERY, templateContainer) =>  {
   const template = document.querySelector('#templateGallery').content;
   GALLERY.forEach((image, i) => {
      template.querySelector('#galleryImage').src = image;
      template.querySelector('#galleryImage').alt = `gallery image ${i}`;
      const clone = template.cloneNode(true);
      fragment.appendChild(clone);
   });
   templateContainer.appendChild(fragment);
}

//MAKE TEMPLATE PRICES
const templatePrice = (PRICES, templateContainer) => {
   const template = document.querySelector('#templatePrice').content;
   PRICES.forEach(({title, price, options}) => {
      template.querySelector('#priceTitle').textContent = title;
      template.querySelector('#pricePrice').textContent = `$${price}`;
      // clean priceDetailsList = ul... 
      const list = template.querySelector('#priceDetailsList');
      while (list.firstChild) {
         list.removeChild(list.firstChild);
      }

      options.forEach(service => {
         const li = document.createElement('li');   
         const img = document.createElement('img');   
         const p = document.createElement('p');
         img.src = './images/check.svg';
         img.alt = service;
         p.textContent = service 
         li.appendChild(img);
         li.appendChild(p);
         list.appendChild(li);
      });
      
      const clone = template.cloneNode(true);
      fragment.appendChild(clone);
   });
   templateContainer.appendChild(fragment);
}

// MAKE TEMPLATE REVIEWS (COMMENTS)
const templateReviews = (COMMENTS, templateContainer) => {
   const template = document.querySelector('#templateReviews').content;
   COMMENTS.forEach(({id, name, text, commentBody, photo}) => {
      template.querySelector('#reviewPhoto').src = photo;
      template.querySelector('#reviewName').textContent = name;
      template.querySelector('#reviewText').textContent = text;
      template.querySelector('#reviewComment').textContent  = commentBody;

      const clone = template.cloneNode(true);
      fragment.appendChild(clone);
   });
   templateContainer.appendChild(fragment);
}


export {templateService, templateGallery, templatePrice, templateReviews};