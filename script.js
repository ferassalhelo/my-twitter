 /**
  *
  *
  *this page is my twitter.
  * auther: feras alhelo.
  * for: GSG code academy.
  *
  *
  notes:
  * dobel on click on the twitter icon the localeStorede hapened it clering.
  * on click on the like button will changeing the element color.
  * on click on the retwitt,
    The contents of the item except for the name will be copied into the tweet form.
  *
  *
  */

 /* data */

 let formationToTheusers;

 /* create or call localestorge */

 if (localStorage.getItem("formation")) {
   formationToTheusers = JSON.parse(window.localStorage.getItem("formation"));
 } else {
   localStorage.setItem("formation", "[]");
   formationToTheusers = JSON.parse(window.localStorage.getItem("formation"));
 }

 /* get elements */

 let userName = document.getElementById("userName"),
   userMassige = document.getElementById("userMassige"),
   userImge = document.getElementById("userImge"),
   contenerPost = document.getElementById("posts"),
   send = document.getElementById("send"),
   twitt = document.getElementById("cahngeStyle"),
   contener = document.getElementById("rightContener");
 /* show localstorge items */

 showTheElenmentInThePage();
 showUsersName();
 changeColor();
 /* function to adding elements for formationTotheUsers */

 send.onclick = () => {
   let user = [userName.value, userMassige.value, userImge.value];

   if (userName.value && userMassige.value) {
     formationToTheusers.unshift(user);
     localStorage.setItem("formation", JSON.stringify(formationToTheusers));
     showTheElenmentInThePage();
     showUsersName();
     repair();
   } else {
     alert("pleasr enter your name and your massige.");
   }
 };

 /* function to show the elenment in the page */

 function showTheElenmentInThePage() {
   contenerPost.innerHTML = "";
   formationToTheusers.map((item, index) => {
     if (item[2] != "") {
       contenerPost.innerHTML += `   <article class="post">
                     <div class="divImgUser">
                       <i class="far fa-user-circle"></i>
                     </div>
                     <div class="divFrmatUser">
                       <div class="userName"><p>${item[0]}</p></div>
                       <div class="userMassige">
                      ${item[1]}
                       </div>
                       <div class="userImg">
                         <img
                           src="${item[2]}"
                           alt="imge"
                         />
                       </div>
                       <div class="divButtons">
                         <button  class="retweet" name='${index}'><i class="fas fa-retweet retweet"></i></button
                         ><button class="like"><i class="far fa-heart"></i></button>
                       </div>
                     </div>
                   </article>`;
     } else {
       contenerPost.innerHTML += `   <article class="post">
     <div class="divImgUser">
       <i class="far fa-user-circle"></i>
     </div>
     <div class="divFrmatUser">
       <div class="userName"><p>${item[0]}</p></div>
       <div class="userMassige">
      ${item[1]}
       </div>
       <div class="divButtons">
         <button  class="retweet" name='${index}'><i class="fas fa-retweet retweet"></i></button
         ><button class="like"><i class="far fa-heart"></i></button>
       </div>
     </div>
   </article>`;
     }
   });
   cleareField();
 }

 /* function to cleareing fields */ function cleareField() {
   return (
     (userName.value = ""),
     (userMassige.value = ""),
     (userImge.value = ""),
     (contenerPost.value = "")
   );
 }

 /* clining localStorage */
 let toCleare = document.getElementById("clearing");
 toCleare.ondblclick = () => {
   localStorage.setItem("formation", "[]");
   formationToTheusers = JSON.parse(window.localStorage.getItem("formation"));
   showTheElenmentInThePage();
   showUsersName();
 };

 /* function to changing the page style */

 twitt.onclick = changeColor;
 function changeColor() {
   let i = document.querySelectorAll("i"),
     title = document.getElementById("clearing"),
     inputs = document.querySelectorAll("input"),
     home = document.getElementById("home"),
     postt = document.getElementById("postt"),
     form = document.querySelectorAll("form")[0],
     section = document.querySelectorAll("section")[1],
     imges = document.querySelectorAll(".userImg"),
     userss = document.getElementById("userss");
   let itemsI = [...i];
   itemsI.map(element => {
     element.classList.toggle("icons");
   });
   let itemsInput = [...inputs];
   itemsInput.map(element => {
     element.classList.toggle("inputs");
   });
   let itemImges = [...imges];
   itemImges.map(element => {
     element.classList.toggle("border");
   });
   twitt.classList.toggle("buttons");
   send.classList.toggle("buttonsHover");
   title.classList.toggle("icons");
   home.classList.toggle("icons");
   postt.classList.toggle("icons");
   form.classList.toggle("border");
   section.classList.toggle("border");
   userss.classList.toggle("icons");

      /* for change the heder icon */

  if (
     document.head.children[6].href ==
     "file:///C:/Users/FirasWinPro/Desktop/projects/my%20work/gsg/twitter/imges/icon-tw.png"
   ) {
     document.head.children[6].href =
       "file:///C:/Users/FirasWinPro/Desktop/projects/my%20work/gsg/twitter/imges/logo.png";
   } else {
     document.head.children[6].href =
       "file:///C:/Users/FirasWinPro/Desktop/projects/my%20work/gsg/twitter/imges/icon-tw.png";
   }
 }

 /* function to like and retweet */

 window.onclick = event => {
   if (event.toElement.parentElement.classList.contains("like")) {
     event.toElement.parentElement.parentElement.parentElement.style.color =
       "rgb(80,80,80)";
     event.target.setAttribute("style", "color:rgb(80,80,80)");
   }
   if (event.toElement.parentElement.classList.contains("retweet")) {
     let index = event.toElement.parentElement.name;
     let elementArray = formationToTheusers[index];
     formationToTheusers.unshift(elementArray);
     localStorage.setItem("formation", JSON.stringify(formationToTheusers));
     showTheElenmentInThePage();
     showUsersName();
     repair();
   }
 };

 /* function to repair style whene make new tweet */

 function repair() {
   let i = document.querySelectorAll("i"),
     imges = document.querySelectorAll(".userImg");
   if (twitt.classList.contains("buttons")) {
     let itemsI = [...i];
     itemsI.map(element => {
       element.classList.add("icons");
       let itemImges = [...imges];
       itemImges.map(element => {
         element.classList.add("border");
       });
     });
   }
 }

 /* function to change the scroll to button  */

 let arrow = document.getElementById("arrow");
 window.onscroll = () => {
   if (window.scrollY > 240) {
     arrow.style.display = "block";
   } else {
     arrow.style.display = "none";
   }
 };
 /* show users name */

 function showUsersName() {
   contener.innerHTML = "";
   let array = [...formationToTheusers];
   let arr = [];
   array.map(elem => {
     if (arr.includes(elem[0]) == false) {
       arr.push(elem[0]);
     }
   });
   arr.map(ele => {
     contener.innerHTML += `<li class='li1' ><i class="far fa-user"></i>   ${ele}<li>`;
   });
 }
