
let employers = [];
let count = 0;

window.addEventListener('load', () => {
    employers = JSON.parse(localStorage.getItem('worker')) || [];
    AfficcherEmplyeesNonAssigne();
})



let salleReceptions = [
    {
        id: count,
        name: "salah-eddine",
        email: "salah@gmail.com",
        role: "reception",
        tele: "+212 623232",
        photo: 'profile.png',
        localisation: "youssoufia/Rue01",
        expreiences: [{company: "companyX", duree: "1 mois"}]
    }
]

let salleServeurs = []
let salleSecurites = []
let sallestaffRoms = []
let salleArchivers = []
let salleConferences = []







document.getElementById('btn-dynamique').addEventListener('click', () => {
    FormDynamique();
})


function FormDynamique() {
    let card = `
        <label class="form-label " for="company">company :</label>
        <input class="form-control" id="company" name="company" type="text">

         <label for="duree">duree : </label>
         <input class="form-control" id="duree" name="duree" type="text">
    `
    document.getElementById('card-dynamique').innerHTML += card;


}

function ValidationDataNoveauEmplyee() {
    const form = document.getElementById('firstform');

    // recupere les donners a saisie par l utilsateur
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let newEmplyer = {};

        const name = form.name.value;
        const email = form.email.value;
        const role = form.role.value;
        const tele = form.tele.value;
        const localisation = form.localisation.value;




        const company = document.getElementById('company').value;
        const duree = document.getElementById('duree').value;

        //validation regex 
        const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validateName = /^[a-zA-Z\s'-]+$/;
        const validateNumber = /^0[67][0-9]{8}$/


        // les champs qui sont oblegatore remplir par l utilisateur 
        if (name.trim() == '' || email.trim() == '' || role.trim() == '' || tele.trim() == '' || localisation.trim() == '') {
            alert("Les champs sont oblegatoire a remplir")
            return;
        } else if (validateEmail.test(email) && validateName.test(name) && validateNumber.test(tele)) {

            newEmplyer = {
                id: ++count,
                name: name,
                email: email,
                role: role,
                tele: tele,
                localisation: localisation,
                expreiences: [{company: company, duree: duree}]
                
            }


        } else {
            alert("les champs n'est pas valide !");
            form.querySelectorAll('input').forEach(i => i.style.border = 'danger');
            return;
        }

        AjouterNoveauEmployer(newEmplyer);

        form.reset();

    })
}

function AjouterNoveauEmployer(newEmplyer) {
    employers.push(newEmplyer);
    localStorage.setItem('worker', JSON.stringify(employers));
     AfficcherEmplyeesNonAssigne()

}


ValidationDataNoveauEmplyee()

function AfficcherEmplyeesNonAssigne() {

    let cardEmplyees = '';

    employers.forEach(employer => {

         cardEmplyees += `
                <div class="row card mt-2 d-flex flex-row">
                    <div class="card-head mt-3 col-3">
                        <img class="w-100 h-50 rounded-circle" src="profile.png" alt="">
                    </div>
                    <div class="card-body col-6 d-flex flex-column">
                        <p class="fs-5">${employer.name}</p>
                        <span class="role-text">${employer.role}</span>
                    </div>

                    <div class="mt-3 col-3 bg-light">
                        <button class="btn-sm btn btn-outline-success text-color-success mt-3 profile-btn" id="${employer.id}"  data-bs-toggle="modal" data-bs-target="#btnmodal">Details</button>
                    </div>
                </div>
        `
    })
     document.getElementById('card-employer').innerHTML = cardEmplyees;
}


// lorsque le click sur une button pour ajouter emplyer est afficher la listes des emplyes


document.querySelectorAll(".assigne").forEach(btn => {
    btn.addEventListener("click", () => {
        let parent = btn.parentElement
        let nameZone = parent.querySelector('.roleName').textContent;
        ListesEmployees(nameZone);
        AddWorkertoSalle(nameZone);


    })
})

