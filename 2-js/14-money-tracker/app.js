
// ITEM CONTROLLER, UI CONTROLLER, STORAGE CONTROLLER, APP CONTROLLER

// STORAGE CONTROLLER


// ITEM CONTROLLER
const ItemCtrl = (function(){

    // ITEM CONSTRUCTOR
    // const Item = function(id, name, money){
    //     this.id = id;
    //     this.name = name;
    //     this.money = money;
    // }

    // Data Structure

    const data = {
        items:[
            {id:0, name:"Clothes", money:3000},
            {id:1, name:"Food", money:2000},
            {id:2, name:"Car Service", money:10000},
        ],
        totalMoney:0
    }

    return {
        getItems:function(){
            return data.items;
        },
        getTotalMoney: function(){
            let total = 0;

            if(data.items.length > 0){
                
                data.items.forEach(function(item){
                    total += item.money;

                    data.totalMoney = total;
                })

            }else {
               return data.totalMoney = 0;
            }

            return total;
        }
    }

})();


// UI CONTROLLER

const UICtrl = (function(){


    return{
        populateItemList:function(items){
            
            let html = "";

            items.forEach(function(item){
                html += `<li class="collection-item" id="item-${item.id}">
                            <strong>${item.name}</strong> :
                            <em>${item.money} RS</em>
                            <a href="#!" class="secondary-content">
                                <i class="fa-solid fa-pencil"></i>
                            </a>
                        </li>
                        `
            });

            // Insert into the ul
            document.querySelector("#item-list").innerHTML = html;

        },
        showTotalMoney: function(total){
           document.querySelector(".total-money").innerText = total;
        },
        clearEditState:function(){
            document.querySelector(".update-btn").style.display = "none";
            document.querySelector(".delete-btn").style.display = "none";
            document.querySelector(".back-btn").style.display = "none";
        }
    }

})();


// APP CONTROLLER

const App = (function(){

    return {
        start: function(){

            // Clear the three btn

            UICtrl.clearEditState();
           
            const items = ItemCtrl.getItems();

            if(items.length > 0){

                UICtrl.populateItemList(items);

                const totalMoney = ItemCtrl.getTotalMoney();

                UICtrl.showTotalMoney(totalMoney);

            }

        }
    }

})();

App.start();