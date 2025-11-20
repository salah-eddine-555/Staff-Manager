// // lorsque le click sur une button pour ajouter emplyer est afficher la listes des emplyes
// document.querySelectorAll('.assigne').forEach(btn => {
//     btn.addEventListener('click', ()=> {
//         ListesEmployees()
//     })
// })




//   document.querySelectorAll(".assigne").forEach(btn => {
//         btn.addEventListener("click", () => {
//             let parent = btn.parentElement
//             let nameZone = parent.querySelector('.roleName').textContent.trim().toLowerCase();
             
//             ListesEmployees(nameZone);
            
//         })
//     })

// // fonction qui lister les emplyer non assigne pour le assigne a une salles 
// function ListesEmployees(nameZone){
      
    
//     employers.forEach(employer => {
//         let listEmplyees = '';
//          if(nameZone === 'Salle Réception' &&  employer.role === 'reception'){
//              listEmplyees += `
//             <div class="card flex-row gap-2 h-25 w-100">
//                             <div class="card-head">
//                                 <img class="w-100 h-100 rounded-circle" src="profile.png" alt="">
//                             </div>
//                             <div class="card-body p-0 d-flex flex-column justify-content-around">
//                                 <p>${employer.name}</p>
//                                 <span>${employer.role}</span>
//                             </div>
//                             <div class="d-flex align-items-center">
//                                 <button class="btn btn-link-success"><i class="bi bi-pencil"></i></button>
//                             </div>
//                         </div>
//         `

//         document.getElementById('modal-body').innerHTML  = listEmplyees;
        

//         // console.log(nameZone);
//         // console.log(employer.role);
        

//         }

        
//         if(nameZone === 'Salle serveurs' && employer.role === 'Techniciens IT'){
//             listEmplyees += `
//             <div class="card flex-row gap-2 h-25 w-100">
//                             <div class="card-head">
//                                 <img class="w-100 h-100 rounded-circle" src="profile.png" alt="">
//                             </div>
//                             <div class="card-body p-0 d-flex flex-column justify-content-around">
//                                 <p>${employer.name}</p>
//                                 <span>${employer.role}</span>
//                             </div>
//                             <div class="d-flex align-items-center">
//                                 <button class="btn btn-link-success"><i class="bi bi-pencil"></i></button>
//                             </div>
//                         </div>
//         `

//         document.getElementById('modal-body').innerHTML  = listEmplyees;
        
    
     

//         }
        

//         if(nameZone == 'Salle Sécurité' && employer.role == 'Securite'){
//             listEmplyees += `
//             <div class="card flex-row gap-2 h-25 w-100">
//                             <div class="card-head">
//                                 <img class="w-100 h-100 rounded-circle" src="profile.png" alt="">
//                             </div>
//                             <div class="card-body p-0 d-flex flex-column justify-content-around">
//                                 <p>${employer.name}</p>
//                                 <span>${employer.role}</span>
//                             </div>
//                             <div class="d-flex align-items-center">
//                                 <button class="btn btn-link-success"><i class="bi bi-pencil"></i></button>
//                             </div>
//                         </div>
//         `

//         document.getElementById('modal-body').innerHTML  = listEmplyees;
      
//         }
//     })
// }
    
// ///////////////////////////////////////////////////////
