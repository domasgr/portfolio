// STATES
    let interactiveChat = false;


window.onload = function(){
    createProjectsNavigation(projects.length);  
    showProject(0); 
    fluidAnimation();
    chat();
    
}








// Handles what description to display
function toggleDescriptionInfo(){
    console.log(projects.length)
    let toggleBtn = document.getElementById("toggleBtn");
    toggleBtn.onclick = toggleDescription;

    function toggleDescription(e){
        changeDescription(e.target.checked);
    }

    function changeDescription(checked){
        if(!checked){
            document.getElementById("descSimple").classList.remove("display-none");
            document.getElementById("descTechy").classList.add("display-none");
            document.getElementById("projectDesc").classList.remove("darken", "justify-content-start");
        } else {
            document.getElementById("descSimple").classList.add("display-none");
            document.getElementById("descTechy").classList.remove("display-none");
            document.getElementById("projectDesc").classList.add("darken", "justify-content-start");
        }
    }
}

// FLUID PHYSICS
function fluidAnimation(){
    let fluid1 = document.getElementById("fluid1");
    let fluid2 = document.getElementById("fluid2");
    let test = document.getElementById("test");
    let fluidySection = document.getElementById("fluidy-content");
    let lastPos = null;
    let timer = 0;
    let newPos;

    function clear(){
        lastPos = null;
        fluid1.removeAttribute("style");
        fluid2.removeAttribute("style");
        test.removeAttribute("style");
        fluidySection.removeAttribute("style");
    }
    
    window.onscroll = function(){
        newPos = window.scrollY;

        if( lastPos != null){
            let delta = newPos - lastPos;
            delta = delta/10;
                if(delta > 0){
                    if( delta > 10 ) delta = 10;
                        delta = delta/10+.3;
                        fluid2.style.cssText = "display: none; -webkit-transform:scaleY(" + 0 + '); transform:scaleY(' + 0 + ');';
                        fluid1.style.cssText = "z-index: 10; -webkit-transform:scaleY(" + delta + '); transform:scaleY(' + delta + ');';
                      
                        test.style.cssText = "transform: translateY(-"+delta*100+"px)";
                        //fluidySection.style.cssText = "transform: translateY(-"+delta*100+"px)";
                        
                }
            // min and max values
                else if( delta < 0){
                        delta = delta * -1;
                        delta = delta/10+.3;
                        fluid1.style.cssText = "display: none; -webkit-transform:scaleY(" + 0 + '); transform:scaleY(' + 0 + ');';
                        fluid2.style.cssText = "z-index: 10; -webkit-transform:scaleY(" + delta + '); transform:scaleY(' + delta + ');';

                        test.style.cssText = "transform: translateY("+delta*100+"px)"
                        //fluidySection.style.cssText = "transform: translateY("+delta*100+"px)";
                    
                }   
        }
        lastPos = newPos;
        timer && clearTimeout(timer);
        timer = setTimeout(clear, 30);
    }
}







    

const projects = 
    [
        {
            id: "project-lietufy",
            date: "2019-01-24",
            title: "lietufy.lt",
            img: "img/lietufym.png",
            desc1: "The list of lithuanian artists on the Spotify platform.",
            desc2: "Full-stack single page application with React view library and Node back end.",
            link: "https://www.lietufy.lt/",
            frontIcons1: "<i class='fab fa-html5'></i><i class='fab fa-css3-alt'></i>",
            frontIcons2: "<i class='fab fa-js-square'></i><i class='fab fa-react'></i>",
            frontList: [
                "React requests data from server.", 
                "Creates element for every single artist.", 
                "Handles artists sorting by genre, popularity, followers.",
                "Handles audio playback, indicators."
            ],
            backList: [
                "App authentification (OAuth 2.0).", 
                "Data requests from spotify API.",
                "Sends data as JSON to client side application.",
                '"Nodemailer" library handles mail sending.'
            ],
            backend: "Node.js"
        },
        {
            id: "project-projektu-galerija",
            date: "2018-11-20",
            title: "Projects gallery",
            img: "img/gallerym.png",
            desc1: "Web app with invidually built content management system for wood restoration and other projects.",
            desc2: "Its full stack application with PHP back-end and MySQL database.",
            link: "http://projektu-galerija.herokuapp.com/",
            frontIcons1: "<i class='fab fa-html5'></i><i class='fab fa-css3-alt'></i><i class='fab fa-sass'></i>",
            frontIcons2: "<i class='fab fa-js-square'></i>",
            frontList: [
                "Modal images - opening, navigation."
            ],
            backList: [
                "Login system",
                "Content management system connected with MySQL database.",
                "PHP-mailer library."
            ],
            backend: "PHP"
        }
    ]

