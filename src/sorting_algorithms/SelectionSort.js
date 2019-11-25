import {array} from '../App';
import {length_array} from '../App';

let arrayspeed ;

function selectionspeed(speed)
{
    arrayspeed = speed ;
}

async function selectionsort()
{
    document.getElementById("newarray").disabled = true;
    document.getElementById("bubblesort").disabled = true;
    document.getElementById("quicksort").disabled = true;
    document.getElementById("selectionsort").disabled = true;
    document.getElementById("mergesort").disabled = true;
    document.getElementById("insertionsort").disabled = true;
    document.getElementById("arraySize").disabled = true;
    for(let i = 0 ; i < length_array ; i++)
    {
        document.getElementById(i).style["backgroundColor"] = "red";
        if(i!==0)
        {
            document.getElementById(i-1).style["backgroundColor"] = "blue";
        }
        await sleep(arrayspeed);
        let imin = i ;
        for(let j = i+1 ; j < length_array ; j++)
        {
            document.getElementById(j).style["backgroundColor"] = "orange";
            if(j!==0)
            {
                document.getElementById(j-1).style["backgroundColor"] = "#17a2b8";
                document.getElementById(i).style["backgroundColor"] = "red";
            }
            if(array[j] < array[imin])
            {
                document.getElementById(imin).style["backgroundColor"] = "#17a2b8";
                imin = j;
            }
            document.getElementById(imin).style["backgroundColor"] = "#621055";
            await sleep(arrayspeed);
        }
        swap(i,imin);
        document.getElementById(i).style["height"] = array[i] + "px";
        document.getElementById(imin).style["height"] = array[imin] + "px";
        document.getElementById(imin).style["backgroundColor"] = "#17a2b8";
    }
    for(var k = 0 ; k  < length_array ; k++)
    {
        let rod = document.getElementById(k);
        rod.style["backgroundColor"] = "#fd7e14";
        await sleep(1); 
        if(k===length_array-1)
        {
            document.getElementById("newarray").disabled = false;
            document.getElementById("bubblesort").disabled = false;
            document.getElementById("quicksort").disabled = false;
            document.getElementById("selectionsort").disabled = false;
            document.getElementById("mergesort").disabled = false;
            document.getElementById("insertionsort").disabled = false;
            document.getElementById("arraySize").disabled = false;
        }
    }
}

function swap(i,imin)
{
    let temp = array[i];
    array[i] = array[imin];
    array[imin] = temp;
}

function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms)); 
} 

export {selectionspeed};
export {selectionsort};