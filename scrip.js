
count = 1;
const employers = [
    {   
        id: count,
        name: "salah-eddine",
        email: "salah@gmail.com",
        role: "develeppeur",
        tele: "+212 623232",
        photo: 'profile.png',
        localisation: "youssoufia/Rue01",
        expreiences: {
                    company: "companyX",
                    duree: "1 mois"
                    }
        
    }
]



document.getElementById('btn-dynamique').addEventListener('click', ()=> {
    FormDynamique();
})


function FormDynamique(){
    let card = `
        <label class="form-label " for="company">company :</label>
        <input class="form-control" id="company" name="company" type="text">

         <label for="duree">duree : </label>
         <input class="form-control" id="duree" name="duree" type="text">
    `
    document.getElementById('card-dynamique').innerHTML = card;

 
}

function ValidationDataNoveauEmplyee(){
     const form = document.getElementById('firstform');

    // recupere les donners a saisie par l utilsateur
    form.addEventListener("submit", function(e){
        e.preventDefault();
        let newEmplyer = {};

        const name = form.name.value;
        const email = form.email.value;
        const role = form.role.value;
        const tele  = form.tele.value;
        const localisation = form.localisation.value;
        const photo = form.photo.value;
        

        
        const company = document.getElementById('company').value;
        const duree = document.getElementById('duree').value;

        //validation regex 
        const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validateName = /^[a-zA-Z\s'-]+$/;


        // les champs qui sont oblegatore remplir par l utilisateur 
        if(name.trim() == '' || email.trim() == '' || role.trim() == '' || tele.trim() == '' || localisation.trim() == '' || photo == ''){
            alert("Les champs sont oblegatoire a remplir")
            return;
        }else if( validateEmail.test(email) && validateName.test(name)){

            newEmplyer = {
                    id: ++count,
                    name: name,
                    email: email,
                    role: role,
                    tele: tele,
                    localisation: localisation,
                    photo: photo,
                    expreiences : {
                            company : company,
                            duree: duree
                            }
                    }
        }else {
            alert("les champs n'est pas valide !");
        }  

       AjouterNoveauEmployer(newEmplyer);

        form.reset();
      
    })
}

function AjouterNoveauEmployer(newEmplyer){

    employers.push(newEmplyer);

    console.log(employers);

     AfficcherEmplyeesNonAssigne()

}

ValidationDataNoveauEmplyee()

function AfficcherEmplyeesNonAssigne(){

    let cardEmplyees = '';

    for(employer of employers){
        cardEmplyees +=`
          
                <div class="row card mt-2 d-flex flex-row">
                    <div class="card-head mt-3 col-3">
                        <img class="w-100 h-75 rounded-circle" src="${employer.photo}" alt="">
                    </div>
                    <div class="card-body col-6 d-flex flex-column">
                        <p class="fs-5">${employer.name}</p>
                        <span class="role-text">${employer.role}</span>
                    </div>

                    <div class="mt-3 col-3 bg-light">
                        <button class="btn-sm btn btn-outline-success text-color-success mt-3">Edit</button>
                    </div>
                </div>
        `
    }
   
    document.getElementById('card-employer').innerHTML = cardEmplyees;
    

}

AfficcherEmplyeesNonAssigne()

// lorsque le click sur une button pour ajouter emplyer est afficher la listes des emplyes
document.querySelectorAll('.assigne').forEach(btn => {
    btn.addEventListener('click', ()=> {
        ListesEmployees()
    })
})

// fonction qui lister les emplyer non assigne pour le assigne a une salles 
function ListesEmployees(){
   document.getElementById('modal-body').forO; 
}















