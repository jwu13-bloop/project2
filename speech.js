const textDisplay = document.getElementById('overlay');

const blob = document.getElementById("blob");


let scale = 1; //normal//

// Initialize SpeechRecognition//
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


recognition.lang = 'en-US'; // English (United States)//

recognition.interimResults = true;
recognition.continuous = true;


// Display recognized text//
recognition.onresult = function (event) {

    let transcript = event.results[event.results.length - 1][0].transcript;

    transcript = transcript 

    //text replace reference: https://tomekdev.com/posts/highlight-text-in-javascript?utm_source=chatgpt.com //
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#:~:text=The%20replace()%20method%20of,original%20string%20is%20left%20unchanged.// 
    
    //text.replace(/\bkeyword\b/gi, match => `<span class="highlight">${match}</span>`);//
    //.replace = string method//
    //\b= word boundary //
    //keyworkd=keyword//
    //gi = global insensitive//
    //match the word and replaces it with the class//

//*** recognize and changes the text//

    .replace(/\bshrink\b/gi, match => {
        return `<span class="shrink">${match}</span>`;
    })

    .replace(/\bgrow\b/gi, match => {
        return `<span class="grow">${match}</span>`;
    })

    .replace(/\bsleep\b/gi, match => {
        return `<span class="sleep">${match}</span>`;
    })

    .replace(/\bblush\b/gi, match => {
        return `<span class="blush">${match}</span>`;
    })

     .replace(/\bwake up\b/gi, match => {
        return `<span class="wake">${match}</span>`;
    })
 
    .replace(/\bhappy\b/gi, match => {
        return `<span class="happy">${match}</span>`;
    })
     .replace(/\brainbow\b/gi, match => {
        return `<span class="rainbow">${match}</span>`;
    })

     .replace(/\blilac\b/gi, match => {
        return `<span class="purple">${match}</span>`;
    });

//*** recognize and changes the blob//

// tolowercase= if statement, recognize transcript, changes words to lowercase (upper and lower) "text", //
if (transcript.toLowerCase().includes("grow")) {
        scale += 0.1;   //changes the scale of the blob//
        blob.style.setProperty('--scale', scale); //--s is used css//
    }


if (transcript.toLowerCase().includes("shrink")) {
        scale -= 0.1;   //changes the scale of the blob//
        blob.style.setProperty('--scale', scale); //--scale is used in css//
    }

if (transcript.toLowerCase().includes("sleep")) {
    blob.style.background = 'radial-gradient(circle at 30% 30%, #56615e, #171717)'; //radial gradient ref: https://cssgradient.io///
    document.body.classList.add("sleep2");
}

if (transcript.toLowerCase().includes("wake up")) {
    blob.style.background = 'radial-gradient(circle at 30% 30%, #7fffd4, #1e90ff)';
    document.body.classList.add("wake2");
}

if (transcript.toLowerCase().includes("blush")) {
    blob.style.background = 'radial-gradient(circle at 30% 30%, #f6ccd9, #ff1e65)';
}

if (transcript.toLowerCase().includes("happy")) {
    blob.style.background = 'radial-gradient(circle at 30% 30%, #f6eecc, #fff81e)';
}

if (transcript.toLowerCase().includes("rainbow")) {
    blob.style.background = 'radial-gradient(circle at 30% 30%, #ff82a1 20%, #fff676 40%, #2ad7fe 70%)';
}

if (transcript.toLowerCase().includes("lilac")) {
    blob.style.background = 'radial-gradient(circle at 30% 30%, #d9ccf6, #781eff)';
}

    textDisplay.innerHTML = transcript;

};



// Error handling//
recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
};

// Start speech recognition//
recognition.start();