// fonction qui lister les emplyer non assigne pour le assigne a une salles 
function ListesEmployees(nameZone) {
    let listEmplyees = '';

    document.getElementById('modal-body').innerHTML = "";

    employers.forEach(employer => {

        if ((nameZone == 'Salle Réception' && employer.role == 'reception')
            || (nameZone == 'Salle Réception' && employer.role == 'manager')
            || (nameZone == 'Salle Réception' && employer.role == 'nettoyage')) {


        
            listEmplyees += `
            <div class="card flex-row gap-2 h-25 w-100 card-workers" data-id=${employer.id}>
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

            document.getElementById('modal-body').innerHTML = listEmplyees;
        }


        if ((nameZone == 'Salle serveurs' && employer.role == 'Techniciens IT')
            || (nameZone == 'Salle serveurs' && employer.role == 'manager')
            || (nameZone == 'Salle serveurs' && employer.role == 'nettoyage')) {

            listEmplyees += `
            <div class="card flex-row gap-2 h-25 w-100 card-workers" data-id=${employer.id}>
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

            document.getElementById('modal-body').innerHTML = listEmplyees;
        }


        if ((nameZone == 'Salle Sécurité' && employer.role == 'Securite')
            || (nameZone == 'Salle Sécurité' && employer.role == 'manager')
            || (nameZone == 'Salle Sécurité' && employer.role == 'nettoyage')) {
            listEmplyees += `
            <div class="card flex-row gap-2 h-25 w-100 card-workers" data-id=${employer.id}>
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
            document.getElementById('modal-body').innerHTML = listEmplyees;
        }

        if ((nameZone == 'Salle Conference' && employer.role == 'manager')
            || (nameZone == 'Salle Conference' && employer.role == 'Techniciens IT')
            || (nameZone == 'Salle Conference' && employer.role == 'nettoyage')) {
            listEmplyees += `
            <div class="card flex-row gap-2 h-25 w-100 card-workers"  data-id=${employer.id}>
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
            document.getElementById('modal-body').innerHTML = listEmplyees;
        }


        if (nameZone == 'Salle Archiver' && employer.role == 'manager') {
            listEmplyees += `
            <div class="card flex-row gap-2 h-25 w-100 card-workers" data-id=${employer.id}>
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
            document.getElementById('modal-body').innerHTML = listEmplyees;
        }

        if ((nameZone == 'staff Rom' && employer.role == 'manager')
            || (nameZone == 'staff Rom' && employer.role == 'Techniciens IT')
            || (nameZone == 'staff Rom' && employer.role == 'nettoyage')
            || (nameZone == 'staff Rom' && employer.role == 'Securite')) {
            listEmplyees += `
            <div class="card flex-row gap-2 h-25 w-100 card-workers"  data-id=${employer.id}>
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
            document.getElementById('modal-body').innerHTML = listEmplyees;
        }

    })
}


function AffichageEmployesReception() {
    let carReception = '';

    for (receptioniste of salleReceptions) {
        carReception += `
                    <div class="d-flex flex-row card-employees" data-id=${receptioniste.id}>
                         <div class="col-3 card-head">
                                <img class="w-100 h-50 rounded-circle mt-2" src="profile.png" alt="">
                        </div>
                        <div class="col-4 card-body p-0 d-flex flex-column justify-content-around">
                            <p>${receptioniste.name}</p>
                        </div>
                      <div class="col-3 d-flex align-items-center">
                        <button class="btn btn-link" id=${receptioniste.id}><i class="bi bi-trash text-danger"></i></button>
                    </div>
                    </div>
                   
        `
        document.getElementById("card-reception").innerHTML = carReception;

    }


}


function  AffichageEmployesServeurs() {
    let carReception = '';

    for (receptioniste of salleServeurs) {
        carReception += `
                    <div class="d-flex flex-row card-employees" data-id=${receptioniste.id}>
                         <div class="col-3 card-head">
                                <img class="w-100 h-50 rounded-circle mt-2" src="profile.png" alt="">
                        </div>
                        <div class="col-4 card-body p-0 d-flex flex-column justify-content-around">
                            <p>${receptioniste.name}</p>
                        </div>
                      <div class="col-3 d-flex align-items-center">
                        <button class="btn btn-link" id=${receptioniste.id}><i class="bi bi-trash text-danger"></i></button>
                    </div>
                    </div>
                   
        `
        document.getElementById("card-serveurs").innerHTML += carReception;
        console.log(document.getElementById("card-serveurs"));
    }


}

