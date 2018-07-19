'user strict'

function rollD(n) {
    if (n === 3) {
        result = dieThree(3);
        return result
    }
    if (n === 4) {
        result = dieFour(4);
        return result
    }
    if (n === 5) {
        result = dieFive(5);
        return result
    }
    if (n === 6) {
        result = dieSix(6);
        return result
    }
    if (n === 8) {
        result = dieEight(8);
        return result
    }
    if (n === 10) {
        result = dieTen(10)
        return result
    }
}

function rollDieMasterFunction(n) {
    return Math.floor((Math.random() * n) + 1);
}

function dieThree(n) {
    rollValue = rollDieMasterFunction(n);
    if (rollValue === 1) {
        window.alert('Your jouney begins thourgh the woods, continue with caution...roll 4 sided die');
    } else if (rollValue === 2) {
        window.alert('Your journey begins, you choose to sail the seas in hope of finding your destination...may luck be on your side! roll D8!');
    } else if (rollValue === 3) {
        window.alert('You journey begins, you shall attempt to walk straight into Mordor...Goodluck...You\'re gonna need it! Roll D6!');
    }
}

function dieFour(n) {
    rollValue = rollDieMasterFunction(n);
    if (rollValue === 1) {
        window.alert('You\'ve incountered a beast! Attempt to slay it!');
    } else if (rollValue === 2) {
        window.alert('You get lost among all the trails, you feel tired and hungry and decide to rest for a bit...You\'ve died...');
    } else if (rollValue === 3) {
        window.alert('Congratulations! You made it through the forest, your hungry and tired but you survived to reach your destination!');
    } else if (rollValue === 4) {
        window.alert('error simulation froze....rebooting.....YOU DIED.....GAME OVER...');
    }
}

function dieFive(n) {
    rollValue = rollDieMasterFunction(n);
    if (rollValue === 1 || rollValue === 3) {
        window.alert('Your journey has come to a halt! You were killed by a mysterious act of god.');
    } else if (rollValue === 2 || rollValue === 4) {
        window.alert('You have incountered a terryfing beast of unkown origin! You attempt to escape but are unsuccesful! Roll D10 in attempt to kill the monster!');
    } else if (rollValue === 5) {
        window.alert('The grace of the Gods is in your favor! You\'ve succesfuly completed your journey!');
    }
}

function dieSix(n) {
    rollValue = rollDieMasterFunction(n);

    if (rollValue === 1) {
        window.alert('You simply walked into Mordor, and act that was thought not to be simple...congragulations use D4 to claim your pirze!');
    }
    if (rollValue >= 2) {
        window.alert('Bahaha one does not simply walk into Mordor! Turn back around and Roll D3 again!');
    }
}

function dieEight(n) {
    rollValue = rollDieMasterFunction(n);
    if (rollValue === 1) {
        window.alert('You attempt to smash a beer bottle for good luck.... It does not break...roll d5 for safe passage.');
    } else if (rollValue === 2) {
        window.alert('You\'ve set sail but have forgotten to bring fresh food and water....Your crew decides to eat you after 3 hours.');
    } else if (rollValue === 3 || rollValue === 4 || rollValue === 5) {
        window.alert(' Due to your lack of sailing experince you have gotten you and your crew lost...you will be out of fresh water and food soon! Roll D5 for chance of survival!');
    } else if (rollValue === 6 || rollValue === 7 || rollValue === 8) {
        window.alert('You succesfully charted the seas, despite your lack of experince...you have completed your journey!');
    }
}

function dieTen(n) {
    if (n === 10) {
        rollValue = rollDieMasterFunction(n);
        if (rollValue <= 5) {
            window.alert('Dispite your efforts you were unsucceful in your attempts to evade your perdicament and have been killed!   ),:');
        } else if (rollValue >= 6) {
            window.alert('What a roll! You have succefully evaded your perdicament and managed to finish your journey with out dying!');
        }
    }
}