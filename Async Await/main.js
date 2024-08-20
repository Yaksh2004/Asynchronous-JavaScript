//Completing the Chores

function walkDag(){
    const dogWalked = true;
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(dogWalked){
                resolve("You Walked the Dog");
            } else {
                reject("You didn't walk the Dog")
            }
        }, 2000)
    });
}

function cleanKitchen(){
    const kitchenCleaned = false;
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(kitchenCleaned){
                resolve("You cleaned the Kitchen");
            } else {
                reject("You didn't clean the Kitchen");
            }
        }, 1500);
    });
}

function takeOutTrash(){
    const trashDisposed = true;
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(trashDisposed){
                resolve("You took the trash out");
            } else {
                reject("You didn't take the trash out");
            }
        }, 2500);
    });
}

async function main() {
    try {
        const dogWalked = await walkDag();
    console.log(dogWalked);
    const kitchenCleaned = await cleanKitchen();
    console.log(kitchenCleaned);
    const trashOut = await takeOutTrash();
    console.log(trashOut);
    console.log("You Completed the Chores");
    } catch (error) {
        console.log(error);
    }
}

main();