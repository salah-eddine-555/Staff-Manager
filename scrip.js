
let employers = [];
let count = 0;


// la recupeartion des donner de puis localstorage lorsque le refrecge de la page 
window.addEventListener('load', () => {
    employers = JSON.parse(localStorage.getItem('worker')) || [];
    AfficcherEmplyeesNonAssigne();

    salleReceptions = JSON.parse(localStorage.getItem('receptions')) || [];
    AffichageEmployesReception()

    salleServeurs = JSON.parse(localStorage.getItem('serveurs')) || [];
    AffichageEmployesServeurs();

    salleSecurites =  JSON.parse(localStorage.getItem('securites')) || [];
    AffichageEmployesSecurites()

    salleConferences = JSON.parse(localStorage.getItem('confreneces')) || [];
    AfficherEmployesConferences();

    sallestaffRoms = JSON.parse(localStorage.getItem('sattff')) || [];
    AfficherEmplyoesStaffRom()

    salleArchivers = JSON.parse(localStorage.getItem('archivers')) || [];
    AfficherEmplyersArchivers();


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
        expreiences: [{ company: "companyX", duree: "1 mois" }]
    },
    {
        id: count,
        name: "salah-eddine",
        email: "salah@gmail.com",
        role: "reception",
        tele: "+212 623232",
        photo: 'profile.png',
        localisation: "youssoufia/Rue01",
        expreiences: [{ company: "companyX", duree: "1 mois" }]
    },
    {
        id: count,
        name: "salah-eddine",
        email: "salah@gmail.com",
        role: "reception",
        tele: "+212 623232",
        photo: 'profile.png',
        localisation: "youssoufia/Rue01",
        expreiences: [{ company: "companyX", duree: "1 mois" }]
    }
]

let salleServeurs = []

let salleSecurites = [
     {
        id: count,
        name: "salah-eddine",
        email: "salah@gmail.com",
        role: "securite",
        tele: "+212 623232",
        photo: 'profile.png',
        localisation: "youssoufia/Rue01",
        expreiences: [{ company: "companyX", duree: "1 mois" }]
    }
]

