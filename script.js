const properties = [
    {
        id: 1,
        name: "Cozy Cottage",
        location: "Gisborne",
        price: "$200,000",
        bedrooms: 2,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?cozy+cottage",
        description: `Welcome to "Cozy Cottage" nestled in the serene locale of Gisborne, offering a tranquil escape from the hustle and bustle of urban life. Priced at a steal for $200,000, this charming abode boasts 2 snug bedrooms and 2 immaculate bathrooms, ensuring comfort and convenience for its lucky inhabitants.
        <br></br>Picture yourself unwinding in the cozy ambiance of this cottage, where every corner exudes warmth and relaxation. Whether you're curling up with a book by the fireplace or savoring a cup of tea on the quaint porch, each moment spent here promises to be nothing short of blissful.`
    },
    {
        id: 2,
        name: "Modern Loft",
        location: "Bay Of Plenty",
        price: "$350,000",
        bedrooms: 3,
        bathrooms: 2.5,
        image: "https://source.unsplash.com/category/house/?modern+loft",
        description: `Step into contemporary living with "Modern Loft" located in the vibrant Bay Of Plenty. For $350,000, enjoy spacious open-plan living with 3 chic bedrooms and 2.5 stylish bathrooms. This loft epitomizes modern elegance and convenience, perfect for urban dwellers looking for a trendy home.`
    },
    {
        id: 3,
        name: "Seaside Villa",
        location: "Northland",
        price: "$1,000,000",
        bedrooms: 4,
        bathrooms: 3,
        image: "https://source.unsplash.com/category/house/?seaside+villa",
        description: `Experience coastal luxury at "Seaside Villa" in Northland, priced at $1,000,000. This exquisite property offers 4 spacious bedrooms and 3 pristine bathrooms, all with stunning sea views. Perfect for those who dream of waking up to the sound of the waves and spending their days on the beach.`
    },
    {
        id: 4,
        name: "Rustic Cabin",
        location: "Marlborough",
        price: "$150,000",
        bedrooms: 1,
        bathrooms: 1,
        image: "https://source.unsplash.com/category/house/?rustic+cabin",
        description: `Escape to "Rustic Cabin" in Marlborough for just $150,000. This charming 1-bedroom, 1-bathroom retreat is perfect for solo adventurers or couples seeking a peaceful getaway. Embrace the simplicity and charm of cabin life, surrounded by nature's beauty.`
    },
    {
        id: 5,
        name: "Urban Apartment",
        location: "Wellington",
        price: "$500,000",
        bedrooms: 2,
        bathrooms: 1.5,
        image: "https://source.unsplash.com/category/house/?urban+apartment",
        description: `Live in the heart of the city with "Urban Apartment" in Wellington. At $500,000, this stylish apartment features 2 comfortable bedrooms and 1.5 modern bathrooms. Ideal for professionals or small families wanting to be close to all the urban amenities and cultural attractions.`
    },
    {
        id: 6,
        name: "Luxury Penthouse",
        location: "Nelson",
        price: "$2,200,000",
        bedrooms: 4,
        bathrooms: 3.5,
        image: "https://source.unsplash.com/category/house/?luxury+penthouse",
        description: `Indulge in opulence at "Luxury Penthouse" in Nelson, available for $2,200,000. This lavish property boasts 4 spacious bedrooms and 3.5 exquisite bathrooms. Enjoy panoramic views, top-of-the-line amenities, and unparalleled elegance in every detail.`
    },
    {
        id: 7,
        name: "Beachfront Villa",
        location: "Bay Of Plenty",
        price: "$1,800,000",
        bedrooms: 5,
        bathrooms: 4,
        image: "https://source.unsplash.com/category/house/?beachfront+villa",
        description: `Welcome to paradise at "Beachfront Villa" in Bay Of Plenty, priced at $1,800,000. This luxurious villa features 5 elegant bedrooms and 4 modern bathrooms, offering direct beach access and stunning ocean views. Perfect for those seeking a lavish coastal lifestyle.`
    },
    {
        id: 8,
        name: "Countryside Estate",
        location: "Canterbury",
        price: "$1,600,000",
        bedrooms: 6,
        bathrooms: 5,
        image: "https://source.unsplash.com/category/house/?countryside+estate",
        description: `Discover grandeur at "Countryside Estate" in Canterbury for $1,600,000. This expansive estate offers 6 spacious bedrooms and 5 luxurious bathrooms. Set amidst rolling hills and lush landscapes, it's the perfect retreat for those craving tranquility and elegance in the countryside.`
    },
    {
        id: 9,
        name: "Downtown Condo",
        location: "Auckland",
        price: "$700,000",
        bedrooms: 2,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?downtown+condo",
        description: `Experience urban sophistication at "Downtown Condo" in Auckland, available for $700,000. This modern condo features 2 stylish bedrooms and 2 sleek bathrooms. Perfect for city dwellers who value convenience and contemporary living in the heart of the action.`
    },
    {
        id: 10,
        name: "Mountain Chalet",
        location: "Otago",
        price: "$900,000",
        bedrooms: 3,
        bathrooms: 2.5,
        image: "https://source.unsplash.com/category/house/?mountain+chalet",
        description: `Retreat to "Mountain Chalet" in Otago, priced at $900,000. This picturesque chalet offers 3 cozy bedrooms and 2.5 modern bathrooms. Nestled in the mountains, it's perfect for those seeking adventure and serenity in a beautiful alpine setting.`
    },
    {
        id: 11,
        name: "Luxury Penthouse",
        location: "Nelson",
        price: "$2,200,000",
        bedrooms: 4,
        bathrooms: 3.5,
        image: "https://source.unsplash.com/category/house/?luxury+penthouse",
        description: `Indulge in opulence at "Luxury Penthouse" in Nelson, available for $2,200,000. This lavish property boasts 4 spacious bedrooms and 3.5 exquisite bathrooms. Enjoy panoramic views, top-of-the-line amenities, and unparalleled elegance in every detail.`
    },
    {
        id: 12,
        name: "Beachfront Villa",
        location: "Bay Of Plenty",
        price: "$1,800,000",
        bedrooms: 5,
        bathrooms: 4,
        image: "https://source.unsplash.com/category/house/?beachfront+villa",
        description: `Welcome to paradise at "Beachfront Villa" in Bay Of Plenty, priced at $1,800,000. This luxurious villa features 5 elegant bedrooms and 4 modern bathrooms, offering direct beach access and stunning ocean views. Perfect for those seeking a lavish coastal lifestyle.`
    },
    {
        id: 13,
        name: "Countryside Estate",
        location: "Canterbury",
        price: "$1,600,000",
        bedrooms: 6,
        bathrooms: 5,
        image: "https://source.unsplash.com/category/house/?countryside+estate",
        description: `Discover grandeur at "Countryside Estate" in Canterbury for $1,600,000. This expansive estate offers 6 spacious bedrooms and 5 luxurious bathrooms. Set amidst rolling hills and lush landscapes, it's the perfect retreat for those craving tranquility and elegance in the countryside.`
    },
    {
        id: 14,
        name: "Downtown Condo",
        location: "Auckland",
        price: "$700,000",
        bedrooms: 2,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?downtown+condo",
        description: `Experience urban sophistication at "Downtown Condo" in Auckland, available for $700,000. This modern condo features 2 stylish bedrooms and 2 sleek bathrooms. Perfect for city dwellers who value convenience and contemporary living in the heart of the action.`
    },
    {
        id: 15,
        name: "Mountain Chalet",
        location: "Otago",
        price: "$900,000",
        bedrooms: 3,
        bathrooms: 2.5,
        image: "https://source.unsplash.com/category/house/?mountain+chalet",
        description: `Retreat to "Mountain Chalet" in Otago, priced at $900,000. This picturesque chalet offers 3 cozy bedrooms and 2.5 modern bathrooms. Nestled in the mountains, it's perfect for those seeking adventure and serenity in a beautiful alpine setting.`
    },
    {
        id: 16,
        name: "Sunny Bungalow",
        location: "Hawkes Bay",
        price: "$280,000",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?sunny+bungalow",
        description: `Bask in the warmth of "Sunny Bungalow" in Hawkes Bay, available for $280,000. This charming home features 3 bright bedrooms and 2 modern bathrooms. Perfect for families or retirees, it offers a cozy and inviting atmosphere with plenty of natural light.`
    },
    {
        id: 17,
        name: "Oceanview Condo",
        location: "West Coast",
        price: "$420,000",
        bedrooms: 2,
        bathrooms: 1.5,
        image: "https://source.unsplash.com/category/house/?oceanview+condo",
        description: `Enjoy breathtaking views at "Oceanview Condo" on the West Coast, priced at $420,000. This stylish condo offers 2 comfortable bedrooms and 1.5 bathrooms. Ideal for those who love the ocean, it provides stunning vistas and a relaxed coastal lifestyle.`
    },
    {
        id: 18,
        name: "Country Farmhouse",
        location: "Manawatu",
        price: "$550,000",
        bedrooms: 4,
        bathrooms: 3,
        image: "https://source.unsplash.com/category/house/?country+farmhouse",
        description: `Embrace rustic charm at "Country Farmhouse" in Manawatu, available for $550,000. This spacious farmhouse features 4 cozy bedrooms and 3 bathrooms, perfect for family living. Set on expansive grounds, it's ideal for those seeking a rural lifestyle.`
    },
    {
        id: 19,
        name: "City Penthouse",
        location: "Taranaki",
        price: "$1,200,000",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?city+penthouse",
        description: `Live in luxury at "City Penthouse" in Taranaki, priced at $1,200,000. This upscale penthouse offers 3 elegant bedrooms and 2 modern bathrooms. With stunning city views and top-tier amenities, it's perfect for those who enjoy a sophisticated urban lifestyle.`
    },
    {
        id: 20,
        name: "Lakeside Retreat",
        location: "Waikato",
        price: "$780,000",
        bedrooms: 5,
        bathrooms: 4,
        image: "https://source.unsplash.com/category/house/?lakeside+retreat",
        description: `Escape to "Lakeside Retreat" in Waikato, available for $780,000. This beautiful property features 5 spacious bedrooms and 4 bathrooms, offering serene lake views and tranquility. Ideal for families or those seeking a peaceful getaway.`
    }
];