function projectTemplate(i){
    let projectTempl =
        `
        <div class="project" id="${projects[i].id}">
            <div class="project-information">
                <div class="project-card">
                    <span class="project-date"><i class="far fa-calendar-alt"></i> ${projects[i].date}</span>
                    <a href="${projects[i].link}" class="link project-visit"><div class="project-title">${projects[i].title}</div></a>
                    <img src="${projects[i].img}" alt="" class="project-img">
                </div>
                <div id="projectDesc" class="project-description">
                    <div id='descSimple' class="description-simple">
                        <p>${projects[i].desc1}</p>
                        <p>${projects[i].desc2}</p> 
                        <a href="${projects[i].link}" class="project-visit link">Visit</a>
                    </div>
                    <div id="descTechy" class="description-techy display-none">
                            <div class="front">
                                    <div class="front-title">Front-end</div>
                                    <div class="front-icons">
                                        <div>${projects[i].frontIcons1}Structure and style</div>
                                        <div>
                                            <div>${projects[i].frontIcons2}</div>
                                            <ul id="${'frontList'+i}">   
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="back">
                                    <h4><span class="number">1</span>Back-end</h4>
                                    <span class="number">2</span>
                                    <ul id="${'backList'+i}" class="technology">
                                        <h5><span class="number">3</span>${projects[i].backend}</h5>        
                                                                          
                                    </ul>
                                </div>
                                
                    </div>
                    
                    <div id="btn-wrapper" class="description-toggle">
                            <label class="switch">
                                    <span class="switch-simple">simple</span>
                                    <span class="switch-techy">techy</span>
                                    <input type="checkbox" id="toggleBtn">
                                    <span class="slider round"></span>
                                </label>
                    </div>
                </div>
            </div>    
        </div>
        `       
    return projectTempl;
}




function showProject(i){
    document.getElementById("projectsWrap").innerHTML = "";
        var project = projectTemplate(i);
        document.getElementById("projectsWrap").innerHTML += project;

        // setting active nav item
        document.querySelectorAll("#projectNav a").forEach(function(el){
            el.classList.remove("pn-active");
        });
        document.getElementById(i).classList.add("pn-active");


        //Filling project's front-end technologies list
        let frontList = document.getElementById("frontList"+i);
        for(let j = 0; j < projects[i].frontList.length; j++){
            let frontListItem = `<li><i class="fas fa-caret-right"></i>${projects[i].frontList[j]}</i></li>`
            frontList.innerHTML += frontListItem;
        }

        //Filling project's back-end technologies list
        let backList = document.getElementById("backList"+i);
        let number = 4;
        for(let j = 0; j < projects[i].backList.length; j++){
            let backListItem = `<li><span class="number">${number}</span>${projects[i].backList[j]}</i></li>`
            backList.innerHTML += backListItem;
            number++;
        }
        toggleDescriptionInfo();  
}
function createProjectsNavigation(numOfProjects){
    let projectNav = document.getElementById("projectNav");
    projectNav.innerHTML = "";
    for(let i = 0; i < numOfProjects; i++){
        const num =  document.createTextNode(i+1);
        let a = document.createElement("a");
        a.appendChild(num);
        a.id = i;
            a.onclick = function(){
                showProject(i)
            }
        projectNav.appendChild(a);
    }


}
    // FILL front end technologies list
    
    // for(projects){}





    function prepInteractiveChat(){
        document.querySelector(".chat-text").style.top = "13px";
        document.querySelector(".chat-text").style.left = "12px";

        document.querySelector(".chat-text h1").style.fontSize = "19px";
        document.querySelector(".chat-text h1").style.marginBottom = "3px";

            let p = document.querySelectorAll(".chat-text p");
            for(let i = 0; i < p.length; i++){
                p[i].style.fontSize = "10px";
            }
        
        document.querySelector(".chat-icon").style.width = "30%";

        document.querySelector("#chat-display").style.cssText = "height: 200px; opacity: 1;";
    }

 
    // var t = document.querySelector("#q1");
    // t.onclick =  function(){
    //     var at = document.createTextNode("Helloooo")
    //     var a = document.createElement("div")
    //     let li = document.createElement("li")
    //     a.appendChild(at)
    //     li.appendChild(a)
    //     a.classList.add("msg");
    //     document.querySelector("#messages").appendChild(li);
    //}

    function chat(){
        
        let jsonAnswers = {
            "q1": "I'm learning to code for 5 months now :)",
            "q2": "I love creating user interface and user expirience, I'm getting so many ideas related with it and I'm having a lot of fun while trying to realise them. Also I'm still programming all my projects back-end on my own. Maybe the day will come when I will be able to call myself a full-stack developer :)",
            "q3": "Check my resume, I'm listing and updating all technologies I learn. Also you can take a look at my projects technical descriptions.",
            "q4": "Probably it's CSS and Javascript animations. Especially I love those which simulates real-life physics. I think animations used in good taste boosts user expirience A LOT!",
            "q5": "This month most of my time I'am spending on plain Javascript (solving lots of exercises) and Angular framework (reading documentation and experimentating).",
            "q6": "For now my main goal is to get a full-time Junior Front-end position and start to improve even faster while working on some bigger projects.",
            "q7": "Of course you should! Now I'm searching for projects to add to my portfolio and I will make sure these projects will have not only clean and professional code, but also a lot of creativity and originality."
        }
        daysBetween(jsonAnswers);

        let userMessages = document.querySelectorAll(".message");
        for(let i = 0; i < userMessages.length; i++){
            userMessages[i].onclick = function(){
                if(interactiveChat === false){
                    prepInteractiveChat();
                    interactiveChat = true;
                    setTimeout(function(){
                        question(userMessages[i].id)
                    }, 1000)
                }else{
                question(userMessages[i].id)}
            }
            
        }
        function question(id){
            let questionText = document.querySelector("#"+id).textContent;

            let li = document.createElement("li");
            let div = document.createElement("div");
            let divText = document.createTextNode(questionText);

            div.appendChild(divText);
                div.classList.add("msg", "user");
            li.appendChild(div);

            let messagesBox = document.querySelector("#messages")
            messagesBox.appendChild(li);
            messagesBox.scrollTop = messagesBox.scrollHeight;

            setTimeout(function(){
                console.log("timeout"+id)
                answer(id);
            }, 500)
        }

        function answer(id){
           
            let answerText = jsonAnswers[id];
            console.log(answerText)
            let li = document.createElement("li");
            let div = document.createElement("div");
            let divText = document.createTextNode(answerText);

            div.appendChild(divText);
                div.classList.add("msg", "me");
            li.appendChild(div);

            let messagesBox = document.querySelector("#messages")
            messagesBox.appendChild(li);
            messagesBox.scrollTop = messagesBox.scrollHeight;
        }
    }



    function copyEmail(){
        
    }