function AffichageEmployesSecurites(){
     let carReception = '';

    for (receptioniste of salleSecurites) {
        carReception += `
                    <div class="d-flex flex-row card-employees" data-id=${receptioniste.id}>
                         <div class="col-3 card-head">
                                <img class="w-100 h-50 rounded-circle mt-2" src="profile.png" alt="">
                        </div>
                        <div class="col-4 card-body p-0 d-flex flex-column justify-content-around">
                            <p>${receptioniste.name}</p>
                        </div>
                      <div class="col-3 d-flex align-items-center">
                        <button class="btn btn-link" id=${receptioniste.id}><i class="bi bi-trash text-danger"></i></button>
                    </div>
                    </div>
                   
        `
        document.getElementById("card-securite").innerHTML = carReception;

    }

}

function AfficherEmployesConferences(){
  let carReception = '';

    for (receptioniste of salleConferences) {
        carReception += `
                    <div class="d-flex flex-row card-employees" data-id=${receptioniste.id}>
                         <div class="col-3 card-head">
                                <img class="w-100 h-50 rounded-circle mt-2" src="profile.png" alt="">
                        </div>
                        <div class="col-4 card-body p-0 d-flex flex-column justify-content-around">
                            <p>${receptioniste.name}</p>
                        </div>
                      <div class="col-3 d-flex align-items-center">
                        <button class="btn btn-link" id=${receptioniste.id}><i class="bi bi-trash text-danger"></i></button>
                    </div>
                    </div>
                   
        `
        document.getElementById("card-conference").innerHTML = carReception;

    }

}

function AfficherEmplyoesStaffRom(){
      let carReception = '';

    for (receptioniste of sallestaffRoms) {
        carReception += `
                    <div class="d-flex flex-row card-employees" data-id=${receptioniste.id}>
                         <div class="col-3 card-head">
                                <img class="w-100 h-50 rounded-circle mt-2" src="profile.png" alt="">
                        </div>
                        <div class="col-4 card-body p-0 d-flex flex-column justify-content-around">
                            <p>${receptioniste.name}</p>
                        </div>
                      <div class="col-3 d-flex align-items-center">
                        <button class="btn btn-link" id=${receptioniste.id}><i class="bi bi-trash text-danger"></i></button>
                    </div>
                    </div>
                   
        `
        document.getElementById("card-staffRome").innerHTML = carReception;

    }
}




AffichageEmployesServeurs()
AffichageEmployesReception()
AfficherEmployesConferences()
AfficherEmplyoesStaffRom()




// lorsque click sur un card est retouner id de son parent
// document.getElementById('modal-body').addEventListener("click", (e)=> {
//     const card = e.target.closest('.card-workers');
//     const IdWorker = card.dataset.id;
    
//     document.querySelectorAll(".assigne").forEach(btn => {
//     btn.addEventListener("click", () => {
//         let parent = btn.parentElement
//         let nameZone = parent.querySelector('.roleName').textContent;
//         console.log("name zone"+ nameZone)
//         AddWorkertoSalle(IdWorker, nameZone);
        


//     })
// })
    
// })

