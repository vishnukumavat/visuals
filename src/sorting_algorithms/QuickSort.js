import {array} from '../App';
import {length_array} from '../App';


let arrayspeed ;

function quickspeed(speed)
{
    arrayspeed = speed ;
}

async function quicksort(array, start, end)
{
    if(start < end)
    {
        var partitionIndex = await partition(array, start, end);
        await Promise.all([
            quicksort(array, start, partitionIndex-1),
            quicksort(array, partitionIndex+1, end)
        ]);
    }
    return array;
}
async function partition(array, start, end)
{
    var pivot = array[end];
    document.getElementById(end).style["backgroundColor"] = "#621055";
    await sleep(arrayspeed);
    var partitionIndex = start;
    for(var i = start ; i < end ; i++)
    {
        await sleep(arrayspeed);
        if(array[i]<=pivot)
        {
            document.getElementById(i).style["height"] = array[partitionIndex]+"px";
            document.getElementById(partitionIndex).style["height"] = array[i]+"px";
            await swap(i,partitionIndex);
            await sleep(arrayspeed);
            partitionIndex ++;
        }
    }
    document.getElementById(partitionIndex).style["height"] = array[end]+"px";
    document.getElementById(end).style["height"] = array[partitionIndex]+"px";
    await sleep(arrayspeed);
    await swap(partitionIndex,end);
    return partitionIndex;
}
async function swap(i,j)
{
    var temp = array[i];
    array[i] = array[j] ;
    array[j] = temp;
    document.getElementById(i).style["backgroundColor"] = "red";
    await sleep(arrayspeed);
    document.getElementById(j).style["backgroundColor"] = "blue";
    await sleep(arrayspeed);
    document.getElementById(i).style["backgroundColor"] = "#17a2b8";
    await sleep(1);
    document.getElementById(j).style["backgroundColor"] = "#17a2b8";
}
async function QuickSort()
{
    document.getElementById("newarray").disabled = true;
    document.getElementById("bubblesort").disabled = true;
    document.getElementById("quicksort").disabled = true;
    document.getElementById("selectionsort").disabled = true;
    document.getElementById("mergesort").disabled = true;
    document.getElementById("insertionsort").disabled = true;
    document.getElementById("arraySize").disabled = true;
    await quicksort(array,0,length_array-1);
    update();
}
function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms)); 
} 
async function update()
{
    for(var i = 0 ; i < length_array ; i++)
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


export {quickspeed};
export {QuickSort};