// Get input elements:
// - our filters
const locationFilter = document.getElementById("location");
const bedroomsFilter = document.getElementById("bedrooms");
const bathroomsFilter = document.getElementById("bathrooms");
const priceMinFilter = document.getElementById("priceMin");
const priceMaxFilter = document.getElementById("priceMax");
// - our sorting buttons
const highToLowBtn = document.getElementById('priceHighToLowBtn');
const LowToHighBtn = document.getElementById('priceLowToHighBtn');
const alphabeticalBtn = document.getElementById('alphabeticalBtn');



//  ------ ******* CLICK FUNCTIONS ****** -------
// OnChange event on each filter:
// Location:
locationFilter.addEventListener("change", function () {
    console.dir(locationFilter.value);
    filterAndPopulateResults();
});
// Bedrooms:
bedroomsFilter.addEventListener("change", function () {
    console.dir(bedroomsFilter.value)
    filterAndPopulateResults();
});
// Bathrooms:
bathroomsFilter.addEventListener("change", function () {
    console.dir(bathroomsFilter.value)
    filterAndPopulateResults();
});
// Price Min:
priceMinFilter.addEventListener("change", function () {
    console.dir(priceMinFilter.value)
    filterAndPopulateResults();
});
// Price Max:
priceMaxFilter.addEventListener("change", function () {
    console.dir(priceMaxFilter.value)
    filterAndPopulateResults();
});
// --- Sorting Button Clicks: -----
highToLowBtn.addEventListener("click", function () {
    const filteredProperties = filterProperties();
    const sortedProperties = sortPropertiesByPriceHighToLow(filteredProperties); // sorting filtered properties by price high to low
    populateResults(sortedProperties);
});

