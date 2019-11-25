import {array} from '../App';
import {length_array} from '../App';


let arrayspeed ;

function bubblespeed(speed)
{
    arrayspeed = speed ;
}

async function bubbleSort() 
{
    document.getElementById("newarray").disabled = true;
    document.getElementById("bubblesort").disabled = true;
    document.getElementById("quicksort").disabled = true;
    document.getElementById("selectionsort").disabled = true;
    document.getElementById("mergesort").disabled = true;
    document.getElementById("insertionsort").disabled = true;
    document.getElementById("arraySize").disabled = true;
    for(var i = 0; i < length_array ; i++)
    { 
        document.getElementById(i).style["backgroundColor"] = "red";
        if( i !== 0)
        {
            document.getElementById(i-1).style["backgroundColor"] = "#17a2b8";
        }
        for(var j = 0; j < length_array-i; j++)
        { 
            document.getElementById(j).style["backgroundColor"] = "yellow";
            if( j !== 0)
            {
                document.getElementById(i).style["backgroundColor"] = "red";
                document.getElementById(j-1).style["backgroundColor"] = "#17a2b8";
            }
            if(array[j] >= array[j+1])
            {
                bubbleswap(j, j+1);
                document.getElementById(j).style["height"] = array[j]+"px";
                document.getElementById(j+1).style["height"] = array[j+1]+"px";
                await sleep(arrayspeed);
            }
        }
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
function bubbleswap(a, b) { 
	let t = array[a]; 
    array[a] = array[b]; 
    array[b] = t; 
} 

function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms)); 
}


export {bubblespeed};
export {bubbleSort} ;