let sallestaffRoms = [
      {
        id: count,
        name: "salah-eddine",
        email: "salah@gmail.com",
        role: "technicienne IT",
        tele: "+212 623232",
        photo: 'profile.png',
        localisation: "youssoufia/Rue01",
        expreiences: [{ company: "companyX", duree: "1 mois" }]
    },
]
let salleConferences = []
let salleArchivers = []








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
                expreiences: [{ company: company, duree: duree }]

            }


        } else {
            alert("les champs n'est pas valide !");
            form.querySelectorAll('input').forEach(i => {
                i.style.border = '1px solid red';
            });
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

// fonction qui lister les emplyer non assigne pour assigne le a une salles 
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
                                <img class="w-75 h-25 rounded-circle mt-0" src="profile.png" alt="">
                        </div>
                        <div class="col-5 card-body  justify-content-around">
                            <p>${receptioniste.name}</p>
                        </div>
                        <div class="col-2 fs-6">
                           <button class="btn btn-link" id=${receptioniste.id}><i class="bi bi-trash text-danger"></i></button>
                        </div>
                    </div>
                   
        `
        document.getElementById("card-reception").innerHTML = carReception;

    }


}


function AffichageEmployesServeurs() {
    console.log('affiche serveru 1');
    document.getElementById("card-serveurs").innerHTML = '';
    let carReception = '';

    for (receptioniste of salleServeurs) {
        carReception += `
                     <div class="d-flex flex-row card-employees" data-id=${receptioniste.id}>
                         <div class="col-3 card-head">
                                <img class="w-75 h-75 rounded-circle mt-0" src="profile.png" alt="">
                        </div>
                        <div class="col-5 card-body  justify-content-around">
                            <p>${receptioniste.name}</p>
                        </div>
                        <div class="col-2 fs-6">
                           <button class="btn btn-link" id=${receptioniste.id}><i class="bi bi-trash text-danger"></i></button>
                        </div>
                    </div>
                   
        `
        document.getElementById("card-serveurs").innerHTML += carReception;
    }


}

function AffichageEmployesSecurites() {
    let carReception = '';

    for (receptioniste of salleSecurites) {
        carReception += `
                    <div class="d-flex flex-row card-employees" data-id=${receptioniste.id}>
                         <div class="col-3 card-head">
                                <img class="w-75 h-25 rounded-circle mt-0" src="profile.png" alt="">
                        </div>
                        <div class="col-5 card-body  justify-content-around">
                            <p>${receptioniste.name}</p>
                        </div>
                        <div class="col-2 fs-6">
                           <button class="btn btn-link" id=${receptioniste.id}><i class="bi bi-trash text-danger"></i></button>
                        </div>
                    </div>
                   
        `
        document.getElementById("card-securite").innerHTML = carReception;

    }

}

function AfficherEmployesConferences() {
    let carReception = '';

    for (receptioniste of salleConferences) {
        carReception += `
                    <div class="d-flex flex-row card-employees" data-id=${receptioniste.id}>
                         <div class="col-3 card-head">
                                <img class="w-75 h-25 rounded-circle mt-0" src="profile.png" alt="">
                        </div>
                        <div class="col-5 card-body  justify-content-around">
                            <p>${receptioniste.name}</p>
                        </div>
                        <div class="col-2 fs-6">
                           <button class="btn btn-link" id=${receptioniste.id}><i class="bi bi-trash text-danger"></i></button>
                        </div>
                    </div>
                   
        `
        document.getElementById("card-conference").innerHTML = carReception;

    }

}

function AfficherEmplyoesStaffRom() {
    let carReception = '';

    for (receptioniste of sallestaffRoms) {
        carReception += `
                     <div class="d-flex flex-row card-employees" data-id=${receptioniste.id}>
                         <div class="col-3 card-head">
                                <img class="w-75 h-25 rounded-circle mt-0" src="profile.png" alt="">
                        </div>
                        <div class="col-5 card-body  justify-content-around">
                            <p>${receptioniste.name}</p>
                        </div>
                        <div class="col-2 fs-6">
                           <button class="btn btn-link" id=${receptioniste.id}><i class="bi bi-trash text-danger"></i></button>
                        </div>
                    </div>
                   
        `
        document.getElementById("card-staffRome").innerHTML = carReception;

    }
}

function AfficherEmplyersArchivers() {
     let carReception = '';

    for (receptioniste of salleArchivers) {
        carReception += `
                     <div class="d-flex flex-row card-employees" data-id=${receptioniste.id}>
                         <div class="col-3 card-head">
                                <img class="w-75 h-25 rounded-circle mt-0" src="profile.png" alt="">
                        </div>
                        <div class="col-5 card-body  justify-content-around">
                            <p>${receptioniste.name}</p>
                        </div>
                        <div class="col-2 fs-6">
                           <button class="btn btn-link" id=${receptioniste.id}><i class="bi bi-trash text-danger"></i></button>
                        </div>
                    </div>
                   
        `
        document.getElementById("card-staffRome").innerHTML = carReception;

    }
}







// AffichageEmployesReception();
// AffichageEmployesServeurs();
// AffichageEmployesSecurites()
// AfficherEmplyoesStaffRom()
// AfficherEmplyersArchivers()





// Exemple corrigé : ajout d'un worker à une salle via clique sur une .card-workers dans le modal
function AddWorkertoSalle(nameZone) {
  const modal = document.getElementById('modal-body');

 
  const handler = (e) => {
    const card = e.target.closest('.card-workers');
    if (!card) {
        alert('tu est clikc hor de la cart')
        return;
    }

    const IdWorker = card.dataset.id;
    const worker = employers.find(emp => emp.id == IdWorker);
  
    if (!worker) {
      alert("Employé introuvable.");
      return;
    }

    

    //fonction pour supprimer le emplyer depuis la list est refrecher la liste 
    const removeFromPool = (id) => {
      const idx = employers.findIndex(e => e.id == id);
      if (idx !== -1) employers.splice(idx, 1);
      AfficcherEmplyeesNonAssigne();
    };

    // On fait la verification par zone premierment 

    if (nameZone.trim() === 'Salle Réception') {
      if (!['reception', 'manager', 'nettoyage'].includes(worker.role)) {
        alert("Rôle non autorisé pour cette salle.");
        return;
      }
      if (salleReceptions.length >= 4) { 
        alert("cette zone est remplie");
        return;
      }
      salleReceptions.push(worker);
      AffichageEmployesReception();
      localStorage.setItem('receptions', JSON.stringify(salleReceptions));
      removeFromPool(IdWorker);
      localStorage.setItem('worker', JSON.stringify(employers));
      return;
    }

    if (nameZone.trim() === 'Salle serveurs') {
      if (!['Techniciens IT', 'manager', 'nettoyage'].includes(worker.role)) {
        alert("Rôle non autorisé pour cette salle.");
        return;
      }
      if (salleServeurs.length >= 3) { // CORRECTION : vérifier salleServeurs
        alert("la salle est remplie");
        return;
      }
      salleServeurs.push(worker);
      AffichageEmployesServeurs();
      localStorage.setItem('serveurs', JSON.stringify(salleServeurs));
      removeFromPool(IdWorker);
      localStorage.setItem('worker', JSON.stringify(employers));
      return;
    }

    if (nameZone.trim() === 'Salle Sécurité') {
      if (!['Securite', 'manager', 'nettoyage'].includes(worker.role)) {
        alert("Rôle non autorisé pour cette salle.");
        return;
      }
      if (salleSecurites.length >= 3) {
        alert("la salle est remplie");
        return;
      }
      salleSecurites.push(worker);
      localStorage.setItem('securites', JSON.stringify(salleSecurites));
      AffichageEmployesSecurites();
      removeFromPool(IdWorker);
      localStorage.setItem('worker', JSON.stringify(employers));
      return;
    }

    if (nameZone.trim() === 'Salle Conference') {
      if (!['manager', 'Securite', 'nettoyage', 'Techniciens IT'].includes(worker.role)) {
        alert("Rôle non autorisé pour cette salle.");
        return;
      }
      salleConferences.push(worker);
      localStorage.setItem('confreneces', JSON.parse(salleConferences));
      AfficherEmployesConferences();
      removeFromPool(IdWorker);
      localStorage.setItem('worker', JSON.stringify(employers));
      return;
    }

    if (nameZone.trim() === 'staff Rom') {
      if (!['manager', 'nettoyage', 'Techniciens IT'].includes(worker.role)) {
        alert("Rôle non autorisé pour cette salle.");
        return;
      }
      sallestaffRoms.push(worker);
      localStorage.setItem('sattff', JSON.parse(sallestaffRoms));
      AfficherEmplyoesStaffRom();
      removeFromPool(IdWorker);
      localStorage.setItem('worker', JSON.stringify(employers));
      return;
    }

    if (nameZone.trim() === 'Salle Archiver') {
      if (!['manager'].includes(worker.role)) {
        alert("Rôle non autorisé pour cette salle.");
        return;
      }
      salleArchivers.push(worker);
      AfficherEmplyersArchivers();
      localStorage.setItem('archivers', JSON.parse(salleArchivers));
      removeFromPool(IdWorker);
      localStorage.setItem('worker', JSON.stringify(employers));
      return;
    }
  };

  // on attache le listener avec once:true pour s'assurer qu'il s'exécute une seule fois
  modal.addEventListener('click', handler, { once: true });
//   modal.addEventListener('click', handler);
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

function AfficherDetailsProfile(id) {

    let html = "";
    document.getElementById('detais-worker').innerHTML = " ";

    // recupere emplyer par id a parties la listed des emplyes 
    let emplyoer = employers.find(emp => emp.id == id);



    if (!emplyoer) {
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
            html += ` 
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
    document.getElementById('detais-worker').innerHTML += html;
}








///////////////////////////////////////////////////////

//on ajouter un evenement lorsque le click sur le card pour la liste des emplyes chauc'un pour ce role
// on recuepere l id est le role de card d'emplyer a clicke
// on chercher par l id d'emplyes selectionee dans la liste principale
// apres ajouter le card d'emplyee a selctionee dans le zone selon son role on ajouter dans la list zone []
// apres supprimer l'employer dans le tableaux principale emplyoers 























