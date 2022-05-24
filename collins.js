//alert("yes");

const btn = document.querySelector("#btn");

btn.addEventListener("click", function(){


	let messageHead = document.querySelector("#messageHead").value;
	let messageBody = document.querySelector("#messageBody").value; 


	let userMessage = {
		id : new Date().getTime(),
		messageHead : messageHead,
		messageBody : messageBody
	}



	let storedMessages = messageSaved();

	storedMessages.push(userMessage);

	storedMessages = JSON.stringify(storedMessages);

	localStorage.setItem("stored_messages", storedMessages);

	location.reload();


})



function removeMessage(mess_id){

    let messageRemove = JSON.parse(localStorage.getItem("storedMessages"));

    for(let i = 0; i < messageRemove.length; i++){

        if(messageRemove[i].id == mess_id){
            messageRemove.splice(i, 1);

            localStorage.setItem('storedMessages', JSON.stringify(messageRemove));
            break;
        }

    }

    location.reload();



}

           
            






 function messageSaved(){

 	let storedMessages = localStorage.getItem("stored_messages");
 	if (storedMessages == null || storedMessages == undefined) {
 		return [];

 	}else{
 		storedMessages = JSON.parse(storedMessages);
 		return storedMessages;
 	}
 }





 let getMessage = localStorage.getItem("stored_messages");
 getMessage = JSON.parse(getMessage);

 let code = ` <p><button onclick ="removeAll()" class="btn btn-danger">Delete All </button></p>
 			<div class="row">`;


 for(let i = 0; i < getMessage.length;  i++){

 	code+= `<div class='col-md-6'>
                            <div class='card'>
                                <div class='card-heading bg bg-secondary'>
                                    ${getMessage[i].messageHead}
                                </div>

                                <div class='card-body'>
                                ${getMessage[i].messageBody}
                                </div>

                              
                            	<div class="m-auto"><button class ="btn btn-danger" onclick= "removeMessage('${getMessage[i].id}')"> Delete</button> </div>
                            </div>
                        </div>`;


 }

 code+= `</div>`;
 document.querySelector("#show").innerHTML = code;




function removeMessage(mess_id){
	
    let messageRemove = JSON.parse(localStorage.getItem("stored_messages"));

    for(let i = 0; i < messageRemove.length; i++){

        if(messageRemove[i].id == mess_id){
            messageRemove.splice(i, 1);

            localStorage.setItem('stored_messages', JSON.stringify(messageRemove));
            break;
        }

    }

    location.reload();





}


function removeAll (){
	let removeAll = localStorage.removeItem("stored_messages");
	location.reload();
}

           
            


