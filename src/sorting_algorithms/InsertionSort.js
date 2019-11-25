import {array} from '../App';

let arrayspeed ;

function insertionspeed(speed)
{
    arrayspeed = speed ;
}


async function insertionSort()  
{  

    document.getElementById("newarray").disabled = true;
    document.getElementById("bubblesort").disabled = true;
    document.getElementById("quicksort").disabled = true;
    document.getElementById("selectionsort").disabled = true;
    document.getElementById("mergesort").disabled = true;
    document.getElementById("insertionsort").disabled = true;
    document.getElementById("arraySize").disabled = true;

    for (let i = 1; i < array.length; i++) 
    {  
        document.getElementById(i).style["backgroundColor"] = "red";
        if(i!==0)
        {
            document.getElementById(i-1).style["backgroundColor"] = "#17a2b8";
        }
        let key = array[i];  
        let j = i - 1;  
        while (j >= 0 && array[j] > key) 
        {  
            document.getElementById(j+1).style["height"] = array[j]+"px";
            array[j + 1] = array[j];
            document.getElementById(j).style["backgroundColor"] = "yellow";
            await sleep(arrayspeed);
            document.getElementById(j).style["backgroundColor"] = "#17a2b8";
            j = j - 1;  
        }  
        array[j + 1] = key;
        document.getElementById(j+1).style["height"] = key+"px";
    }  
    for(let i = 0 ; i < array.length ; i++)
    {
        document.getElementById(i).style["backgroundColor"] = "#fd7e14";
        await sleep(1/2);
    }

    document.getElementById("newarray").disabled = false;
    document.getElementById("bubblesort").disabled = false;
    document.getElementById("quicksort").disabled = false;
    document.getElementById("selectionsort").disabled = false;
    document.getElementById("mergesort").disabled = false;
    document.getElementById("insertionsort").disabled = false;
    document.getElementById("arraySize").disabled = false;
}

function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms)); 
}


export {insertionspeed};
export {insertionSort};