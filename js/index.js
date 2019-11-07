    

var slidmenu =0
function collnavbar() {
	if (slidmenu ==0){
	document.getElementById('todomenu').style.display='none';
	
	slidmenu =1}
	else {
	document.getElementById('todomenu').style.display='block';
    slidmenu =0};	

}
 var stringToColor = function stringToColor(str) {
    var hash = 0;
    var color = '#';
    var i;
    var value;
    var strLength;
    if(!str) {
        return color + '333333';
    }
    strLength = str.length;
    for (i = 0; i < strLength; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    for (i = 0; i < 3; i++) {
        value = (hash >> (i * 8)) & 0xFF;
        color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
};
 function DayW(d)
 {
	 var daywheek = 'Sun';
	 switch (d){
		case 1: daywheek = 'Mon'; return daywheek ; break;
		case 2: daywheek = 'Tue'; return daywheek ; break;
		case 3: daywheek = 'Wed'; return daywheek ; break;
		case 4: daywheek = 'Thu'; return daywheek ; break;
		case 5: daywheek = 'Fri'; return daywheek ; break;
		case 6: daywheek = 'Sat'; return daywheek ; break;
		case 0: daywheek = 'Sun'; return daywheek ; break;
		}
 }
 function minuttrue(m)
 {
	 switch (m){
		case 1: return m='01' ; break;
		case 2: return m='02' ; break;
		case 3: return m='03' ; break;
		case 4: return m='04' ; break;
		case 5: return m='05' ; break;
		case 6: return m='06' ; break;
		case 7: return m='07' ; break;
		case 8: return m='08' ; break;
		case 9: return m='09'; break;
		case 0: return m='00'; break;
		}
		return m;
 }
function priority()
 {
	var rad=document.getElementsByName('exampleRadios');
        if (rad[0].checked) { return rad[0].value; };
		if (rad[1].checked) { return rad[1].value; };
		if (rad[2].checked) { return rad[2].value; };
 }

var name = document.getElementById('nameuser').textContent;
var letter = name.substr(0, 1);
var backgroundColor = stringToColor(name);
var elementAvatar = document.getElementById('avatar');
var elementName = document.getElementById('nameuser');
elementAvatar.innerHTML = letter;
elementAvatar.style.backgroundColor = backgroundColor;




function addToDo(){
 var listTodo = document.getElementById('listTodo');
 var TitleTodo = document.getElementById('exampleDropdownFormTitle').value;
 var TextTodo = document.getElementById('exampleDropdownFormText').value;
 let now = new Date();
 var priorityToDo = priority();
 var DateTodo = now.getDate()+' '+DayW(now.getDay())+' '+now.getFullYear()+' '+now.getHours()+':'+minuttrue(now.getMinutes());
 var idTodo = now.getDate()+now.getDay()+now.getFullYear()+now.getHours()+now.getMinutes();
 var ColorTodo = '#FFFFFF';
listTodo.insertAdjacentHTML('afterend', '<div class="card my-2 drag w-100" id="box'+idTodo+'" draggable="true" ondragstart="return dragStart(event)" ><div class="card-body p-2" style="background-color:'+ColorTodo+';"><div align="right"> <font>'+priorityToDo+'</font> <font class="text-muted" >'+DateTodo+'</font></div><div class="row"><div class="col col-sm-1 col-md-1 col-lg-1 col-xl-1"><div class="info-avatar" id="avatar'+idTodo+'"></div></div><div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 p-0"><h5 class="card-title info-name" id="name'+idTodo+'">'+TitleTodo+'</h5><p class="card-text">'+TextTodo+'</p></div><div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 pl-0"><div class="dropdown" align="right"><a class="settingitems"  id="dropdownMenu2" style="font-size: 40pt;color: gray;" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">&#11607;</a><div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2"><button class="dropdown-item" type="button"  id="btnaddtodo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Edit</button><div class="dropdown-menu dropdown-menu-right"><form class="px-4 py-3"><div class="form-group "><label for="exampleDropdownFormTitle2">Title</label><input  class="form-control" id="exampleDropdownFormTitle2" style="width:220px;" ></div><div class="form-group"><label for="exampleDropdownFormText2">Text</label><input  class="form-control " id="exampleDropdownFormText2" style="width:220px;" ></div><div class="form-group "><label for="exampleRadios4">Priority</label><div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="&#11015; Low Priority" checked><label class="form-check-label" for="exampleRadios4">&#11015; Low Priority</label></div><div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="Medium"><label class="form-check-label" for="exampleRadios5">Medium</label></div><div class="form-check "><input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios6" value="&#11014; Hight" ><label class="form-check-label" for="exampleRadios6">&#11014; Hight</label></div></div><button type="submit" class="btn btn-primary" onclick="editToDo()">Save</button></form></div><button class="dropdown-item" onclick="delToDo('+idTodo+')type="button">Удалить</button><button class="dropdown-item" type="button">Изменить приоритет</button></div></div></div></div></div></div>');
var name = document.getElementById('name'+idTodo).textContent;
var letter = name.substr(0, 1);
var BGColor = stringToColor(name);
var elementAvatar = document.getElementById('avatar'+idTodo);
var elementName = document.getElementById('name'+idTodo);
elementAvatar.innerHTML = letter;
elementAvatar.style.backgroundColor = BGColor;
alert(localStorage.getItem('items'));
localStorage.setItem('TitleTodokey'+idTodo, TitleTodo);
localStorage.setItem('TextTodokey'+idTodo, TextTodo);
localStorage.setItem('priorityToDokey'+idTodo, priorityToDo);
localStorage.setItem('DateTodokey'+idTodo, DateTodo);
localStorage.setItem('avatarcolorTodokey'+idTodo, BGColor);
localStorage.setItem('avatarnameTodokey'+idTodo, letter);
localStorage.setItem('colorTodokey'+idTodo, ColorTodo);
let itemsArray= data;
itemsArray.push(idTodo);
localStorage.setItem('items', JSON.stringify(itemsArray));
}
function vvToDo(idTodo){
 var listTodo = document.getElementById('listTodo');
 var TitleTodo = localStorage.getItem('TitleTodokey'+idTodo);
 var TextTodo = localStorage.getItem('TextTodokey'+idTodo);
 var priorityToDo = localStorage.getItem('priorityToDokey'+idTodo);
 var DateTodo = localStorage.getItem('DateTodokey'+idTodo, DateTodo);
 var ColorTodo = localStorage.getItem('colorTodokey'+idTodo);
listTodo.insertAdjacentHTML('afterend', '<div class="card my-2 drag w-100" id="box'+idTodo+'" draggable="true" ondragstart="return dragStart(event)" ><div class="card-body p-2" style="background-color:'+ColorTodo+';"><div align="right"> <font>'+priorityToDo+'</font> <font class="text-muted" >'+DateTodo+'</font></div><div class="row"><div class="col col-sm-1 col-md-1 col-lg-1 col-xl-1"><div class="info-avatar" id="avatar'+idTodo+'"></div></div><div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 p-0"><h5 class="card-title info-name" id="name'+idTodo+'">'+TitleTodo+'</h5><p class="card-text">'+TextTodo+'</p></div><div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 pl-0"><div class="dropdown" align="right"><a class="settingitems"  id="dropdownMenu2" style="font-size: 40pt;color: gray;" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">&#11607;</a><div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2"><button class="dropdown-item" type="button"  id="btnaddtodo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Edit</button><div class="dropdown-menu dropdown-menu-right"><form class="px-4 py-3"><div class="form-group "><label for="exampleDropdownFormTitle2">Title</label><input  class="form-control" id="exampleDropdownFormTitle2" style="width:220px;" ></div><div class="form-group"><label for="exampleDropdownFormText2">Text</label><input  class="form-control " id="exampleDropdownFormText2" style="width:220px;" ></div><div class="form-group "><label for="exampleRadios4">Priority</label><div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="&#11015; Low Priority" checked><label class="form-check-label" for="exampleRadios4">&#11015; Low Priority</label></div><div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="Medium"><label class="form-check-label" for="exampleRadios5">Medium</label></div><div class="form-check "><input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios6" value="&#11014; Hight" ><label class="form-check-label" for="exampleRadios6">&#11014; Hight</label></div></div><button type="submit" class="btn btn-primary" onclick="editToDo()">Save</button></form></div><button class="dropdown-item" onclick="delToDo('+idTodo+')type="button">Удалить</button><button class="dropdown-item" type="button">Изменить приоритет</button></div></div></div></div></div></div>');
elementAvatar = document.getElementById('avatar'+idTodo);
elementName = document.getElementById('name'+idTodo);
elementAvatar.innerHTML = localStorage.getItem('avatarnameTodokey'+idTodo);
elementAvatar.style.backgroundColor = localStorage.getItem('avatarcolorTodokey'+idTodo);
}
function delToDo(idTodo)
{
	localStorage.removeItem('TitleTodokey'+idTodo);
	localStorage.removeItem('TextTodokey'+idTodo);
	localStorage.removeItem('priorityToDokey'+idTodo);
	localStorage.removeItem('DateTodokey'+idTodo);
	localStorage.removeItem('avatarcolorTodokey'+idTodo);
	localStorage.removeItem('avatarnameTodokey'+idTodo);
	localStorage.removeItem('colorTodokey'+idTodo);
	let itemsArray=data ;
	var i=0;
	while(i!=itemsArray.lenght)
	{
		if(itemsArray[i]==idTodo)
		{itemsArray.splice(i, 1);
		localStorage.setItem('items', JSON.stringify(itemsArray));
		break;};
		i++
	}	
	alert('Запись удалена');
}

function editToDo(idTodo){
 var listTodo = document.getElementById('listTodo');
 var TitleTodo = document.getElementById('exampleDropdownFormTitle2').value;
 var TextTodo = document.getElementById('exampleDropdownFormText2').value;
 var priorityToDo = priority();
 var ColorTodo = '#FFFFFF';
 var name = document.getElementById('name'+idTodo).textContent;
 var letter = name.substr(0, 1);
 var BGColor = stringToColor(name);
 var elementAvatar = document.getElementById('avatar'+idTodo);
 var elementName = document.getElementById('name'+idTodo);
 elementAvatar.innerHTML = letter;
elementAvatar.style.backgroundColor = BGColor;
	localStorage.removeItem('TitleTodokey'+idTodo);
	localStorage.removeItem('TextTodokey'+idTodo);
	localStorage.removeItem('priorityToDokey'+idTodo);
	localStorage.removeItem('avatarcolorTodokey'+idTodo);
	localStorage.removeItem('avatarnameTodokey'+idTodo);
	localStorage.removeItem('colorTodokey'+idTodo);
localStorage.setItem('TitleTodokey'+idTodo, TitleTodo);
localStorage.setItem('TextTodokey'+idTodo, TextTodo);
localStorage.setItem('priorityToDokey'+idTodo, priorityToDo);
localStorage.setItem('avatarcolorTodokey'+idTodo, BGColor);
localStorage.setItem('avatarnameTodokey'+idTodo, letter);
localStorage.setItem('colorTodokey'+idTodo, ColorTodo);
let itemsArray= data;
while(i!=itemsArray.lenght)
	{
		if(itemsArray[i]==idTodo)
		{itemsArray.splice(i, 1);
		break;};
		i++
	}
itemsArray.push(idTodo);
localStorage.setItem('items', JSON.stringify(itemsArray));
}


const data = JSON.parse(localStorage.getItem('items'));
if(data!=null){data.forEach(item => {vvToDo(item)});}
 else{
	 let itemsArray=[] ;
     localStorage.setItem('items', JSON.stringify(itemsArray));
	 data = JSON.parse(localStorage.getItem('items'));
	 data.forEach(item => {vvToDo(item)});
	 } 
  