LowToHighBtn.addEventListener("click", function () {
    const filteredProperties = filterProperties();
    const sortedProperties = sortPropertiesByPriceLowToHigh(filteredProperties); // sorting filtered properties by price low to high
    populateResults(sortedProperties);
});

alphabeticalBtn.addEventListener("click", function () {
    const filteredProperties = filterProperties();
    const sortedProperties = sortPropertiesAlphabetical(filteredProperties); // sorting filtered properties by name alhabetically
    populateResults(sortedProperties);
});

// ------- ******* FILTERING FUNCTION & LOGIC ******** --------
// Filter Results - return an array of filtered properties
function filterProperties() {
    const filteredProperties = properties.filter(property => {
        //check if location matches
        const propertyLocation = property.location.toLowerCase();
        const filterValue = locationFilter.value.toLowerCase();
        // that is doesn't match so it returns false and doesnent add to the array
        // && !strict equals
        if (filterValue && !propertyLocation.includes(filterValue)) {
            // if (Auckland && !propertyLocation.incudes(Auckland))
            // if property location doesnt include the filter value return false
            return false
        }

        // check if numbers of bedrooms match 
        if (bedroomsFilter.value && parseInt(property.bedrooms) <= parseInt(bedroomsFilter.value)) {
            return false
        }

        // check if numbers of bathrooms match 
        if (bathroomsFilter.value && parseFloat(property.bathrooms) <= parseFloat(bathroomsFilter.value)) {
            return false
        }

        // check if the price falls with the specified range
        // escape because $ is a special characters backslash means escape
        const priceValue = parseFloat(property.price.replace(/\$/g, '').replace(/,/g, '')); // removes $ and , from price and make the number a floating number
        const minPrice = parseFloat(priceMinFilter.value);
        const maxPrice = parseFloat(priceMaxFilter.value);
        if ((minPrice && priceValue < minPrice) || (maxPrice && priceValue > maxPrice)) {
            return false
        }
        // if all conditions pass, include the proper in the filtered array
        return true;

    });

    // return the filtered properties array - can access outside
    return filteredProperties;
}


