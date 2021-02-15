let animalResult;
let genderResult;
let ageResult;

scriptRun();

function scriptRun() {
    if (dataCheck()) {
        let manReg = new RegExp('^male$', 'i');
        let womanReg = new RegExp('^female$', 'i');
        let gender;

        genderResult = genderResult.toString();
        if (genderResult.match(manReg) !== null) {
            if (ageResult >= 18)
                gender = "man";
            else
                gender = "boy";
        }
        else if (genderResult.match(womanReg) !== null) {
            if (ageResult >= 18)
                gender = "woman";
            else
                gender = "girl";
        }
        else {
            if (ageResult >= 18)
                gender = "hero";
            else
                gender = "kid";
        }
        alert("The superhero name is: " + animalResult + "-" + gender);
    }
}

function dataCheck() {
    let animalReg = new RegExp('^[A-Za-z]{1,20}$');
    let genderReg = new RegExp('^male$|^female$|^$', 'i');
    let ageReg = new RegExp('^[1-9][0-9]{0,4}$')
    let animal = prompt("What animal is the superhero most similar to?");
    animalResult = animal.match(animalReg);

    if (animalResult === null) {
        alert("Not valid data, use only 'A-Za-z' characters with length <= 20")
        return false;
    }

    let gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
    genderResult = gender.match(genderReg);
    if (genderResult === null) {
        alert("Not valid data, use 'male' or 'female' or nothing")
        return false;
    }

    let age = prompt("How old is the superhero?");
    ageResult = age.match(ageReg);
    if (ageResult === null) {
        alert("Not valid data, use '0-9' characters with length <= 5 and value => 0")
        return false;
    }
    return true;
}