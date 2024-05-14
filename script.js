const properties = [{
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
        image: "https://source.unsplash.com/category/house/?modern+loft"
    },
    {
        id: 3,
        name: "Seaside Villa",
        location: "Northland",
        price: "$1,000,000",
        bedrooms: 4,
        bathrooms: 3,
        image: "https://source.unsplash.com/category/house/?seaside+villa"
    },
    {
        id: 4,
        name: "Rustic Cabin",
        location: "Marlborough",
        price: "$150,000",
        bedrooms: 1,
        bathrooms: 1,
        image: "https://source.unsplash.com/category/house/?rustic+cabin"
    },
    {
        id: 5,
        name: "Urban Apartment",
        location: "Wellington",
        price: "$500,000",
        bedrooms: 2,
        bathrooms: 1.5,
        image: "https://source.unsplash.com/category/house/?urban+apartment"
    },
    {
        id: 6,
        name: "Luxury Penthouse",
        location: "Nelson",
        price: "$2,200,000",
        bedrooms: 4,
        bathrooms: 3.5,
        image: "https://source.unsplash.com/category/house/?luxury+penthouse"
    },
    {
        id: 7,
        name: "Beachfront Villa",
        location: "Bay Of Plenty",
        price: "$1,800,000",
        bedrooms: 5,
        bathrooms: 4,
        image: "https://source.unsplash.com/category/house/?beachfront+villa"
    },
    {
        id: 8,
        name: "Countryside Estate",
        location: "Canterbury",
        price: "$1,600,000",
        bedrooms: 6,
        bathrooms: 5,
        image: "https://source.unsplash.com/category/house/?countryside+estate"
    },
    {
        id: 9,
        name: "Downtown Condo",
        location: "Auckland",
        price: "$700,000",
        bedrooms: 2,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?downtown+condo"
    },
    {
        id: 10,
        name: "Mountain Chalet",
        location: "Otago",
        price: "$900,000",
        bedrooms: 3,
        bathrooms: 2.5,
        image: "https://source.unsplash.com/category/house/?mountain+chalet"
    },
    {
        id: 11,
        name: "Luxury Penthouse",
        location: "Nelson",
        price: "$2,200,000",
        bedrooms: 4,
        bathrooms: 3.5,
        image: "https://source.unsplash.com/category/house/?luxury+penthouse"
    },
    {
        id: 12,
        name: "Beachfront Villa",
        location: "Bay Of Plenty",
        price: "$1,800,000",
        bedrooms: 5,
        bathrooms: 4,
        image: "https://source.unsplash.com/category/house/?beachfront+villa"
    },
    {
        id: 13,
        name: "Countryside Estate",
        location: "Canterbury",
        price: "$1,600,000",
        bedrooms: 6,
        bathrooms: 5,
        image: "https://source.unsplash.com/category/house/?countryside+estate"
    },
    {
        id: 14,
        name: "Downtown Condo",
        location: "Auckland",
        price: "$700,000",
        bedrooms: 2,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?downtown+condo"
    },
    {
        id: 15,
        name: "Mountain Chalet",
        location: "Otago",
        price: "$900,000",
        bedrooms: 3,
        bathrooms: 2.5,
        image: "https://source.unsplash.com/category/house/?mountain+chalet"
    },
    {
        id: 16,
        name: "Sunny Bungalow",
        location: "Hawkes Bay",
        price: "$280,000",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?sunny+bungalow"
    },
    {
        id: 17,
        name: "Oceanview Condo",
        location: "West Coast",
        price: "$420,000",
        bedrooms: 2,
        bathrooms: 1.5,
        image: "https://source.unsplash.com/category/house/?oceanview+condo"
    },
    {
        id: 18,
        name: "Country Farmhouse",
        location: "Manawatu",
        price: "$550,000",
        bedrooms: 4,
        bathrooms: 3,
        image: "https://source.unsplash.com/category/house/?country+farmhouse"
    },
    {
        id: 19,
        name: "City Penthouse",
        location: "Taranaki",
        price: "$1,200,000",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?city+penthouse"
    },
    {
        id: 20,
        name: "Lakeside Retreat",
        location: "Waikato",
        price: "$780,000",
        bedrooms: 5,
        bathrooms: 4,
        image: "https://source.unsplash.com/category/house/?lakeside+retreat"
    }
];

// Get input elements:
const locationFilter = document.getElementById("location");
const bedroomsFilter = document.getElementById("bedrooms");
const bathroomsFilter = document.getElementById("bathrooms");
const priceMinFilter = document.getElementById("priceMin");
const priceMaxFilter = document.getElementById("priceMax");

// OnChange event on each filter:
// Location:
locationFilter.addEventListener("change", function () {
    console.dir(locationFilter.value);
    filterAndPopulateResults();
})
// Bedrooms:
bedroomsFilter.addEventListener("change", function () {
    console.dir(bedroomsFilter.value)
    filterAndPopulateResults();
})

// Bathrooms:
bathroomsFilter.addEventListener("change", function () {
    console.dir(bathroomsFilter.value)
    filterAndPopulateResults();
})
// Price Min:
priceMinFilter.addEventListener("change", function () {
    console.dir(priceMinFilter.value)
    filterAndPopulateResults();
})
// Price Max:
priceMaxFilter.addEventListener("change", function () {
    console.dir(priceMaxFilter.value)
    filterAndPopulateResults();
})

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

// filter and then populate results
function filterAndPopulateResults() {
    const filteredProperties = filterProperties();
    // Sort properties before populating 
    const sortedProperties = sortPropertiesByPriceLowToHigh(filteredProperties); // Sorting the filtered Properties from previous line
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
        });
    }
}

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


// attach a click to each image and open the modal
function attachModalToImages() {
    // Get all the images 
    const images = document.querySelectorAll('.property-image');
    // Get the details modal from the HTML
    const detailsModal = document.getElementById('detailsModal');

    // run a for loop over the images array to add click event to each image 
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function(event) {
            console.log('image click working');
            detailsModal.showModal();
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