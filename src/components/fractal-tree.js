import '../styles/Fractal.scss';
import { useState } from "react";
import Sketch from "react-p5";

const MAX_LEVEL = 4;

// let angle = 30;
let axiom = 'F';
let sentence = axiom;
let len = 80;
let level = MAX_LEVEL;
let canvas;
let selectedGrammar = 0;
let rules = []; // rules in formate where a->b
rules[0] = {
    a: 'F',
    b: 'FF+[+F-F-F]-[-F+F+F]'
};
rules[1] = {
    a: 'F',
    b: 'FF[+FF][-FF]'
};
rules[2] = {
    a: 'F',
    b: 'FF-[-F+F-F]+[+F-F+F]'
};
rules[3] = {
    a: 'F',
    b: 'FF[-F+F-F][+F-F+F]'
};


function generateSentence() {
    len *= 0.5;
    var nextSentence = '';
    for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        var found = false;
        if (current === rules[selectedGrammar].a) {
            found = true;
            nextSentence += rules[selectedGrammar].b;
        }
        if (!found) {
            nextSentence += current;
        }
    }
    sentence = nextSentence;
}

function FractalTree() {

    const [width, height] = [260,260];

    const [angle, updateAngle] = useState(30);
    const [grammar, updateGrammar] = useState(selectedGrammar);
    
    const setup = (p5, canvasParentRef) => {
        canvas = p5;
        p5.angleMode(p5.DEGREES);
        p5.createCanvas(width, height).parent(canvasParentRef);
        p5.background(11,16,20)
        for(let i=0;i<level;++i) {
            generateSentence();
        }
        drawTree();
    }

    const drawTree = () => {
        canvas.resetMatrix();
        canvas.background(11,16,20)
        canvas.translate(width / 2, height);
        canvas.stroke(255, 100);
        for (let i = 0; i < sentence.length; i++) {
            let current = sentence.charAt(i);
    
            // 'FF+[+F-F-F]-[-F+F+F]'
            if (current === 'F') {
                canvas.line(0, 0, 0, -len);
                canvas.translate(0, -len);
            } else if (current === '+') {
                canvas.rotate(angle);
            } else if (current === '-') {
                canvas.rotate(-angle);
            } else if (current === '[') {
                canvas.push();
                // canvas.rotate(canvas.radians(Math.random()*10));
            } else if (current === ']') {
                canvas.pop();
            }
        }
    }

    const loopLevel = () => {
        level++;
        if(level>=MAX_LEVEL) {
            len = 80;
            sentence = axiom;
            level = 0;
        }
        generateSentence();
        drawTree();
    }

    const updateSelectedGrammar = (evt) => {
        len = 80;
        sentence = axiom;
        level = 0;
        selectedGrammar = evt.target.value;
        updateGrammar(selectedGrammar);
        generateSentence();
        drawTree();
    }
      
    return (
        <div className="row-centered">
            <div style={{border: '1px solid white',padding: '8px'}}>
                <Sketch setup={setup}/>
            </div>
            <div style={{flex:1.4}}>
                <p style={{paddingBottom: '8px'}}>
                    A fractal tree is one of the famous fractal geomerty that can be implemented 
                    using <a href="https://en.wikipedia.org/wiki/L-system#Example_2:_Fractal_(binary)_tree">
                        L-System grammar<i className="fa fa-external-link" style={{'fontSize': '14px'}} aria-hidden="true"></i>
                        </a>&nbsp;
                    which is very similar to other grammers of Chomsky hierarchy.
                    The tree is formed on a canvas using Turtle graphics technique utilizing p5.js library.
                    <br/>
                    <br/>
                    <b>Click on the button</b> to view different outputs with different variations.
                </p>
                <div className="fractal-inputs">
                    <div>
                        <span> Angle (+/-): {angle} </span>
                        <input type="range" min="10" max="50" defaultValue={angle} onChange={(evt)=>updateAngle(evt.target.value)} />
                    </div>
                    <div>
                        Type:
                        {rules.map((_,ruleNumber) => 
                            <label htmlFor={'grammar'+ruleNumber} key={ruleNumber}>
                                <input type="radio" name="grammer" id={'grammar'+ruleNumber} value={ruleNumber} 
                                    checked={grammar==ruleNumber} onChange={updateSelectedGrammar}/> 
                                Tree-{ruleNumber+1}
                            </label>
                        )}
                    </div>
                    <div>
                        Rule used: F &rarr; {rules[grammar].b}
                    </div>
                    <button onClick={loopLevel}>
                        Generate <i className="fa fa-tree" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FractalTree;