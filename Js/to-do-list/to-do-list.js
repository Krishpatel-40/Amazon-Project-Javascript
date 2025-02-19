const todo  = [{name:'Wash Dishes',
                dueDate: '2021-09-30'},
                { name:'Drawing',dueDate: '2021-09-22'}];
 renderTodolist();
function renderTodolist (){
    let todoListHtml='';

    todo.forEach((todoList,index)=>{
      // const name = todoList.name;
      // const dueDate = todoList.dueDate;    //or Below line
      const {name, dueDate} = todoList;
      const html = `<div>${name}</div> 
                    <div>${dueDate}</div> 
       <button class="delBtn">Delete</button>`;
      todoListHtml += html;      
      
    });
  

    console.log(todoListHtml);
      document.querySelector('.todoList').innerHTML = todoListHtml;
    // console.log( document.querySelectorAll('.delBtn'));
    document.querySelectorAll('.delBtn').forEach((btn,index)=>{
      btn.addEventListener('click',()=>{
        todo.splice(index,1);  
      renderTodolist();
      })
  });
}
    // for (let i=0; i<todo.length; i++){}
 
function addTask() {
   const ipElement = document.querySelector('.task');
   const name = ipElement.value;
   const dateInputelement = document.querySelector('.dueDate');
   const dueDate  = dateInputelement.value;
    todo.push({
      // name:name,       //if same hoi ne to aam eklu nam lakhi ekai 
      // dueDate:dueDate
      name,
      dueDate
    });
  console.log(todo);
    ipElement.value = ''; //add kaira pachi input box khali thi jai ne etle
renderTodolist();
}
// 