// -------- ***** SORTING FUNCTIONS ***** ------
// Sort Results - sort by price - lowest to highest
function sortPropertiesByPriceLowToHigh(properties) {
    return properties.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/\$/g, '').replace(/,/g, ''));
        const priceB = parseFloat(b.price.replace(/\$/g, '').replace(/,/g, ''));
        return priceA - priceB;
    })
}

function sortPropertiesByPriceHighToLow(properties) {
    return properties.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/\$/g, '').replace(/,/g, ''));
        const priceB = parseFloat(b.price.replace(/\$/g, '').replace(/,/g, ''));
        return priceB - priceA;
    })
}

// Sort by name alphabetically
function sortPropertiesAlphabetical(properties) {
    return properties.sort((a, b) => {
        const nameA = a.name.toLowerCase(); // property a name to lowercase
        const nameB = b.name.toLowerCase(); // property b name to lowercase
        return nameA.localeCompare(nameB);
    })
}


//  -------- ******* POPULATION FUNCTIONS ****** -------
// filter and then populate results
function filterAndPopulateResults() {
    const filteredProperties = filterProperties();
    // Sort properties before populating 
    // const sortedProperties = sortPropertiesByPriceLowToHigh(filteredProperties); // Sorting the filtered Properties from previous line
    populateResults(filteredProperties);
}

// Initial population of cards
filterAndPopulateResults();