function daysBetween(json){
    //Dates
    let date1 = new Date(2018, 9, 0);
    let date2 = new Date();

    //Get 1 day in milliseconds
    let one_day=1000*60*60*24;
    let one_month=1000*60*60*24*30.5;

    // Convert both dates to milliseconds
    let date1_ms = date1.getTime();
    let date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    let difference_ms = date2_ms - date1_ms;
    
    // Convert back to days and return
    let days = Math.round(difference_ms/one_day); 
    let months = Math.round(difference_ms/one_month);
    
    // Composing a question 1 asnwer string
    let str = `I'm learning to code for ${months} months now. If you want me to be more accurate - for ${days} days :) It were such a fun days!`

    // Put it into json
    json.q1 = str;
}


// document.querySelector("#alertX").onclick = function(){
//     document.querySelector(".alert").style.display = "none";
// }



const copyToClipboard = str => {
    const el = document.createElement('textarea');  // Create a <textarea> element
    el.value = str;                                 // Set its value to the string that you want copied
    el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
    el.style.position = 'absolute';                 
    el.style.left = '-9999px';                      // Move outside the screen to make it invisible
    document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
    const selected =            
      document.getSelection().rangeCount > 0        // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0)     // Store selection if found
        : false;                                    // Mark as false to know no selection existed before
    el.select();                                    // Select the <textarea> content
    document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el);                  // Remove the <textarea> element
    if (selected) {                                 // If a selection existed before copying
      document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
      document.getSelection().addRange(selected);   // Restore the original selection
    }
    emailCopyAlert();
  };

document.querySelector(".email").onclick = function(){
    copyToClipboard("dominykas.grubys@gmail.com");
}


function emailCopyAlert(){
    let alert = document.querySelector("#copyEmail");
    alert.innerHTML = "";
    document.getElementsByClassName("link2icon")[1].style.cssText = "transition: all 0s;font-size: 20px; transform: translateX(99px) translateY(6%); color:white;";
    alert.innerHTML = "<i class='fas fa-check'></i>  Copied!" ;


    document.querySelector(".email").onmouseleave = function(){
        alert.innerHTML = "";
        alert.innerHTML = "<i class='far fa-copy'></i>"
        document.getElementsByClassName("link2icon")[1].style.cssText = "font-size: 33px; transform: translateX(39px) translateY(6%); color: #f49ac1;";
    }

}

    
    