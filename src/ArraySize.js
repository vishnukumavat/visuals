import React from 'react' ;
import './ArraySize.css' ;
import {handleClick} from './App' ;
import {bubblespeed} from './sorting_algorithms/BubbleSort';
import {quickspeed} from './sorting_algorithms/QuickSort';
import {selectionspeed} from './sorting_algorithms/SelectionSort';
import {mergespeed} from './sorting_algorithms/MergeSort';
import { insertionspeed } from './sorting_algorithms/InsertionSort';

function ArraySize()
{
    window.onload = function newSize(){
        let slider = document.getElementById("arraySize");
        let output = document.getElementById("para");
        output.innerHTML = slider.value; // Display the default slider value
        handleClick(slider.value);
        // Update the current slider value (each time you drag the slider handle)
        slider.oninput = function() {
            document.getElementById('container').innerHTML = "";
            output.innerHTML = this.value;
            handleClick(this.value);
        }

        let speedbar = document.getElementById("arraySpeed");
        let speedout = document.getElementById("speedPara");
        speedout.innerHTML = speedbar.value+"ms / move";
        speedbar.oninput = function(){
            speedout.innerHTML = this.value+"ms / move";
            bubblespeed(this.value);
            quickspeed(this.value);
            selectionspeed(this.value);
            mergespeed(this.value);
            insertionspeed(this.value);

        }
    }

    return (<div>
        <div className="slidecontainer p">
            <input type="range" min="10" max="150" defaultValue="50" className="slider" id="arraySize"></input>
            <p className="p text-info"> Size of Array :</p><p className="p text-info" id="para"></p>
        </div>&nbsp;
        <div className="slidecontainer p">
            <input type="range" min="1" max="200" defaultValue="1" className="slider" id="arraySpeed"></input>
            <p className="p text-info"> Sorting Speed :</p><p className="p text-info" id="speedPara"></p>
        </div>
    </div>);
}


export {ArraySize} ;