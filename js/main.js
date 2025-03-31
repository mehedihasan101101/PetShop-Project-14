//Global Variables
const container = document.getElementById("Container-All-Pets") //All pet Card div stored
let cloneOfAllPets = []; //this variable contain a clone of all pets data from loadAllPets() function

// Function to fetch data from api.
async function loadAllPets() {
    try {
        // 
        const res = await fetch("https://openapi.programming-hero.com/api/peddy/pets");
        const allPets = await res.json();
        bringAllCards(allPets.pets); // this function render all pets
        cloneOfAllPets = [...allPets.pets];


    } catch (err) {
        console.error("Error Happened:", err)
    }

}

loadAllPets()
// this function render data based on category


async function bringAllCards(pet) {


    try {

        const originalPetsData = [...pet];//a copy of original allPetsData
        let isSorted = false; //Indicator of data has been sorted or not
        container.classList.add("grid", "lg:grid-cols-3", "md:grid-cols-2", "gap-5"); //class dynamically added to handle avoid overwriting of class

        // this function render all data in the all pet container 
        function renderPets(petsArr) {
            for (const pets of petsArr) {
                container.innerHTML +=
                    `                <div
                    class="p-6 space-y-3 rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                    <div>
                        <img class="w-full rounded" src="${pets.image}" alt="">
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
                            <p>Breed: <span class="pl-2 text-[16px] text-[#131313]">${pets.breed === null || pets.breed
                        === undefined ? pets.breed = "Unavailable" : pets.breed}</span></p>
                        </div>

                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-calendar4" viewBox="0 0 16 16">
                                <path
                                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                            </svg>
                            <p>Birth:<span class="pl-2 text-[16px] text-[#131313] ">${pets.date_of_birth == null ||
                        pets.date_of_birth == undefined ? pets.date_of_birth = "Unavailable" :
                        pets.date_of_birth}</span></p>
                        </div>

                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-gender-female" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5" />
                            </svg>
                            <p>Gender:<span class="pl-2 text-[16px] text-[#131313] ">${pets.gender == null || pet.gender
                        == undefined ? pet.gender = "Unavailable" : pets.gender}</span></p>
                        </div>

                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-currency-euro" viewBox="0 0 16 16">
                                <path
                                    d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936q-.002-.165.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.6 6.6 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
                            </svg>
                            <p>Price:<span class="pl-2 text-[16px] text-[#131313] ">${pets.price == null || pets.price
                        == undefined ? "Unavailable" : pets.price} </span></p>
                        </div>
                        <div class="divider divider-start"></div>
                        <div class="flex justify-between">
                            <button class="btn-like btn btn-square w-17 h-11 text-[#131313]">
                                <svg class="w-8 h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                    <path
                                        d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                                </svg>
                            </button>
                            <button class="btn-adopt btn btn-square w-17 h-11 text-[#0E7A81] disabled:bg-gray-400 disabled:text-gray-400 disabled:cursor-not-allowed ">
                                Adopt
                            </button>
                            <button  class=" btn-details btn btn-square w-17 h-11 text-[#0E7A81]">
                                Details
                            </button>
                        </div>


                    </div>
                </div>
                   `


            }


            //Event listener to handle data sorting
            document.getElementById("btn-Sort-All-Data").addEventListener('click', function () {
                if (!isSorted) {
                    sortedArray = [...pet].sort((a, b) => b.price - a.price); //data sorted in ascending order
                    container.innerHTML = ``;//clear the container div
                    renderPets(sortedArray);
                    isSorted = true;
                }
                else {
                    container.innerHTML = ``;//clear the container div
                    renderPets(originalPetsData);
                    isSorted = false;
                }
            })

            //This Event Listener add like functionality to all like button.
            document.querySelectorAll(".btn-like").forEach((eachBtn, indexOfNodeLIst) => {
                eachBtn.addEventListener('click', () => {
                    const likeContainer = document.getElementById("container-liked");

                    likeContainer.innerHTML += `
    <div class="p-2 rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
    <img class=" rounded w-full h-auto  object-cover" src="${pet[indexOfNodeLIst].image}" alt="">
    </div>

    `

                })
            })
            // function to handle modal opening and animation
            function renderModal(containerId,waitingTime) {
                const modalContainer = document.getElementById(containerId)
                modalContainer.classList.remove("hidden");


                setTimeout(() => {
                    modalContainer.classList.remove("opacity-0", "scale-20", "invisible");
                }, 50);

                setTimeout(() => {
                    modalContainer.classList.add("opacity-0", "scale-20", "invisible");
                }, waitingTime);


            }


            //This Event Listener add adopt functionality for modal.
            document.querySelectorAll(".btn-adopt").forEach((eachBtn, indexOfNodeLIst) => {
                eachBtn.addEventListener('click', () => {
                    eachBtn.disabled = true;
                    renderModal("Congrats-Modal",3000); 
                    // timer
                    let count = 3; // Start count from 3
                    const timerDiv = document.getElementById("timer");
                    timerDiv.textContent = count;
                    const countdown = setInterval(() => {
                        count--;
                        timerDiv.textContent = count;

                        if (count === 0) {
                            clearInterval(countdown);
                        }
                    }, 1000); // Runs every 1 second

                })
            })
            //Render Modal of Details Page
            document.querySelectorAll(".btn-details").forEach((eachBtn, indexOfNodeLIst) => {
                eachBtn.addEventListener('click', () => {

                    renderModal('modal-Pets-Details')
                })
            })
        }
        renderPets(pet);

    }

    catch (err) {
        console.error("Error Happened:", err);
    }

}
async function renderByCategory(category) {
    try {

        //this api path is dynamically handled by btn
        if (category == "all") {
            container.innerHTML = ``;
            bringAllCards(cloneOfAllPets);
        }
        else {
            apiOrigin = `https://openapi.programming-hero.com/api/peddy/category/${category}`;
            let data = await fetch(apiOrigin);
            let allData = await data.json();
            let allDataMain = allData.data;

            //this if condition 
            if (allDataMain.length == 0) {

                container.className = "";
                container.classList.add("w-full");
                container.innerHTML =
                    `                                        
                                  <div class=" bg-[#f8f8f8] w-full flex justify-center flex-col items-center lg:p-40 md:p-20 p-5 md:space-y-5 space-y-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                                     <img src="assets/error.webp" alt="">
                                     <h1 class="text-[#131313] lg:text-5xl md:text-3xl text-xl  font-extrabold">No Information Available</h1>
                                     <p class="text-center">Currently, no information is available. Please check back later for updates or try different category</p>
                                   </div>            
                                    `;

            }

            else {

                container.innerHTML = ``;
                bringAllCards(allDataMain);

            }


        }
        // 1.5 sec loading Screen
        const loadingContainer = document.getElementById("loading"); //loadingScreenDiv
        const likedMainContainer = document.getElementById("parent-container-like");//The div for representing liked pet

        loadingContainer.classList.remove("hidden");
        container.classList.add("hidden");
        likedMainContainer.classList.add("hidden");

        setTimeout(() => {

            loadingContainer.classList.add("hidden");
            container.classList.remove("hidden");
            likedMainContainer.classList.remove("hidden");
        }, 1500)

    }

    catch (err) {
        console.error("Error Happened:", err)
    }

}






