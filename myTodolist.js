//增加代辦事項按鈕
document.querySelector('.btn-add').addEventListener('click', function(){
    addTodos();
});

//增加代辦事項並判斷有無輸入文字
function addTodos() {
    const inputValue = document.querySelector('.todo-input').value;
    if(inputValue.trim().length === 0){
        alert('您未輸入內容');
        return;
    }
    const newTodo = document.createElement('div');
    newTodo.classList.add("mt-1","bg-secondary","d-flex","align-items-center","todo")
    newTodo.innerHTML = `
        <div class="ps-3 text-light todo-title">${inputValue}</div>
        <div class="ms-auto d-flex">
            <div class="btn btn-primary border-radius-0 btn-edit d-block" type="button" id="button-edit">Edit</div> 
            <div class="btn btn-danger border-radius-0 btn-delete d-block" type="button" id="button-delete">Del</div> 
        </div>  
    `

    document.querySelector('.todo-list').appendChild(newTodo);

    removeBtn();
    completeTodo();

}

//刪除代辦事項按鈕
function removeBtn() {
    let btnDelete = document.querySelectorAll(".btn-delete");
    btnDelete.forEach(function(item,index){
        item.addEventListener('click',function(e){
           e.target.parentElement.parentElement.remove();
        });
    });
};

removeBtn();

//完成增加刪除線
function completeTodo(){
    let todos = document.querySelectorAll('.todo');
    todos.forEach(function(item,index){
        item.addEventListener('click',function(e){
            console.log(e.target.firstElementChild.classList.value.includes("completed"));
            if(e.target.firstElementChild.classList.value.includes("completed") == false){
                e.target.firstElementChild.classList.add('completed');
            }else{
                e.target.firstElementChild.classList.remove('completed');
            }
        });
    })
}

completeTodo();

//修改代辦事項按鈕
function editBtn() {
    let btnEdit = document.querySelectorAll(".btn-edit");
    btnEdit.forEach(function(item,index){
        item.addEventListener('click',function(e){
           console.log(e.target);
        });
    });
};

editBtn();



