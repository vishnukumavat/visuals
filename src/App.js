import React from 'react';
import {ArraySize} from './ArraySize';
import './App.css' ;
import {bubbleSort} from './sorting_algorithms/BubbleSort';
import {QuickSort} from './sorting_algorithms/QuickSort' ;
import {selectionsort} from './sorting_algorithms/SelectionSort';
import {mergesort} from './sorting_algorithms/MergeSort';
import {insertionSort} from './sorting_algorithms/InsertionSort';


let array = [];
let length_array ;
function handleClick(length)
{
  array = [] ;
  length_array = length ;
  for(let i = 0 ; i < length_array ; i++)
  {
    var size = Math.floor((Math.random() * 500) + 1);
    array.push(size);
    var division = document.createElement("div");
    division.classList.add("bar");
    division.id = i ;
    document.getElementById("container").appendChild(division);
    let bar = document.getElementById(i);
    bar.style["height"] = array[i]+"px";
  }
}

function App()
{
  function newArray(e)
  {
    e.preventDefault();
    array = [];
    document.getElementById('container').innerHTML = "";
    for(let i = 0 ; i< length_array ; i++)
    {
        let size = Math.floor((Math.random() * 500) + 1);
        array.push(size);
        let division = document.createElement("div");
        division.classList.add("bar");
        division.id = i ;
        document.getElementById("container").appendChild(division);
        let bar = document.getElementById(i);
        bar.style["height"] = array[i]+"px"; 
    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbg">
      <a className="navbar-brand" href="./">
        <img src={require('./images/nav4.jpg')} alt="Logo" style={{width:40+'px'}}></img>
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <button id="newarray" className="btn btn-link links" onClick={newArray}>New Array</button>
        </li>
        <li className="nav-item">
         <p className="constant">Sorting Algorithms :</p>
        </li>
        <li className="nav-item">
        <button id="bubblesort" className="btn btn-link links" onClick={bubbleSort}>Bubble Sort</button>
        </li>
        <li className="nav-item">
        <button id="quicksort" className="btn btn-link links" onClick={QuickSort}>Quick Sort</button>
        </li>
        <li className="nav-item">
        <button id="selectionsort" className="btn btn-link links" onClick={selectionsort}>Selection Sort</button>
        </li>
        <li className="nav-item">
        <button id="mergesort" className="btn btn-link links" onClick={mergesort}>Merge Sort</button>
        </li>
        <li className="nav-item">
        <button id="insertionsort" className="btn btn-link links" onClick={insertionSort}>Insertion Sort</button>
        </li>
      </ul>
    </nav>
    <ArraySize></ArraySize>
    <div id="footer" className="footer"><p>@vishnukumavat  &nbsp; &nbsp; November,2019</p></div>
  </div>
  );
}


export {handleClick};
export {length_array} ;
export {array};
export default App;
