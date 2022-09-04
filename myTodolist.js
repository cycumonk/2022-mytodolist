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
    }else{
        document.querySelector('.todo-list').innerHTML += `
        <div class="mt-1 bg-secondary d-flex align-items-center todo">
            <div class="ps-3 text-light todo-title">${inputValue}</div>
            <div class="ms-auto d-flex">
                <div class="btn btn-primary border-radius-0 btn-edit d-block" type="button" id="button-edit">Edit</div> 
                <div class="btn btn-danger border-radius-0 btn-delete d-block" type="button" id="button-delete">Del</div> 
            </div>
        </div>
    `
    //刪除按鈕
    let removeBtn = document.querySelectorAll(".btn-delete");
        for(var i=0; i<removeBtn.length; i++){
            removeBtn[i].onclick = function(){
                this.parentElement.parentElement.remove();
            }
        }
    
    //完成增加刪除線
    let todoCompleted = document.querySelectorAll(".todo");
        for(var i=0; i<todoCompleted.length; i++){
            todoCompleted[i].onclick = function(e){
                e.target.firstElementChild.classList.toggle("completed");
            }
        }

    let todoTitleCompleted = document.querySelectorAll(".todo-title");
        for(var i=0; i<todoTitleCompleted.length; i++){
            todoTitleCompleted[i].onclick = function(e){
                e.target.classList.toggle("completed");
            }
        }

    

    }
    document.querySelector(".todo-input").value = "";
}



