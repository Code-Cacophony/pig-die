
$(document).ready(function(){
  $("#dice").click(function(event){
    event.preventDefault();

    var dice = Math.floor(Math.random() * 6) + 1
    dices.push(dice)


      if (dices[dices.length -1] == 1) {
        dices = []
      } else {
      }

      console.log(dices)


})
  $("#hold").click(function(event) {
    event.preventDefault();

    console.log(dices);

    sum = 0

    for (var i = 0; i<dices.length; i++) {
      sum = dices[i] + sum
    }

    console.log(sum)
  })
});

dices = []



  //   var firstName = $("#firstName").val();
  //   var lastName = $("#lastName").val();
  //   var phoneNumber = $("#phoneNumber").val();
  //   var contact = new Contact(firstName, lastName, phoneNumber);
  //   addressBook.addContact(contact)
  //   console.log(addressBook.contacts)
  //   //console.log(addressBook.contacts[0].fullName())
  //   //for (var i =0; i < addressBook.contacts.length; i++) {
  //
  //   })
  // $("#findContact").click(function(event) {
  //   event.preventDefault();
  //
  //   full.push($("#fullname").val())
  //   console.log(full)
  //   for (var x=0; x <addressBook.contacts.length; x++) {
  //     if (full[full.length -1] == addressBook.contacts[x].fullName()) {
  //     var findId = addressBook.contacts[x].id
  //     var findFull = addressBook.contacts[x].fullName()
  //     var findResult = addressBook.findContact(findId)
  //     console.log(findId)
  //     console.log(findFull)
  //     console.log(findResult)

//
//
//
//
//     $("#delete").show();
//     $("#fullNameResult").text("")
//     $("#fullNameResult").append("<li>" + findResult.fullName() + "</li>"  +  '<input type="checkbox" name="deleteOption" val="1">')
//     $("#phoneNumberResult").text("")
//     $("#phoneNumberResult").append("<li>" + findResult.phoneNumber + "</li>")
//
//      //'<input type="checkbox" name="deleteOption" val=findResult.id>'
//
//     //console.log(checkedValue)
//     //  addressBook.findContact(contact[0].id)
//     //   $("#fullNameResult").append("<li>" + addressBook.contacts[addressBook.contacts.length -1].fullName() + " " + "</li>")
//     //   $("#phoneNumberResult").append("<li>" + addressBook.contacts[addressBook.contacts.length -1].phoneNumber + " " + "</li>")
//
//     //}
//     //console.log($("#fullNameResult").append("<li>" + addressBook.contacts.fullName() + " " + "</li>"))
//     //if (firstName.match(/[u]/)) {
//     //    addressBook.addContact(contact);
//     //}
//     //else {
//     //    addressBook.addContact(contact);
//     //}
//
//     //console.log(addressBook1);
//     //console.log(addressBook2);
//     //window.alert(addressBook1);
//     //log(full.split(" "))
//       //}
//
//     })
//
//     $("#deleteContact").click(function(event){
//       event.preventDefault();
//
//       if($("input:checkbox[name=deleteOption]:checked")) {
//         console.log(addressBook.deleteContact())
//       }
//
//
//
//     })
//
//     //  if($("#fullNameResult input:checkbox[name=deleteOption]:checked")) {
//     //  }
//     //
//     //
//     //
//     //   event.preventDefault();
//     // })
//
//     // $("#find").submit(function(event){
//     //   event.preventDefault();
//     //
//     //
//     //   full = []
//     //
//     //
//     //   full.push($("#fullname").val().toString())
//     //
//     //   console.log(addressBook.contacts[0].firstName)
//
//       //if (full.)
//       // for (var x =0; x <full.length; x++) {
//       //   if (full[full.length -1] == addressBook.contacts[x].fullName()) {
//       //     addressBook.findContact(addressBook.contacts[x].id)
//       //     $("#findResult").text(addressBook.findContact(addressBook.contacts[x].id).phoneNumber)
//       //     console.log(addressBook.findContact(addressBook.contacts[x].id).phoneNumber)
//       //
//       //   }
//
//       //console.
//   })
//
// // });
// full = []
// var addressBook = new AddressBook
// //var addressBook1 = new AddressBook("Name with U");
// //var addressBook2 = new AddressBook("Others");
//
//
// function AddressBook(title) {
//   //this.title = title; //this = addressBook1 or addressBook2  *self-referencing
//   this.contacts = [];
//   this.currentId = 0;
// }
//
// AddressBook.prototype.addContact = function(contact) {
//   contact.id = this.assignId();
//   this.contacts.push(contact);
// };
//
// AddressBook.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }
//
// AddressBook.prototype.findContact = function(id) {
//   for (var i=0; i< this.contacts.length; i++) {
//     if (this.contacts[i]) {
//       if (this.contacts[i].id == id) {
//         return this.contacts[i];
//       }
//     }
//   }
//   return false;
// }
//
// AddressBook.prototype.deleteContact =function(id) {
//   for (var i=0; i< this.contacts.length; i++) {
//     if (this.contacts[i]) {
//       if (this.contacts[i].id == id) {
//         delete this.contacts[i];
//         return true;
//       }
//     }
//   };
//   return false;
// }
//
//
//
// function Contact(firstName, lastName, phoneNumber) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.phoneNumber = phoneNumber;
// };
//
// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// };
