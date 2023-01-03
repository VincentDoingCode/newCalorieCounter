function initialize(){
    output = document.getElementById("totalCalories");
    outputAppCarb = document.getElementById("appCarbs");
    outputAppFat = document.getElementById("appFats");
    outputAppPro = document.getElementById("appPros");
    outputAppTotal = document.getElementById("appTotal");
    outputEntreeCarb = document.getElementById("entreeCarbs");
    outputEntreeFat = document.getElementById("entreeFats");
    outputEntreePro = document.getElementById("entreePros");
    outputEntreeTotal = document.getElementById("entreeTotal");
    outputDessertCarb = document.getElementById("dessertCarbs");
    outputDessertFat = document.getElementById("dessertFats");
    outputDessertPro = document.getElementById("dessertPros");
    outputDessertTotal = document.getElementById("dessertTotal");
    console.log("EH");
    gettingValue();
}

function gettingValue(){
    totalCalories=0;
    appCarbs = 0;
    appFats = 0;
    appPros = 0;
    appTotal =0;
    entreeCarbs=0;
    entreeFats=0;
    entreePros=0;
    dessertTotal=0;
    dessertCarbs=0;
    dessertFats=0;
    dessertPros=0;
    dessertTotal=0;
    display();
}

function subtract(id,num){
    if(id == 1){
        appCarbs-=num;
        if(appCarbs<0){
            appCarbs=0;
        }
    }
    if(id ==2){
        appFats-=num;
        if(appFats<0){
            appFats=0;
        }
    }
    if(id == 3){
        appPros-=num;
        if(appPros<0){
            appPros=0;
        }
    }
    if(id ==4){
        entreeCarbs-=num;
        if(entreeCarbs<0){
            entreeCarbs=0;
        }
    }
    if(id ==5){
        entreeFats-=num;
        if(entreeFats<0){
            entreeFats=0;
        }
    }
    if(id ==6){
        entreePros-=num;
        if(entreePros<0){
            entreePros=0;
        }
    }
    if(id ==7){
        dessertCarbs-=num;
        if(dessertCarbs<0){
            dessertCarbs=0;
        }
    }
    if(id ==8){
        dessertFats-=num;
        if(dessertFats<0){
            dessertFats=0;
        }
    }
    if(id ==9){
        dessertPros-=num;
        if(dessertPros<0){
            dessertPros=0;
        }
    }

    display();

}

function add(id,num){
    if(id ==1){
        appCarbs += num;
    }
    if(id ==2){
        appFats += num;
    }
    if(id ==3){
        appPros += num;
    }
    if(id ==4){
        entreeCarbs += num;
    }
    if(id ==5){
        entreeFats += num;
    }
    if(id ==6){
        entreePros += num;
    }
    if(id ==7){
        dessertCarbs += num;
    }
    if(id ==8){
        dessertFats += num;
    }
    if(id ==9){
        dessertPros += num;
    }
    display();
}

function display(){
    output.innerHTML = (appCarbs*4)+(appPros*4)+(appFats*9)+(entreeCarbs*4)+(entreePros*4)+(entreeFats*9)+(dessertCarbs*4)+(dessertPros*4)+(dessertFats*9);

    outputAppCarb.innerHTML = appCarbs;
    outputAppFat.innerHTML = appFats;
    outputAppPro.innerHTML = appPros;
    outputAppTotal.innerHTML = (appCarbs*4)+(appPros*4)+(appFats*9);

    outputEntreeCarb.innerHTML = entreeCarbs;
    outputEntreeFat.innerHTML = entreeFats;
    outputEntreePro.innerHTML = entreePros;
    outputEntreeTotal.innerHTML = (entreeCarbs*4)+(entreePros*4)+(entreeFats*9);

    outputDessertCarb.innerHTML = dessertCarbs;
    outputDessertFat.innerHTML = dessertFats;
    outputDessertPro.innerHTML = dessertPros;
    outputDessertTotal.innerHTML = (dessertCarbs*4)+(dessertPros*4)+(dessertFats*9);
}