// Populate Cards Function
function populateResults(filteredResults) {
    // get the results div
    const resultsDiv = document.getElementById("results");
    // clear previous results
    resultsDiv.innerHTML = "";

    // check if filtered properties is empty
    if (filteredResults.length === 0) {
        resultsDiv.innerHTML = `<p class="no-results">No Results Found</p>`
    } else {
        // If filteredResults is not empty
        filteredResults.forEach(property => {
            // create a card for that property:
            const propertyCartHtml = `<div class="property">
            <div class="swiper">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide"><img src="${property.image}" alt="${property.name} image 1" class="property-image" value=${property.id}></div>
                    <div class="swiper-slide"><img src="${property.image}" alt="${property.name} image 2" class="property-image" value=${property.id}></div>
                    <div class="swiper-slide"><img src="${property.image}" alt="${property.name} image 3" class="property-image" value=${property.id}></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="property-details">
                <h2>${property.name}</h2>
                <p>${property.location}</p>
                <div class="more-details">
                    <div class="property-amenities">
                        <p>${property.bedrooms} <i class="fa-solid fa-bed"></i></p>
                        <p>${property.bathrooms} <i class="fa-solid fa-bath"></i></p>
                    </div>
                    <h4>${property.price}</h4>
                </div>
            </div>
        </div>
        `;
            resultsDiv.innerHTML += propertyCartHtml;
            attachModalToImages(); // attaching event listernes straight after population

            // Re-initialize Swiper Instances
            const swipers = document.querySelectorAll('.swiper');
            swipers.forEach(swiperEl => {
                new Swiper(swiperEl, {
                    direction: 'vertical',
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    }
                })
            });
        });
    }
}



// ------ ***** MODAL FUNCTION ***** ------
// attach a click to each image and open the modal
function attachModalToImages() {
    // Get all the images 
    const images = document.querySelectorAll('.property-image');
    // Get the details modal from the HTML
    const detailsModal = document.getElementById('detailsModal');

    // run a for loop over the images array to add click event to each image 
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function (event) {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            detailsModal.dataset.scrollPosition = scrollPosition // Storing scroll position in the modals dataset
            const rect = event.target.getBoundingClientRect(); // Get the position of the clicked image relative to the viewport
            const imageTop = rect.top + scrollPosition; // Calculate the top position of the clicked image
            const windowHeight = window.innerHeight;
            const dialogHeight = detailsModal.offsetHeight; // height of the modal
            const viewportTop = scrollPosition;

            let dialogTop = viewportTop + (windowHeight - dialogHeight) / 2; // caculate the top position for the dialog to be cenetered

            // Ensure the dialog doesnt go above or below the viewport:
            if (dialogTop < imageTop) {
                dialogTop = imageTop; // Place the dialog jsut below the clicked image if theres space
            } else if (dialogTop + dialogHeight > windowHeight + viewportTop) {
                dialogTop = windowHeight + viewportTop - dialogHeight; // Place the dialog at the bottom of the viewport if theres not enough space
            }

            detailsModal.style.top = dialogTop + 'px'; // Set top position of the dialog
            console.log('image click working');
            detailsModal.showModal(); // open Modal
            document.body.classList.add('modal-open'); // add class to disbale scrolling
            // get the close button
            closeDetailsModal();
            // populate modal with correct info
            console.log(event.target.getAttribute('value'));
            populateModal(event.target.getAttribute('value'));
        })
    }

}

// closing modals
function closeDetailsModal() {
    // get close button of modal
    const close = document.getElementById('closeModal')
    // get the modal
    const detailsModal = document.getElementById('detailsModal');

    // clikc event on close modal to close the modal
    close.addEventListener('click', function () {
        detailsModal.close();
        document.body.classList.remove('modal-open'); // remove scroll-lock class
        const scrollPosition = detailsModal.dataset.scrollPosition || 0;
        window.scrollTo(0, scrollPosition);
    })
}

function populateModal(imageId) {
    // get the modal
    const detailsModal = document.querySelector('.modal-contents');


    detailsModal.innerHTML = `
            <img src="${properties[imageId - 1].image}" alt="${properties[imageId - 1].name} image 1">
            <h2>${properties[imageId - 1].name}</h2>
            <p>${properties[imageId - 1].location}</p>
            <h4>${properties[imageId - 1].price}</h4>
            <div class="modal-ammenities">
                <p>${properties[imageId - 1].bedrooms} <i class="fa-solid fa-bed"></i></p>
                <p>${properties[imageId - 1].bathrooms} <i class="fa-solid fa-bath"></i></p>
            </div>
            <p class="property-description">${properties[imageId - 1].description}</p>
            <button class="booking-button">Enquire Now</button>
            `
}


//  ------ ****** SWIPER JS ****** -------
// Intialise Swiper JS
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // emable clickable pagination bullets
    },
});