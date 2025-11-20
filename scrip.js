
count = 1;
const employers = [
    {   
        id: count,
        name: "salah-eddine",
        email: "salah@gmail.com",
        role: "reception",
        tele: "+212 623232",
        photo: 'profile.png',
        localisation: "youssoufia/Rue01",
        expreiences: {
                    company: "companyX",
                    duree: "1 mois"
                    }    
    },
    {   
        id: count,
        name: "salah-eddine",
        email: "salah@gmail.com",
        role: "manager",
        tele: "+212 623232",
        photo: 'profile.png',
        localisation: "youssoufia/Rue01",
        expreiences: {
                    company: "companyX",
                    duree: "1 mois"
                    }    
    }
]

let salleReception = []
let salleServeurs = []
let salleSecurite = []







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
    document.getElementById('card-dynamique').innerHTML += card;

 
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
        
        

        
        const company = document.getElementById('company').value;
        const duree = document.getElementById('duree').value;

        //validation regex 
        const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validateName = /^[a-zA-Z\s'-]+$/;
        const validateNumber = /^0[67][0-9]{8}$/


        // les champs qui sont oblegatore remplir par l utilisateur 
        if(name.trim() == '' || email.trim() == '' || role.trim() == '' || tele.trim() == '' || localisation.trim() == ''){
            alert("Les champs sont oblegatoire a remplir")
            return;
        }else if( validateEmail.test(email) && validateName.test(name) && validateNumber.test(tele)){

            newEmplyer = {
                    id: ++count,
                    name: name,
                    email: email,
                    role: role,
                    tele: tele,
                    localisation: localisation,
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

     AfficcherEmplyeesNonAssigne()

}

ValidationDataNoveauEmplyee()

function AfficcherEmplyeesNonAssigne(){

    let cardEmplyees = '';

    for(employer of employers){
        cardEmplyees +=`
          
                <div class="row card mt-2 d-flex flex-row ">
                    <div class="card-head mt-3 col-3">
                        <img class="w-100 h-50 rounded-circle" src="profile.png" alt="">
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


  document.querySelectorAll(".assigne").forEach(btn => {
        btn.addEventListener("click", () => {
            let parent = btn.parentElement
            let nameZone = parent.querySelector('.roleName').textContent;
            ListesEmployees(nameZone);
             
            
        })
    })

// fonction qui lister les emplyer non assigne pour le assigne a une salles 
function ListesEmployees(nameZone){
    
     let listEmplyees = '';

    document.getElementById('modal-body').innerHTML = "";

    employers.forEach(employer => {

         if((nameZone == 'Salle Réception' &&  employer.role == 'reception')
             || (nameZone == 'Salle Réception' && employer.role == 'manager') 
            || (nameZone == 'Salle Réception' && employer.role == 'nettoyage')){
                            

            console.log(1);
             listEmplyees += `
            <div class="card flex-row gap-2 h-25 w-100">
                            <div class="card-head">
                                <img class="w-100 h-100 rounded-circle" src="profile.png" alt="">
                            </div>
                            <div class="card-body p-0 d-flex flex-column justify-content-around">
                                <p>${employer.name}</p>
                                <span>${employer.role}</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <button class="btn btn-link-success"><i class="bi bi-pencil"></i></button>
                            </div>
                        </div>
        `

        document.getElementById('modal-body').innerHTML  = listEmplyees;
        

        // console.log(employer.role);
        

        }

        
        if((nameZone == 'Salle serveurs' && employer.role == 'Techniciens IT') 
            || (nameZone == 'Salle serveurs' && employer.role == 'manager')
            || (nameZone == 'Salle serveurs' && employer.role == 'nettoyage')){
            console.log(employer);
            listEmplyees += `
            <div class="card flex-row gap-2 h-25 w-100">
                            <div class="card-head">
                                <img class="w-100 h-100 rounded-circle" src="profile.png" alt="">
                            </div>
                            <div class="card-body p-0 d-flex flex-column justify-content-around">
                                <p>${employer.name}</p>
                                <span>${employer.role}</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <button class="btn btn-link-success"><i class="bi bi-pencil"></i></button>
                            </div>
                        </div>
        `

        document.getElementById('modal-body').innerHTML  = listEmplyees;
        console.log(2);
        }
        

        if((nameZone == 'Salle Sécurité' && employer.role == 'Securite')
            || (nameZone == 'Salle Sécurité' && employer.role == 'manager' )
            || (nameZone == 'Salle Sécurité' && employer.role == 'nettoyage')){
            listEmplyees += `
            <div class="card flex-row gap-2 h-25 w-100">
                            <div class="card-head">
                                <img class="w-100 h-100 rounded-circle" src="profile.png" alt="">
                            </div>
                            <div class="card-body p-0 d-flex flex-column justify-content-around">
                                <p>${employer.name}</p>
                                <span>${employer.role}</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <button class="btn btn-link-success"><i class="bi bi-pencil"></i></button>
                            </div>
                        </div>
        `
        document.getElementById('modal-body').innerHTML  = listEmplyees;
      console.log(3);
        }

         if((nameZone == 'Salle Conference' && employer.role == 'manager' )
            || (nameZone == 'Salle Conference' && employer.role == 'Techniciens IT')
            || (nameZone == 'Salle Conference' && employer.role== 'nettoyage')){
            listEmplyees += `
            <div class="card flex-row gap-2 h-25 w-100">
                            <div class="card-head">
                                <img class="w-100 h-100 rounded-circle" src="profile.png" alt="">
                            </div>
                            <div class="card-body p-0 d-flex flex-column justify-content-around">
                                <p>${employer.name}</p>
                                <span>${employer.role}</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <button class="btn btn-link-success"><i class="bi bi-pencil"></i></button>
                            </div>
                        </div>
        `
        document.getElementById('modal-body').innerHTML  = listEmplyees;
        console.log(4);
      
        }

        
        if(nameZone == 'Salle Archiver' && employer.role == 'manager'){
            listEmplyees += `
            <div class="card flex-row gap-2 h-25 w-100">
                            <div class="card-head">
                                <img class="w-100 h-100 rounded-circle" src="profile.png" alt="">
                            </div>
                            <div class="card-body p-0 d-flex flex-column justify-content-around">
                                <p>${employer.name}</p>
                                <span>${employer.role}</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <button class="btn btn-link-success"><i class="bi bi-pencil"></i></button>
                            </div>
                        </div>
        `
        document.getElementById('modal-body').innerHTML  = listEmplyees;
        console.log(44)

        }

         if((nameZone == 'staff Rom'&& employer.role == 'manager')
            || (nameZone == 'staff Rom'&& employer.role == 'Techniciens IT')
            || (nameZone == 'staff Rom' && employer.role== 'nettoyage' )
            || (nameZone  == 'staff Rom' && employer.role== 'Securite')){
            listEmplyees += `
            <div class="card flex-row gap-2 h-25 w-100">
                            <div class="card-head">
                                <img class="w-100 h-100 rounded-circle" src="profile.png" alt="">
                            </div>
                            <div class="card-body p-0 d-flex flex-column justify-content-around">
                                <p>${employer.name}</p>
                                <span>${employer.role}</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <button class="btn btn-link-success"><i class="bi bi-pencil"></i></button>
                            </div>
                        </div>
        `
        document.getElementById('modal-body').innerHTML  = listEmplyees;
        console.log(6);
      
        }
      
    })
}
    

///////////////////////////////////////////////////////

















