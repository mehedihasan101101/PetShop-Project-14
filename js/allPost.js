// Function to fetch data from api.
async function loadAllPets() {
    try {
        const res = await fetch("https://openapi.programming-hero.com/api/peddy/pets");
        const allPets = await res.json();
        bringAllCards(allPets.pets); // this function is called here to display all Pets card which uses AllPets data as argument
    } catch (err) {
        console.error("Error Happened:", err)
    }

}

loadAllPets()

async function bringAllCards(pet) {

    try {
        const container = document.getElementById("Container-All-Pets") //All pet Card div stored
        const originalPetsData = [...pet];//a copy of original allPetsData
        let isSorted = false; //Indicator of data has been sorted or not

        // this function render all data in the all pet container 
        function renderPets(petsArr) {
            for (const pets of petsArr) {
                container.innerHTML +=
                    `
                       <div  class="p-6 space-y-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                           <div>
                               <img class="w-full" src="${pets.image}" alt="">
                           </div>
                           <div>
                               <h5 class="text-[24px] font-bold">${pets.pet_name}</h5>
                           </div>
                           <div class=" space-y-1 pl-2">
                   
                               <div class="flex items-center gap-2">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                       class="bi bi-grid-1x2" viewBox="0 0 16 16">
                                       <path
                                           d="M6 1H1v14h5zm9 0h-5v5h5zm0 9v5h-5v-5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z" />
                                   </svg>
                                   <p>Breed: <span class="pl-2 text-[16px] text-[#131313]">${pets.breed === null || pets.breed === undefined ? pets.breed = "Unavailable" : pets.breed}</span></p>
                               </div>
       
                               <div class="flex items-center gap-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar4" viewBox="0 0 16 16">
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                                  </svg>
                                   <p>Birth:<span class="pl-2 text-[16px] text-[#131313] ">${pets.date_of_birth == null || pets.date_of_birth == undefined ? pets.date_of_birth = "Unavailable" : pets.date_of_birth}</span></p>
                               </div>
       
                               <div class="flex items-center gap-2">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-female" viewBox="0 0 16 16">
                                     <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5"/>
                                   </svg>
                                   <p>Gender:<span class="pl-2 text-[16px] text-[#131313] ">${pets.gender == null || pet.gender == undefined ? pet.gender = "Unavailable" : pets.gender}</span></p>
                               </div>
       
                               <div class="flex items-center gap-2">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-euro" viewBox="0 0 16 16">
                                     <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936q-.002-.165.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.6 6.6 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"/>
                                   </svg>
                                   <p>Price:<span class="pl-2 text-[16px] text-[#131313] ">${pets.price == null || pets.price == undefined ? pets.price = "Unavailable" : pets.price} </span></p>
                               </div>
       
                           </div>
                       </div>
                   `

            }

        }
        renderPets(pet);

//Event listener to handle data sorting
        document.getElementById("btn-Sort-All-Data").addEventListener('click', function () {
            if (!isSorted) {
                sortedArray = [...pet].sort((a, b) => a.price - b.price); //data sorted in ascending order
                container.innerHTML = ``;
                renderPets(sortedArray);
                isSorted = true;
            }
            else{ 
                container.innerHTML =``;
                renderPets(originalPetsData);
                isSorted =false;
            }
        })

    }

    catch (err) {
        console.error("Error Happened:", err);
    }

}