function AddWorkertoSalle(nameZone){
    let IdWorker;
    let modal = document.getElementById('modal-body')
    modal.addEventListener("click", ()=> {
    const card = modal.querySelector('.card-workers');
     IdWorker = card.dataset.id;

    // console.log("cette ", nameZone)
    // console.log(IdWorker);

    const worker = employers.find(employer => employer.id == IdWorker)
 


    if(['reception', 'manager', 'nettoyage'].includes(worker.role) && (nameZone.trim() == 'Salle Réception')){
        salleReceptions.push(worker);
        AffichageEmployesReception();
        console.log(1);

        employers.splice(employers.findIndex(e => e.id == IdWorker), 1);
        AfficcherEmplyeesNonAssigne();
        return 
    }
    if(['Techniciens IT', 'manager', 'nettoyage'].includes(worker.role) && (nameZone.trim() == 'Salle serveurs')){
        salleServeurs.push(worker);
        AffichageEmployesServeurs();
        console.log('serverus', salleServeurs);
        console.log(2);
        employers.splice(employers.findIndex(e => e.id == IdWorker), 1);
        AfficcherEmplyeesNonAssigne();
        return 
    
    }
     if(['Securite', 'manager', 'nettoyage'].includes(worker.role) && (nameZone.trim() == 'Salle Sécurité')){

        console.log(nameZone);
        
        salleSecurites.push(worker);
        AffichageEmployesSecurites();
        console.log(3);
         employers.splice(employers.findIndex(e=>e.id == IdWorker), 1);
         AfficcherEmplyeesNonAssigne();
        return 
        
    }
    if(['manager', 'Securite', 'nettoyage','Techniciens IT'].includes(worker.role) && (nameZone.trim() == 'Salle Conference')){
        console.log(nameZone);
        salleConferences.push(worker);
        AfficherEmployesConferences();
        console.log(5)
        employers.splice(employers.findIndex(e=>e.id == IdWorker), 1);
        AfficcherEmplyeesNonAssigne();
        return 
    }
    if(['manager', 'nettoyage','Techniciens IT'].includes(worker.role) && (nameZone.trim() == 'staff Rom')){
        console.log(nameZone);
        sallestaffRoms.push(worker);
        AfficherEmplyoesStaffRom();
        employers.splice(employers.findIndex(e=>e.id == IdWorker), 1);
        AfficcherEmplyeesNonAssigne();
        return 
    }
    if(['manager'].includes(worker.role) && (nameZone.trim() == 'Salle Archiver')){
        console.log(nameZone);
        salleArchivers.push(worker);
        AfficherEmplyoesArchivers();
        console.log(4);
        
        employers.splice(employers.findIndex(e=>e.id == IdWorker), 1)
        AfficcherEmplyeesNonAssigne();
        return 
       
    }    
     
})

}



// pour affciher details de profile pour chaque emplyees 
// on recupere l 'id de emplyer pour chaque click 

document.addEventListener("click", (e) => {
    console.log(employers);
    if (e.target.classList.contains("profile-btn")) {
        const id = e.target.getAttribute("id");
        console.log(id);
        AfficherDetailsProfile(id);
    }
});

function AfficherDetailsProfile(id){
    
    let html  = "";
    document.getElementById('detais-worker').innerHTML = " ";

    // recupere emplyer par id a parties la listed des emplyes 
    let emplyoer = employers.find(emp => emp.id == id);

   

    if(!emplyoer){
        alert("Non emplyoyer trouvee !");
        return;
    }
    




        html = `
            <div class="d-flex align-items-center mb-3">
                                <img src="profile.png" alt="photo" class="rounded-circle me-3" width="100" height="100">

                                <div>
                                    <h5 class="mb-0 text-capitalize">${emplyoer.name}</h5>
                                    <small class="text-muted">      ${emplyoer.role}</small>
                                </div>
                            </div>

                          
                            <p class="mb-1"><strong>Email:</strong>${emplyoer.email}</p>
                            <p class="mb-3"><strong>Téléphone :</strong>${emplyoer.tele}</p>

                           
                            <p class="mb-3">
                                <strong>Localisation :</strong> ${emplyoer.localisation}
                            </p>
                            
                           `
                            emplyoer.expreiences.forEach(exp => {
                                                       html +=` 
                                                           <div class="p-3 bg-light rounded mb-2">
                                                               <h6 class="text-primary mb-2">Expérience</h6>
                                                               <p class="mb-1"><strong>Entreprise :</strong> ${exp.company}</p>
                                                               <p class="mb-0"><strong>Durée :</strong> ${exp.duree}</p>
                                                           </div>
                                                       `
                                                   });
                            `
        </div>                   
        ` 
        document.getElementById('detais-worker').innerHTML = html;
}





   


///////////////////////////////////////////////////////

//on ajouter un evenement lorsque le click sur le card pour la liste des emplyes chauc'un pour ce role 
// on recuepere l id est le role de card d'emplyer a clicke 
// on chercher par l id d'emplyes selectionee dans la liste principale 
// apres ajouter le card d'emplyee a selctionee dans le zone selon son role on ajouter dans la list zone []
// apres supprimer l'employer dans le tableaux principale emplyoers 























